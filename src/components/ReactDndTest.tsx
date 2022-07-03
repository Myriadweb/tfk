import React from 'react';
import Draggable from 'react-draggable';

type Props = {
  image: string;
  x: number;
  y: number;
};

const DraggableImage = ({ image, x, y }: Props) => {
  const eventLogger = (e: MouseEvent, data: any) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  return (
    <Draggable bounds={'parent'} onStop={eventLogger}>
      <img
        src={image}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </Draggable>
  );
};

export function ReactDndTest() {
  return (
    <>
      <img
        src='/images/Smell/Child_touch.png'
        style={{
          position: 'relative',
          left: 540,
          top: 276,
          transform: 'translate(-50%, 0)',
        }}
      />
      <DraggableImage image='/Flower.png' x={230} y={850} />
      <DraggableImage image='/Shoe.png' x={650} y={850} />
    </>
  );
}
