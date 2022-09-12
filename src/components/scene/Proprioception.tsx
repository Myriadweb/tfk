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
import { Characters } from './ChildrenAssets/childrenAssets';
import { useCharacterContext } from '../../state/character';

export default function Proprioception() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));

  if (sensoryState) {
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

  const Character = Characters.default[selectedCharacter];
  const CharacterGood = Characters['liftFeather'][selectedCharacter];
  const CharacterBad = Characters['liftWeight'][selectedCharacter];

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
          left: 540,
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
          left: 320,
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
          left: 330,
          top: 270,
          transform: 'translate(-50%, 0px)',
          opacity: sensoryState === 'bad' ? 1 : 0,
        }}
      >
        <CharacterBad />
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
        </>
      )}
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
        sound={'completeStep'}
      />
      <ClickableImage
        Component={Dumbell}
        x={563}
        y={1085}
        type='bad'
        onChange={setSensoryState}
        onTop={sensoryState === 'bad'}
        activeStyle={{ opacity: 0 }}
        sound={'completeStep'}
      />
    </>
  );
}
