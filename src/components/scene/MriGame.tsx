import * as React from 'react';
import { animated, useSpring } from 'react-spring';
// import MriBed from './MriAssets/mriBedAlt.svg';
// import { ReactComponent as MriBedSleeping } from './MriAssets/mriBedSleepingAlt2.svg';
import { ReactComponent as Background } from './MriAssets/background.svg';
import { ReactComponent as MachineBottom } from './MriAssets/machineBottom.svg';
import { ReactComponent as MachineTop } from './MriAssets/machineTop.svg';
import { ReactComponent as MachineBed } from './MriAssets/machineBed.svg';
import { ReactComponent as Music } from './SharedAssets/music.svg';
import { ReactComponent as Nap } from './MriAssets/nap.svg';
import { ReactComponent as VR } from './MriAssets/vr.svg';
import MriBody from './MriAssets/mriBody.png';
import Bear from './SharedAssets/bear.png';
import Medal from './SharedAssets/medal.png';
import { ReactComponent as Sticker } from './SharedAssets/sticker.svg';
import { useGameContext } from '../../state/game';
import { CSSProperties, useEffect } from 'react';
import { Characters, MriBed, MriBedSleeping } from './ChildrenAssets/childrenAssets';
import Scrapbook from "./MriAssets/scrapbook.jpg";

const sceneStyle: CSSProperties = {
  position: 'absolute',
  transform: 'translateX(-50%)',
};

const ChildFinalStep = Characters.default[2];

export default function MriGame() {
  const [{ step, value }, setStep] = useGameContext();

  const [animatedScene, animatedSceneApi] = useSpring(() => ({
    transform: 'scale(1.4) translateY(-700px)',
  }));
  const [mriBedStyle, mriBedApi] = useSpring(() => ({
    transform: 'translateY(0px)',
  }));
  const [mriChildStyle, mriChildApi] = useSpring(() => ({
    transform: 'translateY(0px)',
  }));
  const [darkOverlayStyle, darkOverlayApi] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    if (step === 2) {
      animatedSceneApi.start({
        to: {
          transform: 'scale(1) translateY(0px)',
        },
        config: {
          duration: 1000,
        },
      });
    } else if (step === 3) {
      mriChildApi.start({
        to: {
          transform: 'translateY(-1400px)',
        },
        config: {
          duration: 2000,
        },
        onRest: () => {
          darkOverlayApi.start({
            opacity: 0.7,
          });
          setTimeout(() => {
            setStep({ step: 4 });
          }, 2000);
        },
      });
      mriBedApi.start({
        to: {
          transform: 'translateY(-174px)',
        },
      });
    }
  });

  return (
    <>
      <div className='element-container'>
        {step < 4 && (
          <animated.div
            style={{
              position: 'absolute',
              left: 540,
              ...animatedScene,
            }}
          >
            <Background style={{
              ...sceneStyle,
              display: step > 1 ? 'block' : 'none',
              }}
            />
            <MachineBottom style={{ ...sceneStyle, top: 516, left: 2, display: step > 1 ? 'block' : 'none', }} />
            <animated.div style={mriBedStyle}>
              <MachineBed style={{ ...sceneStyle, top: 687, left: 2 }} />
            </animated.div>
            <animated.div style={mriChildStyle}>
              <MriBedSleeping
                style={{
                  ...sceneStyle,
                  top: 622,
                  width: 791,
                  height: 1424,
                }}
              />
              {value === 'music' && (
                <Music
                  style={{
                    ...sceneStyle,
                    top: 714,
                    zIndex: 10,
                    width: 380,
                    left: 8,
                  }}
                />
              )}
              {value === 'vr' && (
                <VR
                  style={{
                    ...sceneStyle,
                    top: 842,
                    zIndex: 10,
                    width: 380,
                    left: 9,
                  }}
                />
              )}
              {value === 'nap' && (
                <Nap
                  style={{
                    ...sceneStyle,
                    top: 751,
                    zIndex: 10,
                    width: 250,
                    left: 182,
                  }}
                />
              )}
            </animated.div>
            <MachineTop style={{ ...sceneStyle }} />
          </animated.div>
        )}
        {step === 0 && (
          <img
            src={MriBed}
            style={{
              ...(sceneStyle as CSSProperties),
              transform: 'translateX(-50%) scale(1.4)',
              top: 175,
              left: 540,
              width: 791,
              height: 1424,
            }}
          />
        )}
        {step === 4 && (
          <>
            <img
              src={MriBody}
              style={{
                position: 'absolute',
                left: 540,
                top: 630,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </>
        )}
        {step >= 5 && step < 7 && (
          <>
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 274,
                transform: 'translate(-50%, 0)',
              }}
            >
              <ChildFinalStep />
            </div>
            {value === 'sticker' && (
              <animated.div
                style={{
                  position: 'absolute',
                  left: 405,
                  top: 627,
                }}
              >
                <Sticker />
              </animated.div>
            )}
            {value === 'doll' && (
              <animated.img
                src={Bear}
                style={{
                  position: 'absolute',
                  left: 278,
                  top: 630,
                }}
              />
            )}
            {value === 'medal' && (
              <animated.img
                src={Medal}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 597,
                  transform: 'translate(-50%, 0)',
                }}
              />
            )}
          </>
        )}
      </div>
      {step === 3 && (
        <animated.div
          style={{
            ...darkOverlayStyle,
            background: '#000',
            width: '100%',
            height: '100%',
          }}
        />
      )}
      {step >= 7 && (
        <>
          <img
            src={Scrapbook}
            className="scrapbook"
          />
        </>
      )}
    </>
  );
}
