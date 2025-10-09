import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated, easings } from 'react-spring';
import { useGameContext } from '../../state/game';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';
import { ReactComponent as OvenMitt } from './SensoryAssets/TouchAssets/ovenMitt.svg';
import Child1Good from './SensoryAssets/TouchAssets/1TouchGood.png';
import Child1Bad from './SensoryAssets/TouchAssets/1TouchBad.png';
import Child2Good from './SensoryAssets/TouchAssets/2TouchGood.png';
import Child2Bad from './SensoryAssets/TouchAssets/2TouchBad.png';
import Child3Good from './SensoryAssets/TouchAssets/3TouchGood.png';
import Child3Bad from './SensoryAssets/TouchAssets/3TouchBad.png';
import Child4Good from './SensoryAssets/TouchAssets/4TouchGood.png';
import Child4Bad from './SensoryAssets/TouchAssets/4TouchBad.png';
import Child5Good from './SensoryAssets/TouchAssets/5TouchGood.png';
import Child5Bad from './SensoryAssets/TouchAssets/5TouchBad.png';
import Child6Good from './SensoryAssets/TouchAssets/6TouchGood.png';
import Child6Bad from './SensoryAssets/TouchAssets/6TouchBad.png';
import pan from './SensoryAssets/TouchAssets/pan.png';
import { ReactComponent as PlushToy } from './SensoryAssets/TouchAssets/plushToy.svg';
import Sparkles from './SensoryAssets/TouchAssets/sparkles.svg';
import { useCharacterContext } from '../../state/character';
import { Characters } from './ChildrenAssets/childrenAssets';
import OverlayGood from './SensoryAssets/TouchAssets/overlayGood.png';
import OverlayBad from './SensoryAssets/TouchAssets/overlayBad.png';
import BottomOverlay from './SensoryAssets/bottomOverlay.png';
import BgBad from './SensoryAssets/BGBad.png';
import {getCurrentDevice, screenScale} from "../../utils/scaling";
import OverlayBadIpad from "./SensoryAssets/overlayBADIPad.png";
import OverlayGoodIpad from "./SensoryAssets/overlayGOODIPad.png";
import { useLocationPath } from "../../hooks";

const valueType = 'badTouch';
const finalValueType = valueType + '-final';
const activePosition = { left: 530, top: 690 };

const childImages = {
  good1: Child1Good,
  bad1: Child1Bad,
  good2: Child2Good,
  bad2: Child2Bad,
  good3: Child3Good,
  bad3: Child3Bad,
  good4: Child4Good,
  bad4: Child4Bad,
  good5: Child5Good,
  bad5: Child5Bad,
  good6: Child6Good,
  bad6: Child6Bad,
};

export default function Touch() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [sparklesStyle, sparklesApi] = useSpring(() => ({
    transform: 'scale(0)',
    opacity: 1,
  }));
  const [{ value }] = useGameContext();
  const buildPath = useLocationPath();

  if (sensoryState && value !== finalValueType) {
    overlayAPI.set({ opacity: 0 });
    sparklesApi.set({ transform: 'scale(0)', opacity: 1 });
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
    sparklesApi.set({ transform: 'scale(0)', opacity: 1 });
    overlayAPI.set({ opacity: 0 });
  }

  if (!location.search) {
    return <Navigate to={buildPath('/bodySystems/sensory', true)} />;
  }

  const ResultChildImage = childImages[sensoryState + (selectedCharacter + 1)];

  const ChildComponent = Characters.default[selectedCharacter];

  const leftPostion = (originalPosition: number) => {
    return originalPosition - ((getCurrentDevice().config.targetWidth - screenScale.y(getCurrentDevice().config.targetWidth)) / 2);
  }
  const bottomPosition = (originalPosition: number) => {
    return originalPosition - ((getCurrentDevice().config.targetHeight - screenScale.y(getCurrentDevice().config.targetHeight)) / 2);
  }

  return (
    <>
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
      <img
        src={BottomOverlay}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
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
            left: 960,
            top: -83,
            transform: 'translate(-50%, 0px) scale(2.7)',
          }}
        >
          <ChildComponent />
        </div>
        {sensoryState === 'good' && (
          <>
            <animated.img
              src={Sparkles}
              style={{
                position: 'absolute',
                top: 642,
                left: 274,
                zIndex: 2,
                ...sparklesStyle,
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
          sound={'touchGood'}
        />
        <ClickableImage
          Component={pan}
          x={leftPostion(0)}
          y={688}
          type='bad'
          onChange={setSensoryState}
          onTop={sensoryState === 'bad'}
          reset={sensoryState === 'bad' && value === finalValueType}
          valueType={valueType}
          activeStyle={{
            top: 290,
            left: 0
          }}
          sound={'touchOuch'}
          timeoutDuration={7000}
        />
        {sensoryState && (
          <>
            <animated.img
              src={ResultChildImage}
              style={{
                position: 'absolute',
                left: 91,
                bottom: bottomPosition(37),
                zIndex: 2,
                ...overlay,
              }}
            />
          </>
        )}
      </div>
    </>
  );
}
