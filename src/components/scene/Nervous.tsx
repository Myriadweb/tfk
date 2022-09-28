import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import NervousGame from './NervousAssets/nervousMain.svg';
import { useLanguageContext } from '../../state/language';

const bodyLeft = 540;

export default function Nervous() {
  const [animatedPath] = useAnimateContext();
  const [language] = useLanguageContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const shouldShowIntroAnimation =
    animatedPath === `${Paths.BodySystems}/${Paths.Nervous}`;
  const [overlayStyle, overlayApi] = useSpring(() => ({
    from: { opacity: shouldShowIntroAnimation ? 0 : 1 },
    to: { opacity: 1 },
    delay: 500,
    config: {
      duration: 500,
    },
  }));
  const [bodyStyle, bodyApi] = useSpring(() => ({
    from: { left: shouldShowIntroAnimation ? -300 : bodyLeft },
    to: { left: bodyLeft },
    config: {
      duration: 500,
    },
  }));
  const location = useLocation();

  if (location.search === '?play=true') {
    return <Navigate to={Paths.Game + '?play=true'} />;
  }

  // if we have an animated path, we need to show the slide in animation
  if (animatedPath) {
    // if we have a different animatedPath, we show the slide out animation
    overlayApi.start({
      to: [{ opacity: 0 }],
      from: { opacity: 1 },
      config: {
        duration: 500,
      },
    });
    bodyApi.start({
      // @ts-ignore
      from: { left: bodyLeft },
      to: { left: -300 },
      delay: 300,
      onRest: () => navigate('/' + animatedPath),
    });
    // then we navigate to the path
  }

  return (
    <>
      <animated.img
        src={NervousGame}
        style={{
          top: 343,
          width: 400,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        src='images/Nervous/nervousLabels.png'
        style={{
          top: 375,
          position: 'absolute',
          left: 540,
          transform: 'translate(-50%, 0)',
          ...overlayStyle,
        }}
      />
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 370,
        }}
      >
        {t('nervous.scene.brain')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 456,
        }}
      >
        {t('nervous.scene.cerebellum')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 692,
        }}
      >
        {t('nervous.scene.nerves')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: language === 'es' ? 449 : 474,
        }}
      >
        {t('nervous.scene.brainStem')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 578,
        }}
      >
        {t('nervous.scene.spinalCord')}
      </animated.span>
    </>
  );
}
