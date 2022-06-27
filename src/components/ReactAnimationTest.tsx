import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

type Props = {
  i: number;
  x: number;
};

const AnimatedChild = ({ i, x }: Props) => {
  const ref = useRef(null);
  const props = useSpring({
    to: { left: x },
    from: { left: ref.current ? ref.current.left : x },
  });

  return (
    <animated.img
      key={i}
      src={`/Child_${i + 1}.png`}
      style={{
        position: 'absolute',
        left: x,
        top: 635,
        transform: 'translate(-50%,-50%)',
        ...props,
      }}
      ref={ref}
    />
  );
};

export function ReactAnimationTest() {
  const [x, setX] = useState(540);
  const currentPosition = ((x - 540) * -1) / 1080;

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (
      (direction === 'left' && currentPosition >= 1) ||
      (direction === 'right' && currentPosition <= 0)
    )
      return;

    const sign = direction === 'left' ? -1 : 1;

    setX(x + sign * 1080);
  };

  return (
    <>
      {[0, 1].map((i) => (
        <AnimatedChild i={i} x={x + 1080 * i} key={i} />
      ))}
      <animated.img
        src='/left_arrow.png'
        style={{
          position: 'absolute',
          left: 70,
          top: 635,
          transform: 'translate(-50%,-50%)',
        }}
        onPointerDown={() => handleArrowClick('left')}
      />
      <animated.img
        src='/right_arrow.png'
        style={{
          position: 'absolute',
          left: 1010,
          top: 635,
          transform: 'translate(-50%,-50%)',
        }}
        onPointerDown={() => handleArrowClick('right')}
      />
    </>
  );
}
