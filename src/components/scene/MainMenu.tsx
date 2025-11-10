import React, { useEffect, useState } from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { useCharacterContext } from '../../state/character';
import { Characters } from './ChildrenAssets/childrenAssets';
import playSound from '../../sound';
import { screenScale } from "../../utils/scaling";

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
      left: direction === 'left' ? screenScale.x(70): screenScale.x(1010),
      top: screenScale.y(732),
      transform: 'translate(-50%, 0)',
      width: screenScale.x(94),
      height: screenScale.x(137),
      ...style,
    }}
    onPointerDown={() => !disabled && onClick(direction)}
  />
);

const SlidingChild = ({ i }: { i: number }) => {
  const [previousChild, setPreviousChild] = useState(i);
  const [prevStyle, prevApi] = useSpring(() => ({
    left: screenScale.x(540),
  }));
  const [currentStyle, currentApi] = useSpring(() => ({
    left: screenScale.x(540),
  }));

  const PreviousChild = Characters.defaultRaster[previousChild];
  const CurrentChild = Characters.defaultRaster[i];

  useEffect(() => {
    if (i === previousChild) return;

    let sign;

    if (previousChild === 0 && i === 5) {
      sign = -1;
    } else if ((i === 0 && previousChild === 5) || i > previousChild) {
      sign = 1;
    } else {
      sign = -1;
    }

    prevApi.start({
      left: -sign * screenScale.x(1080) + screenScale.x(540),
      config: {
        duration: 600,
        easing: easings.linear,
      },
    });

    currentApi.start({
      from: {
        left: sign * screenScale.x(1080) + screenScale.x(540),
      },
      to: {
        left: screenScale.x(540),
      },
      config: {
        duration: 600,
        easing: easings.linear,
      },
      onRest: () => {
        setPreviousChild(i);
        prevApi.set({ left: screenScale.x(540) });
      },
    });
  });

  return (
    <div className='element-container'>
      <animated.div
        style={{
          position: 'absolute',
          top: screenScale.y(274),
          transform: 'translate(-50%, 0)',
          ...prevStyle,
        }}
      >
        <PreviousChild />
      </animated.div>
      <animated.div
        style={{
          position: 'absolute',
          top: screenScale.y(274),
          transform: 'translate(-50%, 0)',
          ...currentStyle,
        }}
      >
        <CurrentChild />
      </animated.div>
    </div>
  );
};

export function MainMenu() {
  const [selectedChild, setChild] = useCharacterContext();
  const [disabled, setDisabled] = useState<'left' | 'right' | null>(null);
  const [arrowStyles, api] = useSpring(() => ({ opacity: 1 }));

  useEffect(() => {
    if (disabled) {
      setTimeout(() => setDisabled(null), 700);
    }
  }, [disabled]);

  const handleArrowClick = async (direction: 'left' | 'right') => {
    playSound('mainScreenSwoosh');
    console.log('play sound');
    api.start({
      to: [{ opacity: 0 }, { opacity: 1 }],
      from: { opacity: 1 },
    });

    setDisabled(direction);

    setChild((oldPosition) => {
      if (direction === 'left') {
        if (oldPosition === 5) return 0;
        return oldPosition + 1;
      }
      if (oldPosition === 0) return 5;
      return oldPosition - 1;
    });
  };

  return (
    <>
      <SlidingChild i={selectedChild} />
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
