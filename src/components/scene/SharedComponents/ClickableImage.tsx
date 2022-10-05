import React, { CSSProperties, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { useGameContext } from '../../../state/game';
import playSound, { Sounds } from '../../../sound';
import { use } from 'i18next';

export type VariationsType = 'good' | 'bad';

type Props = {
  Component: React.FC<React.SVGProps<SVGSVGElement>> | string;
  x: number;
  y: number;
  onChange: (type: VariationsType) => void;
  type: VariationsType;
  activeStyle?: {
    left?: number;
    top?: number;
    transform?: string;
    opacity?: number;
  };
  sound: Sounds;
  onTop?: boolean;
  reset?: boolean;
  valueType?: string;
  style?: CSSProperties;
  disableTimeout?: boolean;
  timeoutDuration?: number
};
export const ClickableImage = ({
  Component,
  x,
  y,
  onChange,
  type,
  onTop,
  reset,
  valueType,
  activeStyle,
  style: BaseStyle,
  sound,
  disableTimeout,
  timeoutDuration,
}: Props) => {
  const [style, styleApi] = useSpring(() => ({
    transform: `translate(-0%, -0%) rotate(0deg)`,
    left: x,
    top: y,
    opacity: 1,
  }));
  const [, setGameState] = useGameContext();
  const timeout = useRef(null);

  useEffect(() => {
    if (reset) {
      handleAnimation();
    }
  }, [reset]);

  const handleAnimation = (res?: boolean) => {
    if (style.transform.isAnimating) return;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (onTop || res) {
      styleApi.start({
        left: x,
        top: y,
        transform: `translate(-0%, -0%) rotate(0deg)`,
        opacity: 1,
      });
      if (!reset) {
        setGameState({ step: 0, value: '' });
      }
      onChange(null);
      return;
    }

    playSound(sound);
    if (activeStyle) {
      styleApi.start(activeStyle);
    }
    setGameState({ step: 0, value: type === 'bad' ? valueType : '' });
    onChange(type);

    if (disableTimeout) return;

    timeout.current = setTimeout(() => handleAnimation(true), timeoutDuration ? timeoutDuration : 3000);
  };

  return (
    <>
      {typeof Component === 'string' ? (
        <animated.img
          style={{
            position: 'absolute',
            zIndex: onTop ? 2 : 0,
            ...style,
            ...BaseStyle,
          }}
          src={Component}
          onClick={() => handleAnimation()}
        />
      ) : (
        <animated.div
          style={{
            position: 'absolute',
            zIndex: onTop ? 2 : 0,
            ...style,
            ...BaseStyle,
          }}
        >
          <Component onClick={() => handleAnimation()} />
        </animated.div>
      )}
      {onTop && (
        <div
          style={{
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '100%',
          }}
          onClick={() => handleAnimation()}
        />
      )}
    </>
  );
};
