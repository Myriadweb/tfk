import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { ReactComponent as WellnessScene } from './WellnessAssets/wellnessScene.svg';
import Tray from './SharedAssets/tray.png';
import Thermometer from './WellnessAssets/thermometer.svg';
import ThermometerActive from './WellnessAssets/thermometerActive.svg';
import ThermometerResults from './WellnessAssets/thermometerResults.svg';
import BPCuff from './SharedAssets/bpCuff.svg';
import BPTarget from './SharedAssets/target.svg';
import BPCuffOnArm from './SharedAssets/bpCuffOnArm.svg';
import BPCuffResults from './SharedAssets/bpCuffResults.svg';
import Oximeter from './WellnessAssets/oximeter.svg';
import OximeterOnArm from './WellnessAssets/oximeterOnArm.svg';
import OximeterOnArmActive from './WellnessAssets/oximeterOnArmActive.svg';
import OximeterResults from './WellnessAssets/oximeterResults.svg';
import StandingChild from './WellnessAssets/standingChild.svg';
import BaseballBat from './WellnessAssets/baseballBat.svg';
import BaseballBall from './WellnessAssets/baseballBall.svg';
import Basketball from './WellnessAssets/basketball.svg';
import JumpRope from './WellnessAssets/jumpRope.svg';

import { useGameContext } from '../../state/game';
import playSound from '../../sound';
import { DraggableImage } from './SharedComponents/DraggableImage';

