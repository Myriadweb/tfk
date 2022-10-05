import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactComponent as ArmRelaxed } from './MuscularAssets/tricepsContracting.svg';
import { ReactComponent as ArmFlex } from './MuscularAssets/bicepsContracting.svg';
import BicepsLeaderLine from './MuscularAssets/bicepsLeaderLine.svg';
import TricepsLeaderLine from './MuscularAssets/triceptsLeaderLine.svg';
import { ReactComponent as LegRelaxed } from './MuscularAssets/hamstringsContracting.svg';
import { ReactComponent as LegFlex } from './MuscularAssets/quadricepsContracting.svg';
import HamstringLeaderLine from './MuscularAssets/hamstringsLeaderLine.svg';
import QuadricepsLeaderLine from './MuscularAssets/quadricepsLeaderLine.svg';
import playSound, {Sounds} from '../../sound';

import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { columnLabelStyleLeft } from './common';
import { useTranslation } from 'react-i18next';
import {Simulate} from "react-dom/test-utils";

const armLabel = {
  padding: '8px 54px 10px',
  transform: 'translate(-50%, 0px)',
  letterSpacing: 1.49,
};

const legLabel = {
  padding: '8px 14px 10px',
  transform: 'translate(-50%, 0px)',
  letterSpacing: 1.49,
};

const contractingLabel = {
  background: '#103159',
  fontWeight: 'normal',
  fontSize: 17,
  fontStyle: 'italic',
  top: '100%',
  left: '50%',
  width: '100%',
  padding: '8px 0 10px',
  transform: 'translate(-50%, 0px)',
  letterSpacing: 0.84,
};

export default function MuscularGame() {
  const [{ value }] = useGameContext();
  const { t } = useTranslation('translation');
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    clearInterval(intervalRef.current);
    setCount(0);
    let n = 0;
    intervalRef.current = setInterval(() => {
      setCount((c) => (c === 0 ? 1 : 0));
      if (n === 0) {
        playSound('muscularAscending')
        n = 1;
      }
      else if (n === 1) {
        playSound('muscularDescending');
        n = 0;
      }
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [value]);

  if (!location.search) {
    if (!location.search) {
      return <Navigate to={'/' + Paths.BodySystems + '/' + Paths.Muscular} />;
    }
  }

  return (
    <>
      {(!value || value === 'arm') && (
        <>
          <ArmRelaxed
            style={{
              position: 'absolute',
              top: 452,
              left: 0,
              visibility: count === 0 ? 'visible' : 'hidden',
            }}
          />
          <ArmFlex
            style={{
              position: 'absolute',
              top: -154,
              left: 0,
              visibility: count === 1 ? 'visible' : 'hidden',
            }}
          />
          <img
            src={BicepsLeaderLine}
            style={{ position: 'absolute', top: 612, left: 329 }}
          />
          <img
            src={TricepsLeaderLine}
            style={{ position: 'absolute', top: 800, left: 186 }}
          />
          <span
            style={{
              ...columnLabelStyleLeft,
              ...armLabel,
              top: 1090,
              left: 561,
            }}
          >
            {t('muscular.scene.biceps')}
            {count === 1 && (
              <span
                style={{
                  ...columnLabelStyleLeft,
                  ...contractingLabel,
                }}
              >
                {t('muscular.scene.contracting')}
              </span>
            )}
          </span>
          <span
            style={{
              ...columnLabelStyleLeft,
              ...armLabel,
              top: 1090,
              left: 197,
            }}
          >
            {t('muscular.scene.triceps')}
            {count === 0 && (
              <span
                style={{
                  ...columnLabelStyleLeft,
                  ...contractingLabel,
                }}
              >
                {t('muscular.scene.contracting')}
              </span>
            )}
          </span>
        </>
      )}
      {value === 'leg' && (
        <>
          {count === 0 && (
            <LegRelaxed
              style={{
                position: 'absolute',
                top: 404,
                left: 0,
              }}
            />
          )}
          {count === 1 && (
            <LegFlex
              style={{
                position: 'absolute',
                top: 404,
                left: 0,
              }}
            />
          )}
          <img
            src={QuadricepsLeaderLine}
            style={{ position: 'absolute', top: 513, left: 177 }}
          />
          <img
            src={HamstringLeaderLine}
            style={{ position: 'absolute', top: 678, left: 351 }}
          />
          <span
            style={{
              ...columnLabelStyleLeft,
              ...legLabel,
              top: 1103,
              left: 487,
            }}
          >
            {t('muscular.scene.hamstrings')}
            {count === 0 && (
              <span
                style={{
                  ...columnLabelStyleLeft,
                  ...contractingLabel,
                }}
              >
                {t('muscular.scene.contracting')}
              </span>
            )}
          </span>
          <span
            style={{
              ...columnLabelStyleLeft,
              ...legLabel,
              top: 1103,
              left: 187,
            }}
          >
            {t('muscular.scene.quadriceps')}
            {count === 1 && (
              <span
                style={{
                  ...columnLabelStyleLeft,
                  ...contractingLabel,
                }}
              >
                {t('muscular.scene.contracting')}
              </span>
            )}
          </span>
        </>
      )}
    </>
  );
}
