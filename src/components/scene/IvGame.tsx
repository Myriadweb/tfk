import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { useGameContext } from '../../state/game';
import { DraggableImage } from './SharedComponents/DraggableImage';
import playSound from '../../sound';
import Tablet from './IvAssets/tablet.svg';
import Bubbles from './IvAssets/bubbles.svg';
import Music from './SharedAssets/music.svg';
import Tray from './SharedAssets/tray.png';
import Tourniquet from './IvAssets/tourniquet.svg';
import TourniquetApplied from './IvAssets/tourniquetApplied.svg';
import Target from './SharedAssets/target.svg';
import Disinfectant from './IvAssets/disinfectant.svg';
import DisinfectantApplied from './IvAssets/disinfectantApplied.svg';
import XRayView from './SharedAssets/xRayView.svg';
import NeedleChoice from './IvAssets/needleChoice.svg';
import NeedlePlaced1 from './IvAssets/needlePlaced1.svg';
import NeedlePlaced2 from './IvAssets/needlePlaced2.svg';
import NeedlePlaced3 from './IvAssets/needlePlaced3.svg';
import BandageSelection from './SharedAssets/bandageSelection.svg';
import BandagePlaced from './SharedAssets/bandagePlacedLong.svg';
import Sticker from './SharedAssets/sticker.svg';
import Bear from './SharedAssets/bear.png';
import Medal from './SharedAssets/medal.png';
import { Characters, IvChildBed, IvChildBedHappy, IvChildBedSmiling } from './ChildrenAssets/childrenAssets';
import InitialPromptIV from './IvAssets/initialPromptIV.svg';
import Scrapbook from './IvAssets/ivScrapbook.jpg';
import {screenScale, elementPosition, getDeviceName} from "../../utils/scaling";

const ChildFinalStep = Characters.default[0];

