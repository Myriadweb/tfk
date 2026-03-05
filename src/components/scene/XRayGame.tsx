import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import Wound from './XRayAssets/wound.svg';
import {XRayScene, XRayScene2, XRayChildNoBracelet } from './ChildrenAssets/childrenAssets';
import { ReactComponent as XRayMachineScene } from './XRayAssets/xRayMachineScene.svg';
import { ReactComponent as PainLines } from './XRayAssets/painLines.svg';
import { ReactComponent as XRayBody } from './XRayAssets/xRayBody.svg';
import { ReactComponent as Cast } from './XRayAssets/cast.svg';
import { ReactComponent as Signature } from './XRayAssets/signature.svg';
// import { ReactComponent as FinalCharacter } from './ChildrenAssets/Child5/defaultNoBraceletAlt.svg';
import Bear from './SharedAssets/bear.png';
import { useGameContext } from '../../state/game';
import playSound from '../../sound';
import { useEffect } from 'react';
import Scrapbook from "./XRayAssets/xRayScrapbook.jpg";
import {screenScale, getDeviceName, getCurrentDevice} from "../../utils/scaling";

const ChildFinalStep = XRayChildNoBracelet;

export default function XRayGame() {
  const [{ step, value }, setStep] = useGameContext();

  const [animatedDiv, animatedDivApi] = useSpring(() => ({
    transform: 'scale(1)',
    left: 0,
    top: 0,
  }));
  const [painLines, painLinesApi] = useSpring(() => ({
    scale: 1,
    opacity: 0,
    left: 884,
    top: 848,
  }));
  const woundStyle = useSpring({
    from: { transform: 'scale(0.5)', opacity: 1 },
    to: { transform: 'scale(1)', opacity: 0.1 },
    loop: true,
  });
  const [xRayFlash, xRayFlashApi] = useSpring(() => ({
    opacity: 0,
    display: 'none'
  }));
  const [xRayMachineStyle, xRayMachineApi] = useSpring(() => ({
    transform: 'translateX(-1080px)',
  }));

  useEffect(() => {
    if (step === 2) {
      xRayMachineApi.start({
        transform: 'translateX(0px)',
        config: {
          duration: 1000,
        },
      });
    } else if (step === 3) {
      xRayFlashApi.start({ opacity: 0.8, display: 'block' });
      setTimeout(() => {
        setStep((oldState) => ({ ...oldState, step: 4 }));
      }, 3000);
    } else if (step === 4) {
      xRayFlashApi.start({
        opacity: 0, display: 'none'
      });
    }
  }, [step, setStep, xRayFlashApi, xRayMachineApi]);

  const scaleIt = () => {
    let n = 0;

    playSound('xRay_Red_Spot');

    painLinesApi.start({
      from: { scale: 0.5, opacity: 0 },
      to: { scale: 1, opacity: 1 },
      loop: () => (n < 2 ? ++n && { reverse: true } : false),
      config: {
        duration: 300,
      },
    });
    animatedDivApi.start({
      transform: 'scale(3)',
      left: -2101,
      top: -2526,
      delay: 1000,
      onRest: () => setStep({ step: 1 }),
    });
  };

  return (
    <>
      <div className='element-container'>
        {step < 2 && (
          <animated.div
            style={{
              ...animatedDiv,
              position: 'absolute',
            }}
          >
            <XRayScene
              style={{
                position: 'absolute',
                left: -22,
                width: 1123,
                height: 1868,
              }}
            />
            {step === 0 && (
              <animated.img
                src={Wound}
                style={{
                  position: 'absolute',
                  left: 771,
                  top: 882,
                  ...woundStyle,
                }}
              />
            )}
            <animated.div
              style={{
                ...painLines,
                position: 'absolute',
              }}
            >
              <PainLines />
            </animated.div>
          </animated.div>
        )}
        {step > 1 && step < 4 && (
          <>
            <XRayScene2 />
            <animated.div
              style={{ position: 'absolute', top: -5, ...xRayMachineStyle }}
            >
              <XRayMachineScene />
            </animated.div>
          </>
        )}
        {step === 4 && (
          <>
            <XRayBody
              style={{
                position: 'absolute',
                left: 540,
                top: 630,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </>
        )}
        {step === 0 && (
          <div
            style={{
              position: 'absolute',
              width: 66,
              height: 100,
              left: 806,
              opacity: 0.3,
              top: 931,
            }}
            onClick={() => scaleIt()}
          />
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
              <ChildFinalStep height='984' width='392' />
            </div>
            <Cast
              style={{
                position: 'absolute',
                left: getDeviceName() === 'surface-pro' ? 598 : screenScale.x(658),
                top: 750,
              }}
            />
            {value === 'signature' && (
              <animated.div
                style={{
                  position: 'absolute',
                  left: screenScale.x(689),
                  top: 774,
                }}
              >
                <Signature />
              </animated.div>
            )}
            {value === 'doll' && (
              <animated.img
                src={Bear}
                style={{
                  position: 'absolute',
                  left: getDeviceName() === 'surface-pro' ? 212 : (getCurrentDevice().viewportWidth < 1080 ? 249 : screenScale.x(278)),
                  top: 656,
                }}
              />
            )}
            {value === 'medal' && (
              <animated.img
                src={`images/XRay/medal.png`}
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
      <animated.div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'white',
          top: 0,
          ...xRayFlash,
        }}
      />
      {step === 7 && (
        <>
          <img
            src={Scrapbook}
            className='scrapbook'
          />
        </>
      )}
    </>
  );
}
