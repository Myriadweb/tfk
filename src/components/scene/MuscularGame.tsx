import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactComponent as ArmRelaxed } from './MuscularAssets/armRelaxed.svg';
import { ReactComponent as ArmMid } from './MuscularAssets/armMid.svg';
import { ReactComponent as ArmFlex } from './MuscularAssets/armFlex.svg';
import { ReactComponent as LegRelaxed } from './MuscularAssets/legRelaxed.svg';
import { ReactComponent as LegMid } from './MuscularAssets/legMid.svg';
import { ReactComponent as LegFlex } from './MuscularAssets/legFlex.svg';
import { ReactComponent as LegLinesRelaxed } from './MuscularAssets/legLinesRelaxed.svg';
import { ReactComponent as LegLinesMid } from './MuscularAssets/legLinesMid.svg';
import { ReactComponent as LegLinesFlex } from './MuscularAssets/legLinesFlex.svg';
import armLines from './MuscularAssets/armLines.png';

import { Paths } from '../../types/Paths';
import { useGameContext } from '../../state/game';
import { animated } from 'react-spring';
import { columnLabelStyleLeft } from './common';
import { useTranslation } from 'react-i18next';

export default function MuscularGame() {
  const [{ value }] = useGameContext();
  const { t } = useTranslation('translation');
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    clearInterval(intervalRef.current);
    setCount(0);

    intervalRef.current = setInterval(() => {
      setCount((c) => (c < 2 ? c + 1 : 0));
    }, 1000);

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
              top: 464,
              left: 0,
              visibility: count === 0 ? 'visible' : 'hidden',
            }}
          />
          <ArmMid
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              visibility: count === 1 ? 'visible' : 'hidden',
            }}
          />
          <ArmFlex
            style={{
              position: 'absolute',
              top: -40,
              left: 0,
              visibility: count === 2 ? 'visible' : 'hidden',
            }}
          />
          <img
            src={armLines}
            style={{ position: 'absolute', top: 373, left: 174 }}
          />
          <animated.span
            style={{
              ...columnLabelStyleLeft,
              top: 360,
              left: 361,
            }}
          >
            {t('muscular.scene.biceps')}
          </animated.span>
          <animated.span
            style={{
              ...columnLabelStyleLeft,
              top: 992,
              left: 176,
            }}
          >
            {t('muscular.scene.triceps')}
          </animated.span>
        </>
      )}
      {value === 'leg' && (
        <>
          {count === 0 && (
            <>
              <LegFlex
                style={{
                  position: 'absolute',
                  top: -130,
                  left: 0,
                }}
              />
              <LegLinesFlex
                style={{
                  position: 'absolute',
                  top: 395,
                  left: 75,
                }}
              />
            </>
          )}
          {count === 1 && (
            <>
              <LegMid
                style={{
                  position: 'absolute',
                  top: -130,
                  left: 30,
                }}
              />
              <LegLinesMid
                style={{
                  position: 'absolute',
                  top: 395,
                  left: 243,
                }}
              />
            </>
          )}
          {count === 2 && (
            <>
              <LegRelaxed
                style={{
                  position: 'absolute',
                  top: -130,
                  left: 576,
                }}
              />
              <LegLinesRelaxed
                style={{
                  position: 'absolute',
                  top: 395,
                  left: 243,
                }}
              />
            </>
          )}
          <animated.span
            style={{
              ...columnLabelStyleLeft,
              top: 446,
              left: 293,
            }}
          >
            {t('muscular.scene.hamstrings')}
          </animated.span>
          <animated.span
            style={{
              ...columnLabelStyleLeft,
              top: 974,
              left: 75,
            }}
          >
            {t('muscular.scene.calves')}
          </animated.span>
        </>
      )}
    </>
  );
}
