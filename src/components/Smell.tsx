import React from 'react';
import Draggable from 'react-draggable';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

type SmellType = 'good' | 'bad';

type Props = {
  image: string;
  x: number;
  y: number;
  onChange: (type: SmellType) => void;
  smellType: SmellType;
  onTop?: boolean;
};

const DraggableImage = ({ image, x, y, onChange, smellType, onTop }: Props) => {
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
          zIndex: onTop ? 2 : 0,
        }}
      />
    </Draggable>
  );
};

const childImages = {
  good: 'images/Smell/ChildHappy.png',
  bad: 'images/Smell/ChildScared.png',
};

export function Smell() {
  const [smellState, setSmellState] = React.useState<SmellType | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [brain, brainAPI] = useSpring(() => ({ opacity: 0 }));
  const [effectStyle, effectAPI] = useSpring(() => ({ opacity: 0 }));

  if (smellState) {
    brainAPI.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 500,
      },
    });
    effectAPI.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 300,
    });
    overlayAPI.start({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: {
        duration: 500,
      },
    });
  } else {
    effectAPI.set({ opacity: 0 });
  }

  if (!location.search) {
    navigate('/bodySystems/sensory');
  }

  const childImage = childImages[smellState];

  return (
    <>
      {smellState === 'bad' && (
        <img
          alt='background red'
          src='images/BGBad.png'
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
          }}
        />
      )}
      <img
        alt='child'
        src={childImage || 'images/Smell/Child.png'}
        style={{
          position: 'absolute',
          left: 540,
          top: 276,
          transform: 'translate(-50%, 0)',
        }}
      />
      <img
        src='images/Smell/bottomOverlay.png'
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      {smellState === 'good' && (
        <>
          <animated.img
            src='images/Smell/overlayGOOD.png'
            style={{
              position: 'absolute',
              left: 0,
              top: -180,
              zIndex: 1,
              ...overlay,
            }}
          />
          <animated.img
            src='images/Smell/sparkles.png'
            style={{
              position: 'absolute',
              top: 721,
              left: 234,
              zIndex: 2,
              ...effectStyle,
            }}
            alt='sparkles'
          />
        </>
      )}
      {smellState === 'bad' && (
        <>
          <animated.img
            src='images/Smell/overlayBAD.png'
            style={{
              position: 'absolute',
              left: 0,
              top: -180,
              zIndex: 1,
              ...overlay,
            }}
          />
          <animated.img
            src='images/Smell/flies.png'
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 867,
              left: 517,
              zIndex: 1,
              ...effectStyle,
            }}
            alt='flies'
          />
        </>
      )}
      {smellState && (
        <animated.img
          src='images/Smell/brain.png'
          style={{
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: 507,
            left: 536,
            ...brain,
          }}
          alt='brain'
        />
      )}
      <DraggableImage
        image='images/Smell/Flower.png'
        x={0}
        y={850}
        smellType='good'
        onChange={setSmellState}
        onTop={smellState === 'good'}
      />
      <DraggableImage
        image='images/Smell/Shoe.png'
        x={700}
        y={850}
        smellType='bad'
        onChange={setSmellState}
        onTop={smellState === 'bad'}
      />
    </>
  );
}
