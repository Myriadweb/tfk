import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import {
  ClickableImage,
  VariationsType,
} from './SharedComponents/ClickableImage';

import SpinIcon from './SensoryAssets/VestibularAssets/spinIcon.png';
import JumpIcon from './SensoryAssets/VestibularAssets/jumpIcon.png';
import OverlayBad from './SensoryAssets/VestibularAssets/overlayBad.png';
import OverlayGood from './SensoryAssets/VestibularAssets/overlayGood.png';
import Stars from './SensoryAssets/VestibularAssets/stars.svg';
import JumpLines from './SensoryAssets/VestibularAssets/jumpLines.svg';
import BottomOverlay from './SensoryAssets/bottomOverlay.png';
import BgBad from './SensoryAssets/BGBad.png';

import { useCharacterContext } from '../../state/character';
import { Characters } from './ChildrenAssets/childrenAssets';
import { useGameContext } from '../../state/game';
import {screenScale} from "../../utils/scaling";
import { useLocationPath } from "../../hooks";
import tornadoFrames from './VestibularAssets/vestibularSequences/vestibularSequences';

const valueType = 'badVestibular';
const finalValueType = valueType + '-final';

export default function Vestibular() {
  const [sensoryState, setSensoryState] = React.useState<VariationsType | null>(
    null
  );
  const [tornadoFrame, setTornadoFrame] = React.useState(0);
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
  const buildPath = useLocationPath();

  // Preload tornadoFrames images
  React.useEffect(() => {
    tornadoFrames.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  React.useEffect(() => {
    if (!tornadoAnimation) {
      setTornadoFrame(0);
      return;
    }
    let frame = 0;
    const totalFrames = tornadoFrames.length;
    const interval = setInterval(() => {
      frame++;
      if (frame >= totalFrames) {
        setTornadoAnimation(false);
        clearInterval(interval);
      } else {
        setTornadoFrame(frame);
      }
    }, 1000 / 24); // 24 FPS
    return () => clearInterval(interval);
  }, [tornadoAnimation]);

  if ((sensoryState || tornadoAnimation) && value !== finalValueType) {
    if (value === 'good') overlayAPI.set({ opacity: 0 });
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
    jumpApi.set({ transform: 'translate(-50%, 0px)' });
    jumpLinesAPI.set({ opacity: 0 });
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

    setTimeout(() => {
      setTornadoAnimation(false);
    }, 3000);
  };

  if (!location.search) {
    return <Navigate to={buildPath('/bodySystems/sensory', true)} />;
  }

  return (
    <>
      {(sensoryState === 'bad' || tornadoAnimation) && (
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
      {(sensoryState === 'bad' || tornadoAnimation) && (
        <>
          <animated.img
            src={OverlayBad}
            style={{
              position: 'absolute',
              left: 524,
              top: 630,
              transform: 'translate(-50%, -50%) scale(1.03)',
              ...overlayStyle,
            }}
          />
        </>
      )}
      <img
        src={BottomOverlay}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      {tornadoAnimation && (
        <img
          src={tornadoFrames[tornadoFrame]}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            pointerEvents: 'none',
          }}
          alt="Tornado Animation"
        />
      )}
      {sensoryState === 'good' && (
        <animated.img
          src={OverlayGood}
          style={{
            position: 'absolute',
            left: '50%',
            top: 630,
            transform: 'translate(-50%, -50%) scale(1.03)',
            ...overlayStyle,
          }}
        />
      )}
      <div className="element-container">
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 270,
            transform: 'translateX(-50%)',
            opacity: sensoryState || value === finalValueType ? 0 : 1,
          }}
        >
          <Character />
        </div>
        <animated.div
          style={{
            position: 'absolute',
            width: 393,
            height: 972,
            left: screenScale.x(518),
            top: 275,
            opacity: sensoryState === 'good' ? 1 : 0,
            ...jumpStyle,
          }}
        >
          <CharacterGood width={439} height={971} />
        </animated.div>
        {sensoryState === 'good' && (
          <>
            <animated.img
              src={JumpLines}
              style={{
                position: 'absolute',
                top: 886,
                transform: 'translateX(-50%)',
                left: '50%',
                ...jumpLinesStyle,
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
              left: '50%',
              ...starsStyle,
            }}
          />
        )}

        {value === finalValueType && (
          <animated.img
            src={CharacterProtected}
            style={{
              position: 'absolute',
              left: '50%',
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
          x={screenScale.x(336)}
          y={1046}
          type='bad'
          onChange={handleTornadoAnimation}
          onTop={sensoryState === 'bad'}
          style={{
            opacity: sensoryState || tornadoAnimation ? 0 : 1,
          }}
          reset={sensoryState === 'bad' && value === finalValueType}
          sound={'vestibularSpin'}
          valueType={valueType}
          disableTimeout
        />
        <ClickableImage
          Component={JumpIcon}
          x={screenScale.x(546)}
          y={1046}
          type='good'
          onChange={setSensoryState}
          onTop={sensoryState === 'good'}
          style={{
            opacity: sensoryState || tornadoAnimation ? 0 : 1,
          }}
          sound={'vestibularJump'}
        />
      </div>
    </>
  );
}
