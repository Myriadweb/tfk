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
import Stars from './VestibularAssets/stars.svg';
import JumpLines from './VestibularAssets/jumpLines.svg';
import Animation from '../../animations/vestibular.webm';

import { useCharacterContext } from '../../state/character';
import { Characters } from './ChildrenAssets/childrenAssets';
import { useGameContext } from '../../state/game';
import ReactPlayer from 'react-player';

const valueType = 'badVestibular';
const finalValueType = valueType + '-final';

export default function Vestibular() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [tornadoAnimation, setTornadoAnimation] = React.useState(false);
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [overlayStyle, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [starsStyle, starsAPI] = useSpring(() => ({
    transform: 'translate(0px, 0px) rotate(0deg)',
  }));
  const [jumpStyle, jumpApi] = useSpring(() => ({
    transform: 'translate(-50%, 0px)',
  }));
  const [jumpLinesStyle, jumpLinesAPI] = useSpring(() => ({ opacity: 0 }));

  const [{ value }] = useGameContext();

  const Character = Characters.default[selectedCharacter];
  const CharacterGood = Characters.happy[selectedCharacter];
  const CharacterBad = Characters.hitFloor[selectedCharacter];
  const CharacterProtected = Characters.protection[selectedCharacter];

  if ((sensoryState || tornadoAnimation) && value !== finalValueType) {
    overlayAPI.start({
      to: [{ opacity: 1 }],
      config: {
        duration: 500,
      },
      delay: 500,
    });
  } else {
    overlayAPI.set({ opacity: 0 });
  }

  if (sensoryState === 'bad') {
    starsAPI.start({
      from: { transform: 'translate(10px, 5px) rotate(1deg)' },
      to: { transform: 'translate(-10px, -5px) rotate(-1deg)' },
      loop: () => ({
        reverse: true,
      }),
      config: {
        duration: 300,
      },
    });
  }

  if (sensoryState === 'good') {
    jumpApi.start({
      to: [
        { transform: 'translate(-50%, -200px)' },
        { transform: 'translate(-50%, -198px)' },
        { transform: 'translate(-50%, 0px)' },
      ],
    });
    jumpLinesAPI.start({
      to: [{ opacity: 1 }, { opacity: 1 }, { opacity: 0 }],
      config: {
        duration: 1000,
      },
    });
  }

  const handleTornadoAnimation = () => {
    if (sensoryState === 'bad') {
      setSensoryState(null);
      return;
    }

    setTornadoAnimation(true);

    setTimeout(() => {
      setSensoryState('bad');
    }, 2000);
  };

  if (!location.search) {
    return <Navigate to={'/bodySystems/sensory'} />;
  }

  return (
    <>
      {(sensoryState === 'bad' || tornadoAnimation) && (
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
          transform: 'translateX(-50%)',
          opacity: sensoryState || value === finalValueType ? 0 : 1,
        }}
      >
        <Character />
      </div>
      <img
        src='images/Sensory/bottomOverlay.png'
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          width: 393,
          height: 972,
          left: 518,
          top: 275,
          opacity: sensoryState === 'good' ? 1 : 0,
          ...jumpStyle,
        }}
      >
        <CharacterGood />
      </animated.div>
      {sensoryState === 'good' && (
        <>
          <animated.img
            src={OverlayGood}
            style={{
              position: 'absolute',
              left: 540,
              top: 630,
              transform: 'translate(-50%, -50%)',
              ...overlayStyle,
            }}
          />
          <animated.img
            src={JumpLines}
            style={{
              position: 'absolute',
              top: 886,
              transform: 'translateX(-50%)',
              left: 540,
              ...jumpLinesStyle,
            }}
          />
        </>
      )}
      {(sensoryState === 'bad' || tornadoAnimation) && (
        <>
          <animated.img
            src={OverlayBad}
            style={{
              position: 'absolute',
              left: 540,
              top: 630,
              transform: 'translate(-50%, -50%)',
              ...overlayStyle,
            }}
          />
        </>
      )}
      <div
        style={{
          position: 'absolute',
          left: 540,
          top: 598,
          transform: 'translateX(-50%)',
          opacity: sensoryState === 'bad' ? 1 : 0,
        }}
      >
        <CharacterBad />
      </div>
      {sensoryState === 'bad' && (
        <animated.img
          src={Stars}
          style={{
            position: 'absolute',
            top: 630,
            left: 550,
            ...starsStyle,
          }}
        />
      )}
      {tornadoAnimation && (
        <animated.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <ReactPlayer
            playing
            url={Animation}
            width='100%'
            height='100%'
            onEnded={() => {
              setTornadoAnimation(false);
            }}
          />
        </animated.div>
      )}
      {value === finalValueType && (
        <animated.img
          src={CharacterProtected}
          style={{
            position: 'absolute',
            left: 540,
            top: 270,
            transform: 'translate(-50%, 0px)',
            opacity: sensoryState ? 0 : 1,
            width: 393,
            height: 972,
            ...jumpStyle,
          }}
        />
      )}
      <ClickableImage
        Component={SpinIcon}
        x={336}
        y={1046}
        type='bad'
        onChange={handleTornadoAnimation}
        onTop={sensoryState === 'bad'}
        style={{
          opacity: sensoryState ? 0 : 1,
        }}
        reset={sensoryState === 'bad' && value === finalValueType}
        sound={'completeStep'}
        valueType={valueType}
      />
      <ClickableImage
        Component={JumpIcon}
        x={546}
        y={1046}
        type='good'
        onChange={setSensoryState}
        onTop={sensoryState === 'good'}
        style={{
          opacity: sensoryState ? 0 : 1,
        }}
        sound={'completeStep'}
      />
    </>
  );
}