export default function WellnessGame() {
  const [{ step, value }, setGameState] = useGameContext();
  const [ThermometerComponent, setThermometerComponent] =
    React.useState(Thermometer);
  const [childStyle, childApi] = useSpring(() => ({
    transform: 'scale(1) translate(0px, 0px)',
  }));
  const [trayStyle, trayApi] = useSpring(() => ({
    transform: 'translateX(0px)',
  }));
  const [thermometerStyle, thermometerApi] = useSpring(() => ({
    transform: 'translate(0px, 0px)',
  }));
  const [thermometerResultStyle, thermometerResultApi] = useSpring(() => ({
    opacity: 0,
  }));
  const [targetStyle, targetApi] = useSpring(() => ({
    opacity: 0,
    top: 700,
    left: 243,
  }));
  const [oximeterStyle, oximeterApi] = useSpring(() => ({
    transform: 'scale(1) translate(0px, 0px)',
  }));

  React.useEffect(() => {
    if (step === 1) {
      setTimeout(() => {
        setThermometerComponent(ThermometerActive);
        thermometerResultApi.start({
          opacity: 1,
        });
        setGameState({ step: 2 });
      }, 2000);
    } else if (step === 3) {
      thermometerResultApi.set({ opacity: 0 });

      childApi.start({
        transform: 'scale(2) translate(200px, -222px)',
        onRest: () => {
          trayApi.start({ transform: 'translateX(0px)' });
          thermometerResultApi.start({ opacity: 1 });
          targetApi.start({ opacity: 1 });
        },
      });
    } else if (step === 6) {
      trayApi.start({ transform: 'translateX(0px)' });
      targetApi.set({ top: 936 });
      targetApi.start({ opacity: 1 });
    } else if (step === 7) {
      thermometerResultApi.set({ opacity: 0 });
      setTimeout(() => {
        setGameState({ step: 8 });
      }, 1500);
    } else if (step === 9) {
      childApi.start({
        transform: 'scale(1) translate(0px, 0px)',
      });
      oximeterApi.start({
        transform: 'scale(0.5) translate(-4px, 742px)',
      });
    }
  }, [step]);

  const handleThermometerClicked = () => {
    thermometerApi.start({
      transform: 'translate(-304px, -788px)',
      onRest: () => {
        setGameState({ step: 1 });
        trayApi.start({ transform: 'translateX(600px)' });
      },
    });
    playSound('completeStep');
  };

  return (
    <>
      {step < 10 && (
        <animated.div style={childStyle}>
          <WellnessScene />
        </animated.div>
      )}
      {[3, 6].includes(step) && (
        <animated.img
          style={{ position: 'absolute', ...targetStyle }}
          src={BPTarget}
        />
      )}
      <animated.div
        style={{ position: 'absolute', top: 806, left: 614, ...trayStyle }}
      >
        <animated.img src={Tray} />
        {[3].includes(step) && (
          <DraggableImage
            ImageComponent={BPCuff}
            x={64}
            y={23}
            onComplete={(newX, newY) => {
              if (newX > -515 && newX < -295 && newY > -235 && newY < -55) {
                playSound('completeStep');
                trayApi.start({ transform: 'translateX(600px)' });

                // A little hacky, but it helps to avoid errors in the console
                setTimeout(() => setGameState({ step: 4 }), 1);
              }
            }}
            bounds={{
              left: -677,
              top: -832,
              right: 48,
              bottom: 85,
            }}
          />
        )}
        {[6].includes(step) && (
          <DraggableImage
            ImageComponent={Oximeter}
            x={64}
            y={23}
            onComplete={(newX, newY) => {
              if (newX > -564 && newX < -370 && newY > -173 && newY < 5) {
                playSound('completeStep');
                trayApi.start({ transform: 'translateX(600px)' });

                // A little hacky, but it helps to avoid errors in the console
                setTimeout(() => setGameState({ step: 7 }), 1);
              }
            }}
            bounds={{
              left: -677,
              top: -832,
              right: 48,
              bottom: 85,
            }}
          />
        )}
      </animated.div>
      {[4, 5].includes(step) && (
        <animated.img
          src={BPCuffOnArm}
          style={{ position: 'absolute', top: 459, left: 313 }}
        />
      )}
      {[7, 8, 9].includes(step) && (
        <animated.img
          src={step === 7 ? OximeterOnArm : OximeterOnArmActive}
          style={{
            position: 'absolute',
            top: 53,
            left: -172,
            ...oximeterStyle,
          }}
        />
      )}

      <animated.img
        src={ThermometerResults}
        style={{
          position: 'absolute',
          top: 1063,
          left: 688,
          display: step < 3 ? 'block' : 'none',
          ...thermometerResultStyle,
        }}
      />
      <animated.img
        src={BPCuffResults}
        style={{
          position: 'absolute',
          top: 1063,
          left: 688,
          display: step === 5 ? 'block' : 'none',
        }}
      />
      <animated.img
        src={OximeterResults}
        style={{
          position: 'absolute',
          top: 1063,
          left: 688,
          display: step === 8 ? 'block' : 'none',
        }}
      />
      <animated.img
        src={ThermometerComponent}
        style={{
          left: 687,
          top: 996,
          position: 'absolute',
          display: step < 3 ? 'block' : 'none',
          ...thermometerStyle,
        }}
        onClick={() => {
          if (step !== 0) return;

          handleThermometerClicked();
        }}
      />
      {step >= 10 && (
        <>
          <img
            src={StandingChild}
            style={{
              position: 'absolute',
              top: 274,
              transform: 'translateX(-50%)',
            }}
          />
          <img
            src={Basketball}
            style={{
              position: 'absolute',
              top: 755,
              left: 747,
              display: value === 'basketball' ? 'block' : 'none',
            }}
          />
          <img
            src={BaseballBall}
            style={{
              position: 'absolute',
              top: 777,
              left: 478,
              display: value === 'baseball' ? 'block' : 'none',
            }}
          />
          <img
            src={BaseballBat}
            style={{
              position: 'absolute',
              top: 832,
              left: 624,
              display: value === 'baseball' ? 'block' : 'none',
            }}
          />
          <img
            src={JumpRope}
            style={{
              position: 'absolute',
              top: 832,
              left: 426,
              display: value === 'jumpRope' ? 'block' : 'none',
            }}
          />
        </>
      )}
    </>
  );
}
