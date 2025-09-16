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

import Animation1A from '../../animations/cardiovascular1a.webm';
import Animation1B from '../../animations/cardiovascular1b.webm';
import Animation1C from '../../animations/cardiovascular1c.webm';
import Animation2A from '../../animations/cardiovascular2aNew.webm';
import Animation2B from '../../animations/cardiovascular2b.webm';

import ReactPlayer from 'react-player';
import {SCALE_FACTORS, screenScale} from "../../utils/scaling";

export default function CardiovascularGame() {
  const [{ step }, setGameState] = useGameContext();
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const { t } = useTranslation('translation');

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => setGameState({ step: 2 }), 1000);
    } else if (step === 7) {
      playSound('cardiovascularSlowHeartbeat');
    }
  });

  if (!location.search) {
    return (
      <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Cardiovascular} />
    );
  }

  const ChildComponent = Characters.sensory[selectedCharacter];
  const width = sensoryChildWidth;
  console.log('scale', screenScale.y(100));

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
        </div>
      )}
      {[7, 8].includes(step) && (
        <div className="element-container">
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
