import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import { useGameContext } from '../../state/game';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';
import { useCharacterContext } from '../../state/character';
import BottomOverlay from './SensoryAssets/bottomOverlay.png';
import OverlayGood from './SensoryAssets/overlayGOOD.png';
import OverlayBad from './SensoryAssets/overlayBAD.png';
import Brain from './SensoryAssets/brain.png';
import BgBad from './SensoryAssets/BGBad.png';
import Flies from './SensoryAssets/SmellAssets/flies.png';
import Flower from './SensoryAssets/SmellAssets/Flower.svg';
import NoseHighlight from './SensoryAssets/SmellAssets/noseHighlight.png';
import Shoe from './SensoryAssets/SmellAssets/Shoe.svg';
import Sparkles from './SensoryAssets/SmellAssets/sparkles.png';
import { ReactComponent as Closepin } from './SensoryAssets/SmellAssets/Closepin.svg';

const valueType = 'badSmell';
const finalValueType = valueType + '-final';
const activePosition = { left: 540, top: 950 };

const childImages = {
  good: 'happySensory',
  bad: 'scaredSensory',
};

export function Smell() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [effectStyle, effectAPI] = useSpring(() => ({ opacity: 0 }));
  const [{ value }] = useGameContext();

  if (sensoryState && value !== 'badSmell-final') {
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

  const ChildReaction = sensoryState
    ? Characters[childImages[sensoryState]][selectedCharacter]
    : null;

  const ChildComponent = ChildReaction || Characters.sensory[selectedCharacter];
  const width = sensoryChildWidth;
  return (
    <>
      {sensoryState === 'bad' && (
        <img
          src={BgBad}
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
          top: 270,
          transform: `translate(-${width / 2}px, 0)`,
        }}
      >
        <ChildComponent />
      </div>
      <img
        src={BottomOverlay}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      {sensoryState === 'good' && (
        <>
          <animated.img
            src={OverlayGood}
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
            src={Sparkles}
            style={{
              position: 'absolute',
              top: 721,
              left: 234,
              zIndex: 2,
              ...effectStyle,
            }}
          />
        </>
      )}
      {sensoryState === 'bad' && (
        <>
          <animated.img
            src={OverlayBad}
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
            src={Flies}
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 867,
              left: 517,
              zIndex: 1,
              ...effectStyle,
            }}
          />
        </>
      )}
      {sensoryState && (
        <>
          <animated.img
            src={Brain}
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 507,
              left: 536,
              ...overlay,
            }}
          />
          <animated.img
            src={NoseHighlight}
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 758,
              left: 536,
              ...overlay,
            }}
          />
        </>
      )}
      {value === finalValueType && (
        <Closepin style={{ position: 'absolute', left: 499, top: 739 }} />
      )}
      <ClickableImage
        Component={Flower}
        x={228}
        y={945}
        type='good'
        onChange={setSensoryState}
        onTop={sensoryState === 'good'}
        activeStyle={{
          ...activePosition,
          transform: `translate(-50%, -50%) rotate(13deg)`,
        }}
        sound={'smellsGood'}
      />
      <ClickableImage
        Component={Shoe}
        x={624}
        y={950}
        type='bad'
        onChange={setSensoryState}
        onTop={sensoryState === 'bad'}
        reset={sensoryState === 'bad' && value === finalValueType}
        valueType={valueType}
        activeStyle={{
          ...activePosition,
          transform: `translate(-50%, -50%) rotate(0deg)`,
        }}
        sound={'smellsBad'}
      />
    </>
  );
}
