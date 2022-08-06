import React, { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { useGameContext } from '../../state/game';
import { Sounds } from '../../sound';

export type VariationsType = 'good' | 'bad';

type Props = {
  Component: React.FC<React.SVGProps<SVGSVGElement>> | string;
  x: number;
  y: number;
  onChange: (type: VariationsType) => void;
  type: VariationsType;
  activeStyle: { left?: number; top?: number; transform?: string };
  sound: Sounds;
  onTop?: boolean;
  reset?: boolean;
  finalValueType?: string;
};
export const ClickableImage = ({
  Component,
  x,
  y,
  onChange,
  type,
  onTop,
  reset,
  finalValueType,
  activeStyle,
}: Props) => {
  const [style, styleApi] = useSpring(() => ({
    transform: `translate(-0%, -0%) rotate(0deg)`,
    left: x,
    top: y,
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
      });
      if (!reset) {
        setGameState({ step: 0, value: '' });
      }
      onChange(null);
      return;
    }

    // TODO: Add sound
    // playSound(type === 'good' ? 'smellsGood' : 'smellsBad');
    styleApi.start(activeStyle);
    setGameState({ step: 0, value: type === 'bad' ? finalValueType : '' });
    onChange(type);
  };

  if (typeof Component === 'string') {
    return (
      <animated.img
        src={Component}
        style={{
          position: 'absolute',
          zIndex: onTop ? 2 : 0,
          ...style,
        }}
        onClick={handleAnimation}
      />
    );
  }

  return (
    <animated.div
      style={{
        position: 'absolute',
        zIndex: onTop ? 2 : 0,
        ...style,
      }}
    >
      <Component onClick={handleAnimation} />
    </animated.div>
  );
};
