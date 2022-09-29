import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import { CSSProperties } from 'react';
import Labels from './MuscularAssets/labels.svg';
import { useLanguageContext } from '../../state/language';

const bodyLeft = 540;

const muscularLabelStyle = {
  padding: '5px 15px 7px',
  whiteSpace: 'pre-wrap',
  lineHeight: '1.2',
} as CSSProperties;

export default function Muscular() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
  const [language] = useLanguageContext();

  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const shouldShowIntroAnimation =
    animatedPath === `${Paths.BodySystems}/${Paths.Muscular}`;

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
    onRest: () => setTimeout(() => setAnimatedPath(''), 0),
  }));

  const location = useLocation();

  if (location.search === '?play=true') {
    return <Navigate to={Paths.Game + '?play=true'} />;
  }

  // if we have an animated path, we need to show the slide in animation
  if (animatedPath === `${Paths.BodySystems}/${Paths.Muscular}`) {
    // we reset the animation
  } else if (animatedPath) {
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
        src='images/Muscular/muscularBody.png'
        style={{
          top: 343,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        src={Labels}
        style={{
          top: 202,
          position: 'absolute',
          left: 543,
          transform: 'translate(-50%, 0)',
          ...overlayStyle,
        }}
      />
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...muscularLabelStyle,
          top: 440,
          padding: '5px 12px 7px',
          left: 33,
        }}
      >
        {t('muscular.scene.latissimus')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 615,
        }}
      >
        {t('muscular.scene.pectorals')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...muscularLabelStyle,
          top: 730,
          whiteSpace: 'pre-wrap',
          padding: '5px 12px 7px',
        }}
      >
        {t('muscular.scene.abs')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 886,
        }}
      >
        {t('muscular.scene.quadriceps')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1176,
          left: language === 'es' ? 16 : columnLabelStyleLeft.left,
        }}
      >
        {t('muscular.scene.hamstrings')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 271,
        }}
      >
        {t('muscular.scene.deltoids')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 355,
        }}
      >
        {t('muscular.scene.biceps')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 456,
        }}
      >
        {t('muscular.scene.triceps')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          ...muscularLabelStyle,
          top: 737,
          right: language === 'es' ? 50 : columnLabelStyleRight.right,
        }}
      >
        {t('muscular.scene.gluteus')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 850,
        }}
      >
        {t('muscular.scene.calves')}
      </animated.span>
    </>
  );
}
