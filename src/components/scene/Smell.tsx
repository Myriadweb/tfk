import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import playSound from '../../sound';
import { ReactComponent as Flower } from './SmellAssets/Flower.svg';
import { ReactComponent as Shoe } from './SmellAssets/Shoe.svg';
import { ReactComponent as Closepin } from './SmellAssets/Closepin.svg';
import { useGameContext } from '../../state/game';

type SmellType = 'good' | 'bad';

type Props = {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  x: number;
  y: number;
  onChange: (type: SmellType) => void;
  smellType: SmellType;
  onTop?: boolean;
  reset?: boolean;
};

const ClickableImage = ({
  Component,
  x,
  y,
  onChange,
  smellType,
  onTop,
  reset,
}: Props) => {
  const [style, styleApi] = useSpring(() => ({
    transform: `translate(0%, 0%) rotate(0deg)`,
    left: x,
    top: y,
  }));
  const [{ value }, setGameState] = useGameContext();

  useEffect(() => {
    if (reset) {
      smellTest();
    }
  }, [reset]);

  const smellTest = () => {
    if (onTop) {
      styleApi.start({
        transform: `translate(0%, 0%) rotate(0deg)`,
        left: x,
        top: y,
      });
      if (!reset) {
        setGameState({ step: 0, value: '' });
      }
      onChange(null);
      return;
    }

    playSound(smellType === 'good' ? 'smellsGood' : 'smellsBad');
    styleApi.start({
      left: 540,
      top: 950,
      transform: `translate(-50%, -50%) rotate(${
        smellType === 'good' ? '13' : '0'
      }deg)`,
    });
    setGameState({ step: 0, value: smellType === 'bad' ? 'badSmell' : '' });
    onChange(smellType);
  };

  return (
    <animated.div
      style={{
        position: 'absolute',
        zIndex: onTop ? 2 : 0,
        ...style,
      }}
    >
      <Component onClick={smellTest} />
    </animated.div>
  );
};

const childImages = {
  good: 'images/Smell/childHappy.png',
  bad: 'images/Smell/childScared.png',
};

export function Smell() {
  const [smellState, setSmellState] = React.useState<SmellType | null>(null);
  const location = useLocation();
  const [overlay, overlayAPI] = useSpring(() => ({ opacity: 0 }));
  const [brain, brainAPI] = useSpring(() => ({ opacity: 0 }));
  const [effectStyle, effectAPI] = useSpring(() => ({ opacity: 0 }));
  const [{ value }] = useGameContext();

  if (smellState && value !== 'badSmell-final') {
    brainAPI.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 500,
      },
      delay: 500,
    });
    effectAPI.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 1000,
    });
    overlayAPI.start({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: {
        duration: 500,
      },
      delay: 500,
    });
  } else {
    effectAPI.set({ opacity: 0 });
    brainAPI.set({ opacity: 0 });
    overlayAPI.set({ opacity: 0 });
  }

  if (!location.search) {
    return <Navigate to={'/bodySystems/sensory'} />;
  }

  const childImage = childImages[smellState];

  return (
    <>
      {smellState === 'bad' && (
        <img
          src='public/images/BGBad.png'
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
          }}
        />
      )}
      <img
        src={childImage || 'images/Smell/child.png'}
        style={{
          position: 'absolute',
          left: 540,
          top: 276,
          transform: 'translate(-50%, 0)',
        }}
      />
      <img
        src='public/images/Smell/bottomOverlay.png'
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
      {smellState === 'good' && (
        <>
          <animated.img
            src='images/Smell/overlayGOOD.png'
            style={{
              position: 'absolute',
              left: 0,
              top: -180,
              zIndex: 1,
              ...overlay,
            }}
          />
          <animated.img
            src='images/Smell/sparkles.png'
            style={{
              position: 'absolute',
              top: 721,
              left: 234,
              zIndex: 2,
              ...effectStyle,
            }}
          />
        </>
      )}
      {smellState === 'bad' && (
        <>
          <animated.img
            src='images/Smell/overlayBAD.png'
            style={{
              position: 'absolute',
              left: 0,
              top: -180,
              zIndex: 1,
              ...overlay,
            }}
          />
          <animated.img
            src='images/Smell/flies.png'
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              top: 867,
              left: 517,
              zIndex: 1,
              ...effectStyle,
            }}
          />
        </>
      )}
      {smellState && (
        <animated.img
          src='images/Smell/brain.png'
          style={{
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: 499,
            left: 536,
            ...brain,
          }}
        />
      )}
      {value === 'badSmell-final' && (
        <Closepin style={{ position: 'absolute', left: 508, top: 739 }} />
      )}
      <ClickableImage
        Component={Flower}
        x={228}
        y={945}
        smellType='good'
        onChange={setSmellState}
        onTop={smellState === 'good'}
      />
      <ClickableImage
        Component={Shoe}
        x={624}
        y={950}
        smellType='bad'
        onChange={setSmellState}
        onTop={smellState === 'bad'}
        reset={smellState === 'bad' && value === 'badSmell-final'}
      />
    </>
  );
}
