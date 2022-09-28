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
  const [isHeldDown, setIsHeldDown] = React.useState(false);

  return (
    <animated.span
      style={{
        ...style,
        background: isHeldDown ? '#00315F' : style.background,
      }}
      onPointerDown={() => {
        setIsHeldDown(true);
        setterFn(value);
      }}
      onPointerLeave={() => {
        setIsHeldDown(false);
        setterFn('');
      }}
      onPointerUp={() => {
        setIsHeldDown(false);
        setterFn('');
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {children}
    </animated.span>
  );
}
