import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import SkeletalGame from './SkeletalGame';

const bodyLeft = 540;

export default function Skeletal() {
  const [animatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const shouldShowIntroAnimation =
    animatedPath === `${Paths.BodySystems}/${Paths.Skeletal}`;
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
  const navigate = useNavigate();
  const location = useLocation();

  const isGame =
    location.pathname ===
    `/${Paths.BodySystems}/${Paths.Skeletal}/${Paths.Game}`;

  // if we have an animated path, we need to show the slide in animation
  if (
    animatedPath &&
    animatedPath !== `${Paths.BodySystems}/${Paths.Skeletal}`
  ) {
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
  } else {
    overlayApi.start({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      config: {
        duration: 500,
      },
    });
  }

  if (!isGame && location.search === '?play=true') {
    overlayApi.start({
      to: [{ opacity: 0 }],
      from: { opacity: 1 },
      config: {
        duration: 500,
      },
      onRest: () => setTimeout(() => navigate(`${Paths.Game}?play=true`), 500),
    });
  }

  if (isGame) {
    return <SkeletalGame />;
  }

  return (
    <>
      <animated.img
        src='images/Skeletal/skeletalBody.png'
        style={{
          top: 343,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        src='images/Skeletal/skeletalLabels.png'
        style={{
          top: 263,
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
          top: 264,
        }}
      >
        {t('skeletal.scene.skull')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 350,
        }}
      >
        {t('skeletal.scene.mandible')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 429,
        }}
      >
        {t('skeletal.scene.clavicle')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 510,
        }}
      >
        {t('skeletal.scene.scapula')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 591,
        }}
      >
        {t('skeletal.scene.ribs')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 683,
        }}
      >
        {t('skeletal.scene.pelvis')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 760,
        }}
      >
        {t('skeletal.scene.wrist')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 842,
        }}
      >
        {t('skeletal.scene.hand')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 929,
        }}
      >
        {t('skeletal.scene.femur')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1014,
        }}
      >
        {t('skeletal.scene.tibia')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1095,
        }}
      >
        {t('skeletal.scene.ankles')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1182,
        }}
      >
        {t('skeletal.scene.feet')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 363,
        }}
      >
        {t('skeletal.scene.sternum')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 447,
        }}
      >
        {t('skeletal.scene.vertebrae')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 532,
        }}
      >
        {t('skeletal.scene.humerus')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 612,
        }}
      >
        {t('skeletal.scene.radius')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 695,
        }}
      >
        {t('skeletal.scene.ulna')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 785,
        }}
      >
        {t('skeletal.scene.patella')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 860,
        }}
      >
        {t('skeletal.scene.fibula')}
      </animated.span>
    </>
  );
}
