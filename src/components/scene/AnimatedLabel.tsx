import { animated } from 'react-spring';
import * as React from 'react';

type Props = {
  style: any;
  value: string;
  setterFn: (value: string) => void;
  children: React.ReactNode;
};

export default function AnimatedLabel({
  style,
  value,
  setterFn,
  children,
}: Props) {
  return (
    <animated.span
      style={style}
      onPointerDown={() => setterFn(value)}
      onPointerLeave={() => setterFn('')}
      onPointerUp={() => setterFn('')}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </animated.span>
  );
}
