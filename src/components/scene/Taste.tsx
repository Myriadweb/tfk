import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';
import { ReactComponent as Sparkles } from './TasteAssets/Sparkles.svg';
import IceCream from './TasteAssets/IceCream.png';
import Bottle from './TasteAssets/Bottle.png';
import SenseHighlight from './TasteAssets/SenseHighlight.png';
import Drop from './TasteAssets/Drop.png';
import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';

const childImages = {
  good: 'iceCream',
  bad: 'hotSauce',
};

export default function Taste() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [dropStyle, dropAPI] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(-200px)',
  }));

  if (sensoryState) {
    overlayAPI.start({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: {
        duration: 500,
      },
      delay: 500,
    });
    dropAPI.start({
      to: [{ opacity: 1, transform: 'translateY(-0px)' }],
      delay: 500,
    });
  } else {
    overlayAPI.set({ opacity: 0 });
    dropAPI.set({ opacity: 0, transform: 'translateY(-200px)' });
  }

  if (!location.search) {
    return <Navigate to={'/bodySystems/sensory'} />;
  }

  const ChildReaction = sensoryState
    ? Characters[childImages[sensoryState]][selectedCharacter]
    : null;

  const ChildComponent =
    ChildReaction || Characters.mouthOpen[selectedCharacter];
  const width = sensoryChildWidth;

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
          transform: `translate(-${width / 2}px, 0)`,
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
      {sensoryState && (
        <animated.img
          src='images/Sensory/brain.png'
          style={{
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: 507,
            left: 536,
            ...overlay,
          }}
        />
      )}
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
          <animated.div
            style={{
              position: 'absolute',
              top: 642,
              left: 274,
              zIndex: 3,
              ...overlay,
            }}
          >
            <Sparkles />
          </animated.div>
        </>
      )}
      {sensoryState === 'bad' && (
        <>
          <animated.img
            src={Drop}
            style={{
              position: 'absolute',
              left: 529,
              top: 811,
              zIndex: 1,
              ...dropStyle,
            }}
          />
          <animated.img
            src={SenseHighlight}
            style={{
              position: 'absolute',
              left: 539,
              top: 758,
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              ...overlay,
            }}
          />
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
        sound={'completeStep'}
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
        sound={'completeStep'}
      />
    </>
  );
}
