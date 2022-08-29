import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';

import SpinIcon from './VestibularAssets/spinIcon.png';
import JumpIcon from './VestibularAssets/jumpIcon.png';
import OverlayBad from './VestibularAssets/overlayBad.png';
import OverlayGood from './VestibularAssets/overlayGood.png';

export default function Vestibular() {
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
              left: 540,
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
              left: 540,
              top: 630,
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              ...overlay,
            }}
          />
        </>
      )}
      <ClickableImage
        Component={SpinIcon}
        x={336}
        y={1046}
        type='bad'
        onChange={setSensoryState}
        onTop={sensoryState === 'bad'}
        activeStyle={{
          opacity: 0,
        }}
        sound={'completeStep'}
      />
      <ClickableImage
        Component={JumpIcon}
        x={546}
        y={1046}
        type='good'
        onChange={setSensoryState}
        onTop={sensoryState === 'good'}
        activeStyle={{ opacity: 0 }}
        sound={'completeStep'}
      />
    </>
  );
}
