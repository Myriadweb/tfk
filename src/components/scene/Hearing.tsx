import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated, easings } from 'react-spring';
import { useGameContext } from '../../state/game';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';
import { useCharacterContext } from '../../state/character';
import { Characters } from './ChildrenAssets/childrenAssets';
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
import {screenScale, getCurrentDevice} from "../../utils/scaling";
import OverlayBadIpad from "./SensoryAssets/overlayBADIPad.png";
import OverlayGoodIpad from "./SensoryAssets/overlayGOODIPad.png";
import { useLocationPath } from "../../hooks";

const valueType = 'badSound';
const finalValueType = valueType + '-final';
const activePosition = { left: screenScale.x(540), top: 950 };

export default function Hearing() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [effectStyle, effectAPI] = useSpring(() => ({ opacity: 0 }));
  const [sparklesStyle, sparklesApi] = useSpring(() => ({
    transform: 'scale(0)',
    opacity: 1,
  }));
  const [{ value }] = useGameContext();
  const buildPath = useLocationPath();

  if (sensoryState && value !== finalValueType) {
    effectAPI.set({ opacity: 0 });
    overlayAPI.set({ opacity: 0 });
    sparklesApi.set({ transform: 'scale(0)', opacity: 1 });
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
    sparklesApi.start({
      transform: 'scale(2)',
      opacity: 0,
      delay: 1000,
      config: {
        duration: 500,
        easing: easings.linear,
      },
    });
  } else {
    effectAPI.set({ opacity: 0 });
    overlayAPI.set({ opacity: 0 });
  }

  if (!location.search) {
    return <Navigate to={buildPath('/bodySystems/sensory', true)} />;
  }

  const ChildComponent = Characters.sensory[selectedCharacter];
  const ChildGood = Characters.happySensory[selectedCharacter];
  const ChildBad = Characters.scaredSensory[selectedCharacter];
  const bodyLeft = '50%';

  return (
    <>
      <img
        src={BottomOverlay}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      <img
        src={BgBad}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 0,
          opacity: sensoryState === 'bad' ? 1 : 0,
        }}
      />
      {sensoryState === 'bad' && (
        <animated.img
          src={getCurrentDevice().device === 'ipad-pro-13' ? OverlayBadIpad : OverlayBad}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            height: screenScale.y(1920),
            ...overlay,
          }}
        />
      )}
      {sensoryState === 'good' && (
        <animated.img
          src={getCurrentDevice().device === 'ipad-pro-13' ? OverlayGoodIpad : OverlayGood}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            height: screenScale.y(1920),
            ...overlay,
          }}
        />
      )}
      <div className='element-container'>
        <div
          style={{
            position: 'absolute',
            left: bodyLeft,
            top: 270,
            transform: `translate(-50%, 0)`,
            opacity: sensoryState ? 0 : 1,
          }}
        >
          <ChildComponent />
        </div>
        <div
          style={{
            position: 'absolute',
            left: bodyLeft,
            top: 270,
            transform: `translate(-50%, 0)`,
            opacity: sensoryState === 'good' ? 1 : 0,
          }}
        >
          <ChildGood />
        </div>
        <div
          style={{
            position: 'absolute',
            left: bodyLeft,
            top: 270,
            transform: `translate(-50%, 0)`,
            opacity: sensoryState === 'bad' ? 1 : 0,
          }}
        >
          <ChildBad />
        </div>
        {sensoryState && (
          <>
            <animated.img
              src={Brain}
              style={{
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                top: 507,
                left: '50%',
                ...overlay,
              }}
            />
            <animated.img
              src={SensoryHighlight}
              style={{
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                top: 704,
                left: '50%',
                ...overlay,
              }}
            />
          </>
        )}
        {sensoryState === 'good' && (
          <>
            <animated.img
              src={MusicSparkles}
              style={{
                position: 'absolute',
                top: 664,
                left: 274,
                zIndex: 2,
                ...sparklesStyle,
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
              src={SoundLines}
              style={{
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                top: 630,
                left: '50%',
                zIndex: 1,
                ...effectStyle,
              }}
            />
          </>
        )}
        {value === finalValueType && (
          <animated.img
            src={SirenAirplugsReaction}
            style={{ position: 'absolute', left: '50%', top: 681, transform: 'translate(-50%)' }}
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
          sound={'hearingMusic'}
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
          sound={'hearingSiren'}
          timeoutDuration={7000}
        />
      </div>
    </>
  );
}
