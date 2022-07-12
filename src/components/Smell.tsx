import React from 'react';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';

type SmellType = 'good' | 'bad';

type Props = {
  image: string;
  x: number;
  y: number;
  onChange: (type: SmellType) => void;
  smellType: SmellType;
};

const DraggableImage = ({ image, x, y, onChange, smellType }: Props) => {
  const smellTest = (e: MouseEvent, data: any) => {
    const newX = data.x + x;
    const newY = data.y + y;

    if (newX >= 190 && newX <= 580 && newY >= 430 && newY <= 730) {
      onChange(smellType);
    } else {
      onChange(null);
    }
  };

  return (
    <Draggable bounds={'parent'} onDrag={smellTest}>
      <img
        alt='nuthin'
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

const childImages = {
  good: '/images/Smell/ChildHappy.png',
  bad: '/images/Smell/ChildScared.png',
};

export function Smell() {
  const [smellState, setSmellState] = React.useState<SmellType | null>(null);
  const navigate = useNavigate();

  if (!location.search) {
    navigate('/bodySystems/sensory');
  }

  const childImage = childImages[smellState];

  return (
    <>
      {smellState === 'bad' && (
        <img
          alt='nuthin'
          src='/images/BGBad.png'
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
          }}
        />
      )}
      <img
        alt='nuthin'
        src={childImage || '/images/Smell/Child.png'}
        style={{
          position: 'absolute',
          left: 540,
          top: 276,
          transform: 'translate(-50%, 0)',
        }}
      />
      <img
        src='/images/Smell/BottomOverlay.png'
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      {smellState === 'good' && (
        <img
          src='/images/Smell/Sparkles.png'
          style={{
            position: 'absolute',
            top: 721,
            left: 234,
          }}
        />
      )}
      {smellState === 'bad' && (
        <img
          src='/images/Smell/Flies.png'
          style={{
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: 867,
            left: 517,
          }}
        />
      )}
      {smellState && (
        <img
          src='/images/Smell/Brain.png'
          style={{
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: 507,
            left: 536,
          }}
        />
      )}
      <DraggableImage
        image='/images/Smell/Flower.png'
        x={0}
        y={850}
        smellType='good'
        onChange={setSmellState}
      />
      <DraggableImage
        image='/images/Smell/Shoe.png'
        x={700}
        y={850}
        smellType='bad'
        onChange={setSmellState}
      />
    </>
  );
}
