import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { ClickableImage, VariationsType } from './ClickableImage';
import ChildGood from './ProprioceptionAssets/ChildGood.png';
import ChildBad from './ProprioceptionAssets/ChildBad.png';
import Feather from './ProprioceptionAssets/Feather.png';
import Dumbell from './ProprioceptionAssets/Dumbell.png';

const childImages = {
  good: {
    src: ChildGood,
    left: 514,
  },
  bad: {
    src: ChildBad,
    left: 558,
  },
};

export default function Proprioception() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
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
      <img
        src='images/Sensory/childFull.png'
        style={{
          position: 'absolute',
          left: 540,
          top: 270,
          transform: 'translate(-50%, 0px)',
          opacity: sensoryState ? 0 : 1,
        }}
      />
      <img
        src={childImages.good.src}
        style={{
          position: 'absolute',
          left: childImages.good.left,
          top: 270,
          transform: 'translate(-50%, 0px)',
          opacity: sensoryState === 'good' ? 1 : 0,
        }}
      />
      <img
        src={childImages.bad.src}
        style={{
          position: 'absolute',
          left: childImages.bad.left,
          top: 270,
          transform: 'translate(-50%, 0px)',
          opacity: sensoryState === 'bad' ? 1 : 0,
        }}
      />
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
        </>
      )}
      {sensoryState === 'bad' && (
        <>
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
