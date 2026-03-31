import * as React from 'react';
import {animated, useSpring} from 'react-spring';
import { useGameContext } from '../../state/game';
import { DraggableImage } from './SharedComponents/DraggableImage';
import playSound from '../../sound';
import { SurgicalPrepChildBed, SurgicalPrepChildBedSleeping, SurgicalPrepFinalChild } from './ChildrenAssets/childrenAssets';
import Tray from './SharedAssets/tray.png';
import BPCuff from './SharedAssets/bpCuff.svg';
import Target from './SharedAssets/target.svg';
import XRayView from './SharedAssets/xRayView.svg';
import BPCuffOnArm from './SharedAssets/bpCuffOnArm.svg';
import BPCuffResults from './SharedAssets/bpCuffResults.svg';
import NeedleChoice from './IvAssets/needleChoice.svg';
import NeedlePlaced1 from './IvAssets/needlePlaced1.svg';
import NeedlePlaced2 from './IvAssets/needlePlaced2.svg';
import NeedlePlaced3 from './IvAssets/needlePlaced3.svg';
import BandageSelection from './SharedAssets/bandageSelection.svg';
import BandagePlaced from './SharedAssets/bandagePlacedLong.svg';
import AnesthesiaMask from './SurgicalPrepAssets/anesthesiaMask.svg';
import Juicebox from './SurgicalPrepAssets/juicebox.svg';
import Popsicle from './SurgicalPrepAssets/popsicle.svg';
import IceCream from './SurgicalPrepAssets/iceCream.svg';
import Scrapbook from "./SurgicalPrepAssets/surgicalPrepScrapbook.jpg";
import {screenScale, elementPosition, getDeviceName} from "../../utils/scaling";

