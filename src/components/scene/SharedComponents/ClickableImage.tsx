import React, { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { useGameContext } from '../../../state/game';
import playSound, { Sounds } from '../../../sound';

export type VariationsType = 'good' | 'bad';

type Props = {
  Component: React.FC<React.SVGProps<SVGSVGElement>> | string;
  x: number;
  y: number;
  onChange: (type: VariationsType) => void;
  type: VariationsType;
  activeStyle: {
    left?: number;
    top?: number;
    transform?: string;
    opacity?: number;
  };
  sound: Sounds;
  onTop?: boolean;
  reset?: boolean;
  valueType?: string;
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
  sound,
}: Props) => {
  const [style, styleApi] = useSpring(() => ({
    transform: `translate(-0%, -0%) rotate(0deg)`,
    left: x,
    top: y,
    opacity: 1,
  }));
  const [, setGameState] = useGameContext();

  useEffect(() => {
    if (reset) {
      handleAnimation();
    }
  }, [reset]);

  const handleAnimation = () => {
    if (onTop) {
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
    styleApi.start(activeStyle);
    setGameState({ step: 0, value: type === 'bad' ? valueType : '' });
    onChange(type);
  };

  return (
    <>
      {typeof Component === 'string' ? (
        <animated.img
          src={Component}
          style={{
            position: 'absolute',
            zIndex: onTop ? 2 : 0,
            ...style,
          }}
          onClick={handleAnimation}
        />
      ) : (
        <animated.div
          style={{
            position: 'absolute',
            zIndex: onTop ? 2 : 0,
            ...style,
          }}
        >
          <Component onClick={handleAnimation} />
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
          onClick={handleAnimation}
        />
      )}
    </>
  );
};
