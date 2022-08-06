import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useGameContext } from '../../state/game';
import { ClickableImage, VariationsType } from './ClickableImage';

const valueType = 'badSound';
const finalValueType = valueType + '-final';
const activePosition = { left: 540, top: 950 };

const childImages = {
  good: 'images/Sensory/childHappy.png',
  bad: 'images/Sensory/childScared.png',
};

export function Hearing() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [effectStyle, effectAPI] = useSpring(() => ({ opacity: 0 }));
  const [{ value }] = useGameContext();

  if (sensoryState && value !== finalValueType) {
    effectAPI.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 1000,
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
    overlayAPI.set({ opacity: 0 });
  }

  if (!location.search) {
    return <Navigate to={'/bodySystems/sensory'} />;
  }

  const childImage = childImages[sensoryState];

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
      <img
        src={childImage || 'images/Sensory/child.png'}
        style={{
          position: 'absolute',
          left: 540,
          top: 276,
          transform: 'translate(-50%, 0)',
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
      {sensoryState && (
        <>
          <animated.img
            src='images/Sensory/brain.png'
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 507,
              left: 536,
              ...overlay,
            }}
          />
          <animated.img
            src='images/Hearing/SensoryHighlight.png'
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 688,
              left: 536,
              ...overlay,
            }}
          />
        </>
      )}
      {sensoryState === 'good' && (
        <>
          <animated.img
            src='images/Hearing/overlayGOOD.png'
            style={{
              position: 'absolute',
              left: 539,
              top: 630,
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              ...overlay,
            }}
          />
          <animated.img
            src='images/Hearing/musicSparkles.png'
            style={{
              position: 'absolute',
              top: 664,
              left: 274,
              zIndex: 2,
              ...effectStyle,
            }}
          />
          <animated.img
            src='images/Hearing/musicLines.png'
            style={{
              position: 'absolute',
              top: 669,
              left: 195,
              zIndex: 2,
              ...effectStyle,
            }}
          />
        </>
      )}
      {sensoryState === 'bad' && (
        <>
          <animated.img
            src='images/Hearing/overlayBAD.png'
            style={{
              position: 'absolute',
              left: 539,
              top: 630,
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              ...overlay,
            }}
          />
          <animated.img
            src='images/Hearing/soundLines.png'
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 630,
              left: 538,
              zIndex: 1,
              ...effectStyle,
            }}
          />
        </>
      )}
      {value === finalValueType && (
        <animated.img
          src='images/Hearing/sirenAirplugsReaction.png'
          style={{ position: 'absolute', left: 246, top: 681 }}
        />
      )}
      <ClickableImage
        Component='images/Hearing/music.png'
        x={618}
        y={945}
        type='good'
        onChange={setSensoryState}
        onTop={sensoryState === 'good'}
        activeStyle={{
          ...activePosition,
          transform: `translate(-50%, -50%) rotate(0deg)`,
        }}
        sound={'completeStep'}
      />
      <ClickableImage
        Component='images/Hearing/siren.png'
        x={200}
        y={910}
        type='bad'
        onChange={setSensoryState}
        onTop={sensoryState === 'bad'}
        reset={sensoryState === 'bad' && value === finalValueType}
        valueType={valueType}
        activeStyle={{
          ...activePosition,
          transform: `translate(-50%, -50%) rotate(0deg)`,
        }}
        sound={'completeStep'}
      />
    </>
  );
}
