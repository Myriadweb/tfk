import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { ReactComponent as XRayScene } from './XRayAssets/xRayScene.svg';
import { ReactComponent as PainLines } from './XRayAssets/painLines.svg';
import { ReactComponent as XRayBody } from './XRayAssets/xRayBody.svg';
import { ReactComponent as PopupLine } from './XRayAssets/popupLine.svg';
import { ReactComponent as Cast } from './XRayAssets/cast.svg';
import { ReactComponent as Signature } from './XRayAssets/signature.svg';
import { useProcedureContext } from '../../state/procedure';
import playSound from '../../sound';
import { useEffect } from 'react';
import ProceduresTextBox from './ProceduresTextBox';
import { useTranslation } from 'react-i18next';

export default function XRayGame() {
  const [{ step, value }, setStep] = useProcedureContext();
  const { t } = useTranslation('translation');

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
  const [xRayFlash, xRayFlashApi] = useSpring(() => ({
    opacity: 0,
  }));
  const [popupStyle, popupApi] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    if (step === 3) {
      xRayFlashApi.start({ opacity: 1 });
      setTimeout(() => {
        setStep((oldState) => ({ ...oldState, step: 4 }));
      }, 3000);
    } else if (step === 4) {
      xRayFlashApi.start({
        opacity: 0,
        onRest: () => popupApi.start({ opacity: 1 }),
      });
    }
  }, [step]);

  const scaleIt = () => {
    let n = 0;

    playSound('completeStep');

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
      {step < 4 && (
        <animated.div
          style={{
            ...animatedDiv,
            position: 'absolute',
          }}
        >
          <XRayScene
            style={{
              position: 'absolute',
              top: -152,
              left: 0,
            }}
          />
          <img
            style={{
              position: 'absolute',
              left: 572,
              top: 770,
              width: 145,
              height: 122,
            }}
            src={'images/XRay/JoeDiMaggioLogo.png'}
          />
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
      {step === 4 && (
        <>
          <XRayBody style={{ position: 'absolute', left: 0, top: -170 }} />
          <animated.div style={popupStyle}>
            <PopupLine
              style={{
                position: 'absolute',
                left: 470,
                top: 420,
                transform: 'scale(1.1)',
              }}
            />
            <ProceduresTextBox
              label={t('xRay.scene.brokenBoneLabel')}
              text={t('xRay.scene.brokenBoneText')}
            />
          </animated.div>
        </>
      )}
      {step >= 3 && (
        <animated.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'white',
            ...xRayFlash,
          }}
        />
      )}
      {step >= 5 && (
        <>
          <img
            src={`images/MainMenu/child7.png`}
            style={{
              position: 'absolute',
              left: '50%',
              top: 274,
              transform: 'translate(-50%, 0)',
            }}
          />
          <Cast
            style={{
              position: 'absolute',
              left: 657,
              top: 742,
            }}
          />
          {value === 'signature' && (
            <animated.div
              style={{
                position: 'absolute',
                left: 689,
                top: 774,
              }}
            >
              <Signature />
            </animated.div>
          )}
          {value === 'doll' && (
            <animated.img
              src={`images/XRay/doll.png`}
              style={{
                position: 'absolute',
                left: 278,
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
    </>
  );
}
