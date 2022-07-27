import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { ReactComponent as XRayScene } from './XRayAssets/xRayScene.svg';
import { ReactComponent as PainLines } from './XRayAssets/painLines.svg';
import { ReactComponent as Arrow } from './SceneAssets/Arrow.svg';
import { useProcedureContext } from '../../state/procedure';

export default function XRayGame() {
  const [{ step, value }, setStep] = useProcedureContext();
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

  const scaleIt = () => {
    let n = 0;

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
      ></div>
    </>
  );
}