export default function SurgicalPrepGame() {
  const [{ step, value }, setGameState] = useGameContext();
  const [childStyle, childApi] = useSpring(() => ({
    transform: 'scale(1) translate(0px, 0px)',
  }));
  const [trayStyle, trayApi] = useSpring(() => ({
    transform: 'translateX(600px)',
  }));
  const [targetStyle, targetApi] = useSpring(() => ({
    opacity: 0,
    top: 489,
    left: 345,
    scale: 1,
  }));
  const [needleComponentPhase, setNeedleComponentPhase] = React.useState(1);
  const [darkLayerStyle, darkLayerApi] = useSpring(() => ({ opacity: 0 }));

  React.useEffect(() => {
    if (step === 1) {
      childApi.start({
        to: [
          { transform: 'scale(1) translate(210px, -145px)' },
          { transform: 'scale(2) translate(210px, -145px)' },
        ],
        onRest: () => {
          trayApi.start({ transform: 'translateX(0px)' });
          targetApi.start({ opacity: 1 });
          targetApi.start({
            from: { scale: 0.75 },
            to: { scale: 1 },
            loop: () => ({
              reverse: true,
            }),
          });
        },
      });
    } else if (step === 3) {
      targetApi.set({
        opacity: 0,
      });
    } else if (step === 4) {
      trayApi.start({ transform: 'translateX(0px)' });
      targetApi.start({ opacity: 1 });
      targetApi.start({
        from: { scale: 0.75, top: 822, left: 268, opacity: 1 },
        to: { scale: 1, top: 822, left: 268, opacity: 1 },
        loop: () => ({
          reverse: true,
        }),
      });
    } else if (step === 5) {
      targetApi.set({
        opacity: 0,
      });
    } else if (step === 6) {
      trayApi.start({ transform: 'translateX(0px)' });
      targetApi.start({ opacity: 1 });
      targetApi.start({
        from: { scale: 0.75, top: 822, left: 239 },
        to: { scale: 1, top: 822, left: 239 },
        loop: () => ({
          reverse: true,
        }),
      });
    } else if (step === 8) {
      childApi.start({
        transform: 'scale(2) translate(0px, 450px)',
        onRest: () => {
          setGameState({ step: 9 });
        },
      });
    } else if (step === 12) {
      darkLayerApi.start({
        opacity: 1,
        onRest: () => {
          setGameState({ step: 13 });
        },
        config: {
          duration: 2000,
        },
      });
    } else if (step === 13) {
      darkLayerApi.start({
        opacity: 0,
        config: {
          duration: 2000,
        },
      });
    }
  }, [childApi, darkLayerApi, setGameState, step, targetApi, trayApi]);

  const ChildComponent = step < 11 ? SurgicalPrepChildBed : SurgicalPrepChildBedSleeping;

  return (
    <>
      <div className='element-container'>
        {step < 13 && (
          <>
            <animated.div
              style={{
                position: 'relative',
                top: 27,
                willChange: 'transform',
                ...childStyle,
                width: 1080,
                height: 1739,
              }}
            >
              <ChildComponent style={{ width: 1080, height: 1739 }} />
            </animated.div>
            {step === 4 && (
              <animated.img
                style={{
                  position: 'absolute',
                  left: 165,
                  top: 726,
                }}
                src={XRayView}
              />
            )}

            {step >= 5 && step < 7 && (
              <>
                <animated.img
                  src={NeedlePlaced1}
                  style={{
                    position: 'absolute',
                    top: 838,
                    left: 296,
                    display: needleComponentPhase === 1 ? 'block' : 'none',
                  }}
                />
                <animated.img
                  src={NeedlePlaced2}
                  style={{
                    position: 'absolute',
                    top: 839,
                    left: 323,
                    display: needleComponentPhase === 2 ? 'block' : 'none',
                  }}
                />
                <animated.img
                  src={NeedlePlaced3}
                  style={{
                    position: 'absolute',
                    top: 748,
                    left: 302,
                    display: needleComponentPhase === 3 ? 'block' : 'none',
                  }}
                />
              </>
            )}
            {step > 6 && step < 8 && (
              <img
                src={BandagePlaced}
                style={{
                  position: 'absolute',
                  top: 408,
                  right: getDeviceName() === 'surface-pro' ? 515 : screenScale.x(618)
                }}
              />
            )}
            {[1, 4, 6].includes(step) && (
              <animated.img
                style={{ position: 'absolute', ...targetStyle }}
                src={Target}
              />
            )}
            {[2, 3].includes(step) && (
              <animated.img
                src={BPCuffOnArm}
                style={{ position: 'absolute', top: 449, left: 338 }}
              />
            )}
            <animated.img
              src={BPCuffResults}
              style={{
                position: 'absolute',
                top: 1063,
                left: 688,
                display: step === 3 ? 'block' : 'none',
              }}
            />
            {step >= 10 && (
              <animated.img
                src={AnesthesiaMask}
                style={{
                  position: 'absolute',
                  top: 759,
                  left: 316,
                }}
              />
            )}
            <animated.div
              style={{ position: 'absolute', top: 806, left: elementPosition.left(614), ...trayStyle }}
            >
              <animated.img src={Tray} />
              {[1].includes(step) && (
                <DraggableImage
                  ImageComponent={BPCuff}
                  x={64}
                  y={23}
                  onComplete={(newX, newY) => {
                    if (
                      newX > -600 &&
                      newX < -195 &&
                      newY > -475 &&
                      newY < -250
                    ) {
                      playSound('completeStep');
                      trayApi.start({ transform: 'translateX(600px)' });

                      // A little hacky, but it helps to avoid errors in the console
                      setTimeout(() => setGameState({ step: 2 }), 1);
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
              {[4].includes(step) && (
                <DraggableImage
                  ImageComponent={NeedleChoice}
                  x={230}
                  y={95}
                  onComplete={(newX, newY) => {
                    if (newX > -351 && newX < -194 && newY > -222 && newY < 180) {
                      playSound('completeStep');
                      trayApi.start({ transform: 'translateX(600px)' });
                      // A little hacky, but it helps to avoid errors in the console
                      setTimeout(() => setGameState({ step: 5 }), 1);

                      setTimeout(() => setNeedleComponentPhase(2), 1000);
                      setTimeout(() => setNeedleComponentPhase(3), 2000);
                    }
                  }}
                  bounds={{
                    left: -849,
                    top: -895,
                    right: 190,
                    bottom: 85,
                  }}
                />
              )}
              {[6].includes(step) && (
                <DraggableImage
                  ImageComponent={BandageSelection}
                  x={151}
                  y={138}
                  onComplete={(newX, newY) => {
                    if (newX > -452 && newX < -247 && newY > -120 && newY < 120) {
                      playSound('surgicalPrepBloodTourniquet');
                      trayApi.start({ transform: 'translateX(600px)' });
                      // A little hacky, but it helps to avoid errors in the console
                      setTimeout(() => setGameState({ step: 7 }), 1);
                    }
                  }}
                  bounds={{
                    left: -769,
                    top: -943,
                    right: 105,
                    bottom: 115,
                  }}
                />
              )}
            </animated.div>
          </>
        )}
        {step >= 13 && step < 16 && (
          <>
            <SurgicalPrepFinalChild
              style={{
                position: 'absolute',
                transform: 'translateX(-50%)',
                left: 540,
                top: 220,
              }}
            />
            {value === 'juicebox' && (
              <animated.img
                src={Juicebox}
                style={{
                  position: 'absolute',
                  left: 754,
                  top: 786,
                }}
              />
            )}
            {value === 'popsicle' && (
              <animated.img
                src={Popsicle}
                style={{
                  position: 'absolute',
                  left: 734,
                  top: 740,
                }}
              />
            )}
            {value === 'icecream' && (
              <animated.img
                src={IceCream}
                style={{
                  position: 'absolute',
                  left: 803,
                  top: 778,
                  transform: 'translate(-50%, 0)',
                }}
              />
            )}
          </>
        )}
      </div>
      <animated.div
        style={{
          display: step >= 12 ? 'block' : 'none',
          position: 'absolute',
          top: 0,
          background: 'black',
          left: 0,
          width: 1080,
          height: 1300,
          ...darkLayerStyle,
        }}
      />
      {step === 16 && (
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
