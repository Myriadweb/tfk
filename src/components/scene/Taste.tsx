import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated, easings } from 'react-spring';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';
import Sparkles from './SensoryAssets/TasteAssets/Sparkles.svg';
import IceCream from './SensoryAssets/TasteAssets/IceCream.png';
import Bottle from './SensoryAssets/TasteAssets/Bottle.png';
import SenseHighlight from './SensoryAssets/TasteAssets/SenseHighlight.png';
import Drop from './SensoryAssets/TasteAssets/Drop.png';
import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';
import BottomOverlay from './SensoryAssets/bottomOverlay.png';
import OverlayGood from './SensoryAssets/overlayGOOD.png';
import OverlayBad from './SensoryAssets/overlayBAD.png';
import Brain from './SensoryAssets/brain.png';
import BgBad from './SensoryAssets/BGBad.png';
import {screenScale, getCurrentDevice} from "../../utils/scaling";
import OverlayBadIpad from "./SensoryAssets/overlayBADIPad.png";
import OverlayGoodIpad from "./SensoryAssets/overlayGOODIPad.png";
import { useLocationPath } from "../../hooks";

export default function Taste() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [dropStyle, dropAPI] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-50%) translateY(-200px)',
  }));
  const [sparklesStyle, sparklesApi] = useSpring(() => ({
    transform: 'scale(0)',
    opacity: 1,
  }));
  const buildPath = useLocationPath();

  if (sensoryState) {
    overlayAPI.set({ opacity: 0 });
    dropAPI.set({ opacity: 0, transform: 'translateX(-50%) translateY(-200px)' });
    sparklesApi.set({
      transform: 'scale(0)',
      opacity: 1,
    });
    overlayAPI.start({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: {
        duration: 500,
      },
      delay: 500,
    });
    dropAPI.start({
      to: [{ opacity: 1, transform: 'translateX(-50%) translateY(-0px)' }],
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
    overlayAPI.set({ opacity: 0 });
    dropAPI.set({ opacity: 0, transform: 'translateX(-50%) translateY(-200px)' });
    sparklesApi.set({
      transform: 'scale(0)',
      opacity: 1,
    });
  }

  if (!location.search) {
    return <Navigate to={buildPath('/bodySystems/sensory', true)} />;
  }

  const ChildComponent = Characters.sensory[selectedCharacter];
  const ChildGood = Characters.iceCream[selectedCharacter];
  const ChildBad = Characters.hotSauce[selectedCharacter];
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
        )}
        {sensoryState === 'good' && (
          <>
            <animated.img
              src={Sparkles}
              style={{
                position: 'absolute',
                top: 642,
                left: 274,
                zIndex: 3,
                ...sparklesStyle,
              }}
            />
          </>
        )}
        {sensoryState === 'bad' && (
          <>
            <animated.img
              src={Drop}
              style={{
                position: 'absolute',
                left: '50%',
                top: 811,
                zIndex: 1,
                ...dropStyle,
              }}
            />
            <animated.img
              src={SenseHighlight}
              style={{
                position: 'absolute',
                left: '50%',
                top: 758,
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                ...overlay,
              }}
            />
          </>
        )}
        <ClickableImage
          Component={IceCream}
          x={638}
          y={871}
          type='good'
          onChange={setSensoryState}
          onTop={sensoryState === 'good'}
          activeStyle={{
            top: 955,
            left: 547,
            transform: `translate(-50%, -50%) rotate(0deg)`,
          }}
          sound={'tasteGood'}
        />
        <ClickableImage
          Component={Bottle}
          x={215}
          y={865}
          type='bad'
          onChange={setSensoryState}
          onTop={sensoryState === 'bad'}
          activeStyle={{
            transform: 'translate(0%, 0%) rotate(108deg)',
            left: 317,
            top: 340,
          }}
          sound={'tasteHot'}
        />
      </div>
    </>
  );
}
