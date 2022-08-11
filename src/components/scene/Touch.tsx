import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useGameContext } from '../../state/game';
import { ClickableImage, VariationsType } from './ClickableImage';
import { ReactComponent as OvenMitt } from './TouchAssets/OvenMitt.svg';
import ChildGood from './TouchAssets/ChildGood.png';
import ChildBad from './TouchAssets/ChildBad.png';
import pan from './TouchAssets/Pan.png';
import { ReactComponent as PlushToy } from './TouchAssets/PlushToy.svg';
import { ReactComponent as Sparkles } from './TouchAssets/Sparkles.svg';
import { useCharacterContext } from '../../state/character';
import { Characters } from './ChildrenAssets/childrenAssets';

const valueType = 'badTouch';
const finalValueType = valueType + '-final';
const activePosition = { left: 530, top: 690 };

const childImages = {
  good: ChildGood,
  bad: ChildBad,
};

export default function Touch() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
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

  const ResultChildImage = childImages[sensoryState];

  const ChildComponent = Characters.default[selectedCharacter];

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
          left: 960,
          top: -83,
          transform: 'translate(-50%, 0px) scale(2.7)',
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
          <Sparkles
            style={{
              position: 'absolute',
              top: 642,
              left: 274,
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
        </>
      )}
      {value === finalValueType && (
        <OvenMitt
          style={{
            position: 'absolute',
            top: 424,
            left: 416,
          }}
        />
      )}
      <ClickableImage
        Component={PlushToy}
        x={618}
        y={900}
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
        Component={pan}
        x={0}
        y={688}
        type='bad'
        onChange={setSensoryState}
        onTop={sensoryState === 'bad'}
        reset={sensoryState === 'bad' && value === finalValueType}
        valueType={valueType}
        activeStyle={{
          top: 290,
        }}
        sound={'completeStep'}
      />
      {sensoryState && (
        <>
          <animated.img
            src={ResultChildImage}
            style={{
              position: 'absolute',
              left: 91,
              bottom: 37,
              zIndex: 2,
              ...overlay,
            }}
          />
        </>
      )}
    </>
  );
}
