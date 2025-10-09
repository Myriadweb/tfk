import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated, easings } from 'react-spring';

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
import {screenScale, getCurrentDevice} from "../../utils/scaling";
import OverlayBadIpad from "./SensoryAssets/overlayBADIPad.png";
import OverlayGoodIpad from "./SensoryAssets/overlayGOODIPad.png";
import { useLocationPath } from "../../hooks";

const valueType = 'badSmell';
const finalValueType = valueType + '-final';
const activePosition = { left: screenScale.x(540), top: 950 };

export function Smell() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [effectStyle, effectAPI] = useSpring(() => ({ opacity: 0 }));
  const [{ value }] = useGameContext();
  const [sparklesStyle, sparklesApi] = useSpring(() => ({
    transform: 'scale(0)',
    opacity: 1,
  }));
  const buildPath = useLocationPath();

  if (sensoryState && value !== 'badSmell-final') {
    effectAPI.set({ opacity: 0 });
    overlayAPI.set({ opacity: 0 });
    sparklesApi.set({
      transform: 'scale(0)',
      opacity: 1,
    });
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
  const width = sensoryChildWidth;
  const bodyLeft = screenScale.x(540);
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
            transform: `translate(-${width / 2}px, 0)`,
          }}
        >
          <ChildComponent />
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 270,
            transform: `translate(-${width / 2}px, 0)`,
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
            transform: `translate(-${width / 2}px, 0)`,
            opacity: sensoryState === 'bad' ? 1 : 0,
          }}
        >
          <ChildBad />
        </div>
        {sensoryState === 'good' && (
          <>
            <animated.img
              src={Sparkles}
              style={{
                position: 'absolute',
                top: 721,
                left: 234,
                zIndex: 2,
                ...sparklesStyle,
              }}
            />
          </>
        )}
        {sensoryState === 'bad' && (
          <>
            <animated.img
              src={Flies}
              style={{
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                top: 867,
                left: '50%',
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
                left: '50%',
                ...overlay,
              }}
            />
            <animated.img
              src={NoseHighlight}
              style={{
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                top: 758,
                left: '50%',
                ...overlay,
              }}
            />
          </>
        )}
        {value === finalValueType && (
          <Closepin style={{ position: 'absolute', left: '50%', top: 739, transform: 'translate(-50%)' }} />
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
          sound={'smellGood'}
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
          sound={'smellBad'}
          timeoutDuration={7000}
        />
      </div>
    </>
  );
}
