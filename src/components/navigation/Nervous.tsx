import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { ReactComponent as InfoButton } from './Nervous/infoButton.svg';
import { ReactComponent as LeftButton } from './Nervous/leftButton.svg';
import { ReactComponent as RightButton } from './Nervous/rightButton.svg';
import playSound from '../../sound';
import {Trans} from "react-i18next";

type Props = {
  prefix: Paths;
};

const hemisphereConfig = {
  0: 'leftHemisphereSec',
  1: 'rightHemisphereSec',
  2: 'frontViewSec',
};

const Nervous = ({ prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [
    {
      step,
      value: { isInfoPressed, highlight } = {
        isInfoPressed: false,
        highlight: '',
      },
    },
    setGameState,
  ] = useGameContext();

  const handleRight = () => {
    if (step >= 2) return;

    setGameState({ step: step + 1 });
  };

  const handleLeft = () => {
    if (step === 0) return;

    setGameState({ step: step - 1 });
  };

  return (
    <>
      <div
        style={{
          height: 145,
          background: '#0E1F33',
          boxSizing: 'border-box',
          fontSize: 17,
          color: '#FFF',
          paddingTop: 21,
        }}
      >
        <span>
          <Trans i18nKey={t(hemisphereConfig[step])} />
        </span>
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 14,
          }}
        >
          <div style={{ marginRight: 37, borderRight: '1px solid #FFF' }}>
            <InfoButton
              style={{ marginRight: 35, opacity: isInfoPressed ? 0.4 : 1 }}
              onClick={() => {
                setGameState((old) => ({
                  ...old,
                  value: {
                    ...old.value,
                    isInfoPressed: !isInfoPressed,
                  },
                }));
                playSound('nervousBrainSectionSelection');
              }}
            />
          </div>
          <LeftButton
            style={{ marginRight: 25, opacity: step === 0 ? 0.4 : 1 }}
            onClick={() => {
              handleLeft();
              playSound('nervousBrainTurn');
            }}
          />
          <RightButton
            style={{ opacity: step === 2 ? 0.4 : 1 }}
            onClick={() => {
              handleRight();
              playSound('nervousBrainTurn');
            }}
          />
        </div>
      </div>
      {highlight && (
        <>
          <span
            style={{
              fontSize: 40,
              color: '#FFF',
              letterSpacing: 2,
              display: 'block',
              marginTop: 14,
              fontWeight: 'bold',
            }}
          >
            {t(highlight + '.title')}
          </span>
          <div
            className='body-text'
          >
            {t(highlight + '.text')}
          </div>
        </>
      )}
    </>
  );
};

export default Nervous;
