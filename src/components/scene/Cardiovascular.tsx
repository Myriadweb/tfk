import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';

const bodyLeft = 540;

export default function Cardiovascular() {
  const [animatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const shouldShowIntroAnimation =
    animatedPath === `${Paths.BodySystems}/${Paths.Cardiovascular}`;
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
    navigate(`/${Paths.BodySystems}/${Paths.Cardiovascular}?play=true`);
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
        src='images/Cardiovascular/cardiovascularBody.png'
        style={{
          top: 343,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        src='images/Cardiovascular/cardiovascularLabels.png'
        style={{
          top: 589,
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
          top: 594,
        }}
      >
        {t('cardiovascular.scene.lungs')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 710,
        }}
      >
        {t('cardiovascular.scene.arteries')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 589,
        }}
      >
        {t('cardiovascular.scene.heart')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 690,
        }}
      >
        {t('cardiovascular.scene.veins')}
      </animated.span>
    </>
  );
}
