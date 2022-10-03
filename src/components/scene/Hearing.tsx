import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useGameContext } from '../../state/game';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';
import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';
import BottomOverlay from './SensoryAssets/bottomOverlay.png';
import OverlayGood from './SensoryAssets/overlayGOOD.png';
import OverlayBad from './SensoryAssets/overlayBAD.png';
import BgBad from './SensoryAssets/BGBad.png';
import Brain from './SensoryAssets/brain.png';
import SensoryHighlight from './SensoryAssets/SensoryHighlight.png';
import Music from './SensoryAssets/HearingAssets/music.png';
import MusicLines from './SensoryAssets/HearingAssets/musicLines.png';
import MusicSparkles from './SensoryAssets/HearingAssets/musicSparkles.png';
import Siren from './SensoryAssets/HearingAssets/siren.png';
import SirenAirplugsReaction from './SensoryAssets/HearingAssets/sirenAirplugsReaction.png';
import SoundLines from './SensoryAssets/HearingAssets/soundLines.png';

const valueType = 'badSound';
const finalValueType = valueType + '-final';
const activePosition = { left: 540, top: 950 };

const childImages = {
  good: 'happySensory',
  bad: 'scaredSensory',
};

export default function Hearing() {
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
          top: 271,
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
            src={SensoryHighlight}
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 704,
              left: 541,
              ...overlay,
            }}
          />
        </>
      )}
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
            src={MusicSparkles}
            style={{
              position: 'absolute',
              top: 664,
              left: 274,
              zIndex: 2,
              ...effectStyle,
            }}
          />
          <animated.img
            src={MusicLines}
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
            src={SoundLines}
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
          src={SirenAirplugsReaction}
          style={{ position: 'absolute', left: 246, top: 681 }}
        />
      )}
      <ClickableImage
        Component={Music}
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
        Component={Siren}
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
