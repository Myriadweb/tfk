import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { useGameContext } from '../../state/game';
import { ClickableImage, VariationsType } from './ClickableImage';
import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';

const valueType = 'badSight';
const finalValueType = valueType + '-final';
const activeStyle = {
  left: 540,
  top: 180,
  transform: 'translate(-50%, -50%) rotate(0deg)',
};

const childImages = {
  good: 'moon',
  bad: 'sun',
};

export default function Sight() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [brain, brainAPI] = useSpring(() => ({ opacity: 0 }));
  const [effectStyle, effectAPI] = useSpring(() => ({ opacity: 0 }));
  const [{ value }] = useGameContext();

  if (sensoryState && value !== finalValueType) {
    brainAPI.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 500,
      },
      delay: 500,
    });
    effectAPI.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 500,
    });
    overlayAPI.start({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: {
        duration: 500,
      },
      delay: 500,
    });
  } else {
    effectAPI.set({ opacity: 0 });
    brainAPI.set({ opacity: 0 });
    overlayAPI.set({ opacity: 0 });
  }

  if (!location.search) {
    return <Navigate to={'/bodySystems/sensory'} />;
  }

  const ChildReaction = sensoryState
    ? Characters[childImages[sensoryState]][selectedCharacter]
    : null;

  const ChildComponent = ChildReaction || Characters.sensory[selectedCharacter];
  const width = sensoryChildWidth;

  return (
    <>
      {sensoryState === 'bad' && (
        <img
          src='images/BGBad.png'
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
          }}
        />
      )}
      <div
        style={{
          position: 'absolute',
          left: 540,
          top: 276,
          transform: `translate(-${width / 2}px, 0)`,
        }}
      >
        <ChildComponent />
      </div>
      <img
        src='images/Sensory/bottomOverlay.png'
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      <img
        src='images/Sensory/bottomOverlay.png'
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      {sensoryState === 'good' && (
        <>
          <animated.img
            src='images/Sight/overlayGOOD.png'
            style={{
              position: 'absolute',
              left: 543,
              top: 630,
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              ...overlay,
            }}
          />
        </>
      )}
      {sensoryState && (
        <animated.img
          src='images/Sensory/brain.png'
          style={{
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: 507,
            left: 536,
            ...brain,
          }}
        />
      )}
      {sensoryState === 'bad' && (
        <>
          <animated.img
            src='images/Sight/Cone.png'
            style={{
              position: 'absolute',
              left: 517,
              top: 241,
              transform: 'translate(-50%, 0)',
              ...effectStyle,
            }}
          />

          <animated.img
            src='images/Sight/overlayBAD.png'
            style={{
              position: 'absolute',
              left: 539,
              top: 630,
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              ...overlay,
            }}
          />
        </>
      )}
      {value === finalValueType && (
        <img
          src='images/Sight/sunglasses.png'
          style={{
            position: 'absolute',
            left: 544,
            top: 693,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      <ClickableImage
        Component='images/Sight/moon.png'
        x={645}
        y={991}
        type='good'
        onChange={setSensoryState}
        onTop={sensoryState === 'good'}
        activeStyle={activeStyle}
        sound={'completeProcedure'}
      />
      <ClickableImage
        Component='images/Sight/sun.png'
        x={185}
        y={943}
        type='bad'
        onChange={setSensoryState}
        onTop={sensoryState === 'bad'}
        reset={sensoryState === 'bad' && value === finalValueType}
        valueType={valueType}
        activeStyle={activeStyle}
        sound={'completeProcedure'}
      />
    </>
  );
}
