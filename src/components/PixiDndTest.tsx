import { Sprite, Stage } from '@inlet/react-pixi';
import React from 'react';

const useDrag = ({ x, y }) => {
  const sprite = React.useRef();
  const [isDragging, setIsDragging] = React.useState(false);
  const [position, setPosition] = React.useState({ x, y });

  const onDown = React.useCallback(() => setIsDragging(true), []);
  const onUp = React.useCallback(() => setIsDragging(false), []);
  const onMove = React.useCallback(
    (e) => {
      if (isDragging && sprite.current) {
        // @ts-ignore
        setPosition(e.data.getLocalPosition(sprite.current.parent));
      }
    },
    [isDragging, setPosition]
  );

  return {
    ref: sprite,
    interactive: true,
    pointerdown: onDown,
    pointerup: onUp,
    pointerupoutside: onUp,
    pointermove: onMove,
    anchor: 0.5,
    position,
  };
};

type Props = {
  image: string;
  x: number;
  y: number;
};

const DraggableSprite = ({ image, x, y, ...props }: Props) => {
  const bind = useDrag({ x, y });

  return <Sprite image={image} {...bind} {...props} />;
};

export function ChildImages() {
  return (
    <>
      <Sprite
        image='/Child_touch.png'
        anchor={[0.5, 0]}
        x={540}
        y={276}
        interactive={true}
      />
      <DraggableSprite image='/Flower.png' x={230} y={1000} />
      <DraggableSprite image='/Shoe.png' x={750} y={1000} />
    </>
  );
}

export function PixiDndTest() {
  return (
    <Stage width={1080} height={1270}>
      <Sprite image='/BG.png' width={1080} height={1270} />
      <ChildImages />
    </Stage>
  );
}
