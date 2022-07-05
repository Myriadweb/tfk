import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {
  Character,
  CharacterArray,
  useCharacterContext,
} from '../../state/character';

type AnimatedChildProps = {
  i: number;
  x: number;
};

const AnimatedChild = ({ i, x }: AnimatedChildProps) => {
  const ref = useRef(null);
  const props = useSpring({
    to: { left: x },
    from: { left: ref.current ? ref.current.left : x },
    delay: 100,
    config: {
      duration: 500,
    },
  });

  return (
    <animated.img
      key={i}
      src={`images/MainMenu/child${i + 1}.png`}
      style={{
        position: 'absolute',
        left: x,
        top: 274,
        transform: 'translate(-50%, 0)',
        ...props,
      }}
      ref={ref}
    />
  );
};

type AnimatedArrowProps = {
  direction: 'left' | 'right';

  onClick: (direction: 'left' | 'right') => void;
  disabled: 'left' | 'right' | null;
  style?: any;
};

const AnimatedArrow = ({
  direction,

  onClick,
  disabled,
  style,
}: AnimatedArrowProps) => (
  <animated.img
    src={`images/MainMenu/${direction}Arrow${
      disabled === direction ? 'Disabled' : ''
    }.png`}
    style={{
      position: 'absolute',
      left: direction === 'left' ? 70 : 1010,
      top: 732,
      transform: 'translate(-50%, 0)',
      ...style,
    }}
    onPointerDown={() => onClick(direction)}
  />
);

const getCurrentPosition = (x: number) => ((x - 540) * -1) / 1080;

export function MainMenu() {
  const [, setChild] = useCharacterContext();
  const [x, setX] = useState(540);
  const [disabled, setDisabled] = useState<'left' | 'right' | null>(null);
  const [arrowStyles, api] = useSpring(() => ({ opacity: 1 }));

  useEffect(() => {
    if (disabled) {
      setTimeout(() => setDisabled(null), 500);
    }
  }, [disabled]);

  const currentPosition = ((x - 540) * -1) / 1080;

  const handleArrowClick = async (direction: 'left' | 'right') => {
    if (
      (direction === 'left' && currentPosition >= CharacterArray.length - 1) ||
      (direction === 'right' && currentPosition <= 0)
    )
      return;

    api.start({
      to: [{ opacity: 0 }, { opacity: 1 }],
      from: { opacity: 1 },
    });

    setDisabled(direction);

    const sign = direction === 'left' ? -1 : 1;

    const newX = x + sign * 1080;
    setX(newX);
    const newPosition = getCurrentPosition(newX);
    setChild(Character[`child_${newPosition + 1}`]);
  };

  return (
    <>
      {CharacterArray.map((character, i) => (
        <AnimatedChild i={i} x={x + 1080 * i} key={i} />
      ))}
      <AnimatedArrow
        disabled={disabled}
        onClick={handleArrowClick}
        direction='left'
        style={arrowStyles}
      />
      <AnimatedArrow
        disabled={disabled}
        onClick={handleArrowClick}
        direction='right'
        style={arrowStyles}
      />
    </>
  );
}