export default function IvGame() {
  const [{ step, value }, setGameState] = useGameContext();
  const [childStyle, childApi] = useSpring(() => ({
    transform: 'scale(1) translate(0px, 0px)',
  }));
  const [bubbleStyle, bubbleApi] = useSpring(() => ({
    transform: 'translate(0px, 0px)',
  }));
  const [trayStyle, trayApi] = useSpring(() => ({
    transform: 'translateX(600px)',
  }));
  const [targetStyle, targetApi] = useSpring(() => ({
    opacity: 0,
    top: 470,
    left: 380,
    scale: 0.75,
  }));
  const [needleComponentPhase, setNeedleComponentPhase] = React.useState(1);

  React.useEffect(() => {
    if (step === 1 && value === 'bubbles') {
      bubbleApi.start({
        from: { transform: 'translate(10px, 5px)' },
        to: { transform: 'translate(-10px, -5px)' },
        loop: () => ({
          reverse: true,
        }),
        config: {
          duration: 300,
        },
      });
    } else if (step === 2) {
      childApi.start({
        transform: `scale(2) translate(${screenScale.x(232)}px, -222px)`,
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
        top: 800,
        left: 250,
      });
    } else if (step === 4) {
      trayApi.start({ transform: 'translateX(0px)' });
      targetApi.start({ opacity: 1 });
      targetApi.start({
        from: { scale: 0.75, top: 800, left: 250 },
        to: { scale: 1, top: 800, left: 250 },
        loop: () => ({
          reverse: true,
        }),
      });
    } else if (step === 5) {
      targetApi.set({
        opacity: 0,
        top: 780,
        left: 285,
      });
    } else if (step === 6) {
      trayApi.start({ transform: 'translateX(0px)' });
      targetApi.start({ opacity: 1 });
      targetApi.start({
        from: { scale: 0.75, top: 780, left: 285 },
        to: { scale: 1, top: 780, left: 285 },
        loop: () => ({
          reverse: true,
        }),
      });
    } else if (step === 7) {
      targetApi.set({
        opacity: 0,
        top: 822,
        left: 250,
      });
    } else if (step === 8) {
      trayApi.start({ transform: 'translateX(0px)' });
      targetApi.start({ opacity: 1 });
      targetApi.start({
        from: { scale: 0.75, top: 822, left: 250 },
        to: { scale: 1, top: 822, left: 250 },
        loop: () => ({
          reverse: true,
        }),
      });
    }
  });

  let ChildComponent = step === 0 ? IvChildBed : IvChildBedSmiling;
  if (step === 1 && value === 'bubbles') {
    ChildComponent = IvChildBedHappy;
  }

  return (
    <>
      <div className='element-container'>
        {step < 10 && (
          <>
            <animated.div
              style={{
                position: 'relative',
                top: -45,
                ...childStyle,
              }}
            >
              <ChildComponent style={{ width: 1080, height: 1811 }} />
            </animated.div>

            {step < 2 && (
              <>
                {value === 'tablet' && (
                  <img
                    src={Tablet}
                    style={{
                      position: 'absolute',
                      top: 467,
                      left: 578,
                      transform: 'scale(0.996)',
                    }}
                  />
                )}
                {value === 'bubbles' && (
                  <animated.img
                    src={Bubbles}
                    style={{
                      position: 'absolute',
                      top: 124,
                      left: 38,
                      ...bubbleStyle,
                    }}
                  />
                )}
                {value === 'music' && (
                  <img
                    src={Music}
                    style={{
                      position: 'absolute',
                      top: 100,
                      left: 283,
                    }}
                  />
                )}
              </>
            )}
            {step === 6 && (
              <animated.img
                style={{
                  position: 'absolute',
                  left: 185,
                  top: 680,
                }}
                src={XRayView}
              />
            )}

            {step >= 3 && (
              <img
                src={TourniquetApplied}
                style={{
                  position: 'absolute',
                  top: 450,
                  left: 402,
                }}
              />
            )}
            {step === 5 && (
              <animated.img
                src={DisinfectantApplied}
                style={{
                  position: 'absolute',
                  top: 750,
                  left: 250,
                }}
              />
            )}
            {step >= 7 && step < 9 && (
              <>
                <animated.img
                  src={NeedlePlaced1}
                  style={{
                    position: 'absolute',
                    top: 838,
                    left: 308,
                    display: needleComponentPhase === 1 ? 'block' : 'none',
                  }}
                />
                <animated.img
                  src={NeedlePlaced2}
                  style={{
                    position: 'absolute',
                    top: 839,
                    left: 335,
                    display: needleComponentPhase === 2 ? 'block' : 'none',
                  }}
                />
                <animated.img
                  src={NeedlePlaced3}
                  style={{
                    position: 'absolute',
                    top: 748,
                    left: 314,
                    display: needleComponentPhase === 3 ? 'block' : 'none',
                  }}
                />
              </>
            )}
            {step > 8 && (
              <img
                src={BandagePlaced}
                style={{
                  position: 'absolute',
                  top: 408,
                  right: getDeviceName() === 'surface-pro' ? 480 : screenScale.x(590),
                }}
              />
            )}
            {[2, 4, 6, 8].includes(step) && (
              <animated.img
                style={{ position: 'absolute', ...targetStyle }}
                src={Target}
              />
            )}
            <animated.div
              style={{ position: 'absolute', top: 806, left: elementPosition.left(614), ...trayStyle }}
            >
              <animated.img src={Tray} />
              {[2].includes(step) && (
                <DraggableImage
                  ImageComponent={Tourniquet}
                  x={66}
                  y={90}
                  onComplete={(newX, newY) => {
                    if (
                      newX > -635 &&
                      newX < -105 &&
                      newY > -467 &&
                      newY < -256
                    ) {
                      playSound('iVTourniquet');
                      trayApi.start({ transform: 'translateX(600px)' });
                      // A little hacky, but it helps to avoid errors in the console
                      setTimeout(() => setGameState({ step: 3 }), 1);
                    }
                  }}
                  bounds={{
                    left: -677,
                    top: -895,
                    right: 68,
                    bottom: 85,
                  }}
                />
              )}
              {[4].includes(step) && (
                <DraggableImage
                  ImageComponent={Disinfectant}
                  x={200}
                  y={145}
                  onComplete={(newX, newY) => {
                    if (newX > -350 && newX < -244 && newY > -145 && newY < 164) {
                      playSound('completeStep');
                      trayApi.start({ transform: 'translateX(600px)' });
                      // A little hacky, but it helps to avoid errors in the console
                      setTimeout(() => setGameState({ step: 5 }), 1);
                    }
                  }}
                  bounds={{
                    left: -820,
                    top: -959,
                    right: 136,
                    bottom: 185,
                  }}
                />
              )}
              {[6].includes(step) && (
                <DraggableImage
                  ImageComponent={NeedleChoice}
                  x={230}
                  y={95}
                  onComplete={(newX, newY) => {
                    if (newX > -400 && newX < -150 && newY > -100 && newY < 280) {
                      playSound('ivNeedle');
                      trayApi.start({ transform: 'translateX(600px)' });
                      // A little hacky, but it helps to avoid errors in the console
                      setTimeout(() => setGameState({ step: 7 }), 1);

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
              {[8].includes(step) && (
                <DraggableImage
                  ImageComponent={BandageSelection}
                  x={151}
                  y={138}
                  onComplete={(newX, newY) => {
                    if (newX > -452 && newX < -247 && newY > -120 && newY < 120) {
                      playSound('completeStep');
                      trayApi.start({ transform: 'translateX(600px)' });
                      // A little hacky, but it helps to avoid errors in the console
                      setTimeout(() => setGameState({ step: 9 }), 1);
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
        {step >= 10 && step < 12 && (
          <>
            <div
              style={{
                top: 275,
                left: 461,
                position: 'absolute',
              }}
            >
              <ChildFinalStep />
            </div>
            <img
              src={InitialPromptIV}
              style={{
                top: 288,
                position: 'absolute',
                left: 225,
              }}
            />
            {value === 'sticker' && (
              <animated.img
                style={{
                  position: 'absolute',
                  left: 529,
                  top: 627,
                }}
                src={Sticker}
              />
            )}
            {value === 'doll' && (
              <animated.img
                src={Bear}
                style={{
                  position: 'absolute',
                  left: 395,
                  top: 663,
                }}
              />
            )}
            {value === 'medal' && (
              <animated.img
                src={Medal}
                style={{
                  position: 'absolute',
                  left: 654,
                  top: 607,
                  transform: 'translate(-50%, 0)',
                }}
              />
            )}
          </>
        )}
      </div>
      {step === 12 && (
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
