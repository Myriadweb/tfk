import { Sprite, Stage, useTick } from '@inlet/react-pixi';
import React from 'react';

export type Direction = 'left' | 'right' | null;

export function ChildImages() {
  const [direction, setDirection] = React.useState<Direction>(null);
  const [x, setX] = React.useState(540);
  const [destination, setDestination] = React.useState<number>(x);

  const changeDirection = (direction: 'left' | 'right') => {
    if (
      (direction === 'right' && x === 540) ||
      (direction === 'left' && x === -540)
    )
      return;
    setDirection(direction);
    if (destination === x) {
      setDestination(x + (direction === 'left' ? -1 : 1) * 1080);
      console.debug(destination);
    }
  };

  useTick((delta) => {
    if (direction === 'right') {
      setX(x + delta * 30);
      if (x >= destination) {
        setX(destination);
        setDirection(null);
      }
    } else if (direction === 'left') {
      setX(x - delta * 30);
      if (x <= destination) {
        setX(destination);
        setDirection(null);
      }
    }
  });

  return (
    <>
      {[0, 1].map((i) => (
        <Sprite
          key={i}
          image={`/Child_${i + 1}.png`}
          anchor={0.5}
          x={x + 1080 * i}
          y={635}
        />
      ))}
      <Sprite
        image='/left_arrow.png'
        anchor={0.5}
        x={70}
        y={635}
        pointerdown={() => changeDirection('left')}
        interactive={true}
      />
      <Sprite
        image='/right_arrow.png'
        anchor={0.5}
        x={1010}
        y={635}
        pointerdown={() => changeDirection('right')}
        interactive={true}
      />
    </>
  );
}

export function PixiTest() {
  return (
    <Stage width={1080} height={1270}>
      <Sprite image='/BG.png' width={1080} height={1270} />
      <ChildImages />
    </Stage>
  );
}
