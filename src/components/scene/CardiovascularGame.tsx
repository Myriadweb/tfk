import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useCharacterContext } from '../../state/character';
import { Characters, sensoryChildWidth } from './ChildrenAssets/childrenAssets';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as Heart1 } from './CardiovascularAssets/heart1.svg';
import { ReactComponent as Heart2 } from './CardiovascularAssets/heart2.svg';
import { ReactComponent as Heart3 } from './CardiovascularAssets/heart3.svg';
import { ReactComponent as Heart4 } from './CardiovascularAssets/heart4.svg';
import { ReactComponent as Body1 } from './CardiovascularAssets/body1.svg';
import { ReactComponent as Body2 } from './CardiovascularAssets/body2.svg';
import { ReactComponent as Body3 } from './CardiovascularAssets/body3.svg';
import { ReactComponent as ArteriesLine } from './CardiovascularAssets/arteriesLine.svg';
import { ReactComponent as VeinsLine } from './CardiovascularAssets/veinsLines.svg';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import { useTranslation } from 'react-i18next';

export default function CardiovascularGame() {
  const [{ step }, setGameState] = useGameContext();
  const [selectedCharacter] = useCharacterContext();
  const location = useLocation();
  const { t } = useTranslation('translation');

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => setGameState({ step: 2 }), 1000);
    } else if (step === 2) {
      setTimeout(() => setGameState({ step: 3 }), 1000);
    } else if (step === 5) {
      setTimeout(() => setGameState({ step: 6 }), 1000);
    } else if (step === 6) {
      setTimeout(() => setGameState({ step: 7 }), 1000);
    }
  }, [step]);

  if (!location.search) {
    return (
      <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Cardiovascular} />
    );
  }

  const ChildComponent = Characters.sensory[selectedCharacter];
  const width = sensoryChildWidth;

  const BreatheHead = Characters.breathe[selectedCharacter];

  return (
    <>
      {step < 2 && (
        <>
          <div
            style={{
              position: 'absolute',
              left: 540,
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
                left: 540,
                top: 271,
                transform: `translate(-${width / 2}px, 0)`,
              }}
            >
              <BreatheHead />
            </div>
          )}
        </>
      )}
      {step === 2 && (
        <Heart1
          style={{
            position: 'relative',
            left: -155,
          }}
        />
      )}
      {step === 3 && (
        <Heart2
          style={{
            position: 'relative',
            left: -155,
          }}
        />
      )}
      {step === 4 && (
        <Heart3
          style={{
            position: 'relative',
            left: -155,
          }}
        />
      )}
      {step === 5 && (
        <Heart4
          style={{
            position: 'relative',
            left: -155,
          }}
        />
      )}
      {step === 6 && (
        <Body1
          style={{
            position: 'absolute',
            top: 342,
            left: 540,
            transform: 'translateX(-50%)',
          }}
        />
      )}
      {step === 7 && (
        <Body2
          style={{
            position: 'absolute',
            top: 342,
            left: 540,
            transform: 'translateX(-50%)',
          }}
        />
      )}
      {[8, 9].includes(step) && (
        <Body3
          style={{
            position: 'absolute',
            top: 342,
            left: 540,
            transform: 'translateX(-50%)',
          }}
        />
      )}
      {[6, 7, 8].includes(step) && (
        <>
          <ArteriesLine
            style={{
              position: 'absolute',
              top: 743,
              left: 217,
            }}
          />
          <span
            style={{
              ...columnLabelStyleLeft,
              top: 710,
            }}
          >
            {t('cardiovascular.scene.arteries')}
          </span>
        </>
      )}
      {step === 8 && (
        <>
          <VeinsLine
            style={{
              position: 'absolute',
              top: 721,
              left: 690,
            }}
          />
          <span
            style={{
              ...columnLabelStyleRight,
              top: 690,
            }}
          >
            {t('cardiovascular.scene.veins')}
          </span>
        </>
      )}
    </>
  );
}
