import Draggable from 'react-draggable';
import { animated } from 'react-spring';
import * as React from 'react';

type Props = {
  ImageComponent: React.FC<React.SVGProps<SVGSVGElement>> | string;
  x: number;
  y: number;
  onComplete: (x: number, y: number) => void;
  bounds?:
    | {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
      }
    | string;
};

export const DraggableImage = ({
  ImageComponent,
  x,
  y,
  onComplete,
  bounds,
}: Props) => {
  const track = (_e: MouseEvent, data: any) => {
    const newX = Math.floor(x + data.x);
    const newY = Math.floor(y + data.y);

    onComplete(newX, newY);
  };

  return (
    <Draggable bounds={bounds || 'parent'} onDrag={track} position={null}>
      <animated.div
        style={{
          position: 'absolute',
          left: x,
          top: y,
        }}
      >
        {typeof ImageComponent === 'string' ? (
          <img src={ImageComponent} />
        ) : (
          <ImageComponent />
        )}
      </animated.div>
    </Draggable>
  );
};
