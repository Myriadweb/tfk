import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import playSound from '../../sound';
import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as ArteriesLine } from './CardiovascularAssets/arteriesLine.svg';
import { ReactComponent as VeinsLine } from './CardiovascularAssets/veinsLines.svg';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import { useTranslation } from 'react-i18next';

import Animation1A from '../../animations/cardiovascular1a.mp4';
import Animation1B from '../../animations/cardiovascular1b.mp4';
import Animation1C from '../../animations/cardiovascular1c.mp4';
import Animation2A from '../../animations/cardiovascular2a.webm';
import Animation2B from '../../animations/cardiovascular2b.webm';
import cardioVascular2Phase1Frames from './CardiovascularAssets/cardiovascular2_phase1/cardiovascular2Phase1Sequences';
import cardioVascular2Phase2Frames from "./CardiovascularAssets/cardiovascular2_phase2/cardiovascular2Phase2Sequences";

import ReactPlayer from 'react-player';
import {screenScale, getDeviceName } from "../../utils/scaling";
import { useLocationPath } from "../../hooks";
import { isSafari } from "../../utils/platform";

export default function CardiovascularGame() {
  const [{ step }, setGameState] = useGameContext();
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const [cardiovascular2Phase1, setCardiovascular2Phase1] = React.useState(0);
  const [cardiovascular2Phase2, setCardiovascular2Phase2] = React.useState(0);
  const { t } = useTranslation('translation');
  const buildPath = useLocationPath();

  // Preload cardioVascular2Phase1Frames images
  React.useEffect(() => {
    cardioVascular2Phase1Frames.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
    cardioVascular2Phase2Frames.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  React.useEffect(() => {
    if (step === 7) {
      let frame = 0;
      const totalFrames = cardioVascular2Phase1Frames.length;
      const interval = setInterval(() => {
        frame = (frame + 1) % totalFrames;
        setCardiovascular2Phase1(frame);
        if (frame === totalFrames - 1) {
          setCardiovascular2Phase1(totalFrames - 1);
          setGameState({ step: 8 });
          clearInterval(interval);
        }
      }, 1000 / 24); // 24 FPS
      return () => clearInterval(interval);
    }
  }, [step, setGameState]);

  React.useEffect(() => {
    if (step === 9) {
      let frame = 0;
      const totalFrames = cardioVascular2Phase2Frames.length;
      const interval = setInterval(() => {
        frame = (frame + 1) % totalFrames;
        setCardiovascular2Phase2(frame);
        if (frame === totalFrames - 1) {
          setCardiovascular2Phase2(totalFrames - 1);
          setGameState({ step: 10 });
          clearInterval(interval);
        }
      }, 1000 / 24); // 24 FPS
      return () => clearInterval(interval);
    }
  }, [step, setGameState]);

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => setGameState({ step: 2 }), 1000);
    } else if (step === 7) {
      playSound('cardiovascularSlowHeartbeat');
    }
  }, [step]);

  if (!location.search) {
    return (
      <Navigate to={'/' + buildPath(Paths.BodySystems + '/' + Paths.Cardiovascular, false)} />
    );
  }

  const ChildComponent = Characters.sensory[selectedCharacter];
  const width = sensoryChildWidth;

  const BreatheHead = Characters.breathe[selectedCharacter];

  return (
    <>
      {step < 2 && (
        <div className="scene-container">
          <div
            style={{
              position: 'absolute',
              left: screenScale.x(540),
              top: 271,
              transform: `translate(-${width / 2}px, 0)`,
            }}
          >
            <ChildComponent />
          </div>
          {step === 1 && (
            <div
              style={{
                position: 'absolute',
                left: screenScale.x(540),
                top: 271,
                transform: `translate(-${width / 2}px, 0)`,
              }}
            >
              <BreatheHead />
            </div>
          )}
        </div>
      )}
      {[4, 5, 6].includes(step) && (
        <ReactPlayer
          className='react-player'
          playing={[6].includes(step)}
          url={Animation1C}
          width='100%'
          height='100%'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          onStart={() => playSound('cardiovascularSlowHeartbeat')}
          onEnded={() => setGameState({ step: 7 })}
        />
      )}
      {[3, 4].includes(step) && (
        <ReactPlayer
          className='react-player'
          playing={[4].includes(step)}
          url={Animation1B}
          width='100%'
          height='100%'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          onEnded={() => setGameState({ step: 5 })}
        />
      )}
      {[2, 3].includes(step) && (
        <ReactPlayer
          className='react-player'
          playing
          url={Animation1A}
          muted={true}
          playsinline={true}
          width='100%'
          height='100%'
          onEnded={() => setGameState({ step: 3 })}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      )}
      {[8, 9, 10, 11].includes(step) && (
        <div className="element-container">
          {!isSafari() ? (
            <ReactPlayer
              className='react-player'
              playing={[9, 10, 11].includes(step)}
              url={Animation2B}
              width='100%'
              height='100%'
              onEnded={() => setGameState({ step: 10 })}
              style={{
                opacity: step === 8 ? 0 : 1,
                position: 'absolute',
                top: 170,
                left: 0,
              }}
            />
          ) : (
            <img src={cardioVascular2Phase2Frames[cardiovascular2Phase2]}
                 style={{
                   opacity: step === 8 ? 0 : 1,
                   position: 'absolute',
                   left: 0,
                   top: window.innerWidth === 1080 ? 'inherit' : 200,
                   bottom: window.innerWidth === 1080 ? 0 : 'inherit',
                   width: '100%' }}
                 alt="Digestive Animation"
                 draggable={false}
            />
          )}
        </div>
      )}
      {[7, 8].includes(step) && (
        <div className="element-container">
          {!isSafari() ? (
            <ReactPlayer
              className='react-player'
              playing
              url={Animation2A}
              width='100%'
              height='100%'
              onEnded={() => setGameState({ step: 8 })}
              style={{
                position: 'absolute',
                top: 170,
                left: 0,
              }}
            />
        ) : (
          <img src={cardioVascular2Phase1Frames[cardiovascular2Phase1]}
               style={{
                 position: 'absolute',
                 left: 0,
                 top: window.innerWidth === 1080 ? 'inherit' : 200,
                 bottom: window.innerWidth === 1080 ? 0 : 'inherit',
                 width: '100%'
              }}
               alt="Digestive Animation"
               draggable={false}
          />
        )}
        </div>
      )}
      {[7, 8, 9].includes(step) && (
        <div className="element-container">
          <ArteriesLine
            style={{
              position: 'absolute',
              top: screenScale.y(743),
              left: screenScale.x(217),
            }}
          />
          <span
            style={{
              ...columnLabelStyleLeft,
              top: screenScale.y(710),
            }}
          >
            {t('cardiovascular.scene.arteries')}
          </span>
        </div>
      )}
      {step === 9 && (
        <div className="element-container">
          <VeinsLine
            style={{
              position: 'absolute',
              top: screenScale.y(721),
              left: screenScale.x(690),
            }}
          />
          <span
            style={{
              ...columnLabelStyleRight,
              top: screenScale.y(690),
            }}
          >
            {t('cardiovascular.scene.veins')}
          </span>
        </div>
      )}
    </>
  );
}
