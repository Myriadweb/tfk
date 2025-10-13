import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';
import Feather from './ProprioceptionAssets/Feather.png';
import Dumbell from './ProprioceptionAssets/Dumbell.png';
import OverlayBad from './ProprioceptionAssets/overlayBad.png';
import OverlayGood from './ProprioceptionAssets/overlayGood.png';
import { Characters, Child3Standing } from './ChildrenAssets/childrenAssets';
import { useCharacterContext } from '../../state/character';
import BottomOverlay from './SensoryAssets/bottomOverlay.png';
import BgBad from './SensoryAssets/BGBad.png';
import {screenScale, getCurrentDevice} from "../../utils/scaling";
import OverlayBadIpad from "./ProprioceptionAssets/overlayBadIpad.png";
import OverlayGoodIpad from "./ProprioceptionAssets/overlayGoodIpad.png";

export default function Proprioception() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));

  if (sensoryState) {
    overlayAPI.set({ opacity: 0 });
    overlayAPI.start({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: {
        duration: 500,
      },
      delay: 500,
    });
  } else {
    overlayAPI.set({ opacity: 0 });
  }

  if (!location.search) {
    return <Navigate to={'/bodySystems/sensory'} />;
  }

  const Character =
    selectedCharacter !== 2
      ? Characters.default[selectedCharacter]
      : Child3Standing;
  const CharacterGood = Characters['liftFeather'][selectedCharacter];
  const CharacterBad = Characters['liftWeight'][selectedCharacter];

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
            transform: 'translate(-50%, 0px)',
            opacity: sensoryState ? 0 : 1,
          }}
        >
          <Character />
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 270,
            transform: 'translate(-50%, 0px)',
            opacity: sensoryState === 'good' ? 1 : 0,
          }}
        >
          <CharacterGood />
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 270,
            transform: 'translate(-50%, 0px)',
            opacity: sensoryState === 'bad' ? 1 : 0,
          }}
        >
          <CharacterBad />
        </div>
        <ClickableImage
          Component={Feather}
          x={187}
          y={1058}
          type='good'
          onChange={setSensoryState}
          onTop={sensoryState === 'good'}
          activeStyle={{
            opacity: 0,
          }}
          sound={'proprioceptionFeather'}
        />
        <ClickableImage
          Component={Dumbell}
          x={563}
          y={1085}
          type='bad'
          onChange={setSensoryState}
          onTop={sensoryState === 'bad'}
          activeStyle={{ opacity: 0 }}
          sound={'proprioceptionHeavy'}
        />
      </div>
    </>
  );
}
