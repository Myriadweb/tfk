import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { useGameContext } from '../../state/game';
import { DraggableImage } from './SharedComponents/DraggableImage';
import playSound from '../../sound';
import { ReactComponent as ChildBed } from './IvAssets/childBed.svg';
import { ReactComponent as ChildBedSmiling } from './IvAssets/childBedSmiling.svg';
import Tablet from './IvAssets/tablet.svg';
import Bubbles from './IvAssets/bubbles.svg';
import Music from './SharedAssets/music.svg';

import Tray from './SharedAssets/tray.png';
import Tourniquet from './IvAssets/tourniquet.svg';
import TourniquetApplied from './IvAssets/tourniquetApplied.svg';
import Target from './SharedAssets/target.svg';

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
    top: 533,
    left: 360,
  }));

  React.useEffect(() => {
    if (step === 1 && value === 'bubbles') {
      console.debug('starting dawg');
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
        transform: 'scale(2) translate(232px, -222px)',
        onRest: () => {
          trayApi.start({ transform: 'translateX(0px)' });
          targetApi.start({ opacity: 1 });
        },
      });
    }
  }, [step]);

  const ChildComponent = step === 0 ? ChildBed : ChildBedSmiling;

  return (
    <>
      {step < 10 && (
        <animated.div
          style={{
            position: 'relative',
            top: -45,
            ...childStyle,
          }}
        >
          <ChildComponent />
        </animated.div>
      )}
      {step < 2 && (
        <>
          {value === 'tablet' && (
            <img
              src={Tablet}
              style={{
                position: 'absolute',
                top: 467,
                left: 578,
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
      {[2, 6].includes(step) && (
        <animated.img
          style={{ position: 'absolute', ...targetStyle }}
          src={Target}
        />
      )}
      <animated.div
        style={{ position: 'absolute', top: 806, left: 614, ...trayStyle }}
      >
        <animated.img src={Tray} />
        {[2].includes(step) && (
          <DraggableImage
            ImageComponent={Tourniquet}
            x={66}
            y={90}
            onComplete={(newX, newY) => {
              console.debug({ newX, newY });
              if (newX > -314 && newX < -192 && newY > -467 && newY < -269) {
                playSound('completeStep');
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
      </animated.div>
      {step === 3 && (
        <img
          src={TourniquetApplied}
          style={{
            position: 'absolute',
            top: 505,
            left: 377,
          }}
        />
      )}
    </>
  );
}
