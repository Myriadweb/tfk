import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
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
import Brain from './SensoryAssets/brain.png';
import BgBad from './SensoryAssets/BGBad.png';
import Cone from './SensoryAssets/SightAssets/cone.png';
import Moon from './SensoryAssets/SightAssets/moon.png';
import Sun from './SensoryAssets/SightAssets/sun.png';
import Sunglasses from './SensoryAssets/SightAssets/sunglasses.png';
import {screenScale, getCurrentDevice} from "../../utils/scaling";
import OverlayBadIpad from "./SensoryAssets/overlayBADIPad.png";
import OverlayGoodIpad from "./SensoryAssets/overlayGOODIPad.png";

const valueType = 'badSight';
const finalValueType = valueType + '-final';
const activeStyle = {
  left: screenScale.x(540),
  top: 180,
  transform: 'translate(-50%, -50%) rotate(0deg)',
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
    effectAPI.set({ opacity: 0 });
    brainAPI.set({ opacity: 0 });
    overlayAPI.set({ opacity: 0 });
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

  const ChildComponent = Characters.sensory[selectedCharacter];
  const ChildGood = Characters.moon[selectedCharacter];
  const ChildBad = Characters.sun[selectedCharacter];

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
            left: '50%',
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
            left: '50%',
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
            left: '50%',
            top: 270,
            transform: `translate(-50%, 0)`,
            opacity: sensoryState === 'bad' ? 1 : 0,
          }}
        >
          <ChildBad />
        </div>
        {sensoryState && (
          <animated.img
            src={Brain}
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 507,
              left: '50%',
              ...brain,
            }}
          />
        )}
        {sensoryState === 'bad' && (
          <>
            <animated.img
              src={Cone}
              style={{
                position: 'absolute',
                left: 517,
                top: 241,
                transform: 'translate(-50%, 0)',
                ...effectStyle,
              }}
            />
          </>
        )}
        {value === finalValueType && (
          <img
            src={Sunglasses}
            style={{
              position: 'absolute',
              left: '50%',
              top: 693,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
        <ClickableImage
          Component={Moon}
          x={645}
          y={991}
          type='good'
          onChange={setSensoryState}
          onTop={sensoryState === 'good'}
          activeStyle={activeStyle}
          sound={'sightMoon'}
        />
        <ClickableImage
          Component={Sun}
          x={185}
          y={943}
          type='bad'
          onChange={setSensoryState}
          onTop={sensoryState === 'bad'}
          reset={sensoryState === 'bad' && value === finalValueType}
          valueType={valueType}
          activeStyle={activeStyle}
          sound={'sightHot'}
          timeoutDuration={7000}
        />
      </div>
    </>
  );
}
