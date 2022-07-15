import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import { CSSProperties } from 'react';

const bodyLeft = 540;

const digestiveLabelStyle = {
  padding: '5px 15px 7px',
  whiteSpace: 'pre-wrap',
  lineHeight: '1.2',
} as CSSProperties

export default function Digestive() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const shouldShowIntroAnimation = animatedPath === `${Paths.BodySystems}/${Paths.Digestive}`;
  const [overlayStyle, overlayApi] = useSpring(() => ({
    from: { opacity: shouldShowIntroAnimation ? 0 : 1 },
    to: { opacity: 1 },
    delay: 500,
    config: {
      duration: 500,
    }
  }));
  const [bodyStyle, bodyApi] = useSpring(() => ({
    from: { left: shouldShowIntroAnimation ? -300 : bodyLeft },
    to: { left: bodyLeft },
    config: {
      duration: 500,
    }
  }));
  const location = useLocation();

  if (location.search === '?play=true') {
    navigate(`/${Paths.BodySystems}/${Paths.Digestive}?play=true`);
  }

  // if we have an animated path, we need to show the slide in animation
  if (animatedPath === `${Paths.BodySystems}/${Paths.Digestive}`) {
    // we reset the animation
    setAnimatedPath('');
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
        alt='sensory'
        src='images/Digestive/digestiveBody.png'
        style={{
          top: 343,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        alt='sensory'
        src='images/Digestive/digestiveLabels.png'
        style={{
          top: 518,
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
          ...digestiveLabelStyle,
          top: 576,
          padding: '5px 12px 7px',
        }}
      >
        {t('digestive.scene.esophagus')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 653,
        }}
      >
        {t('digestive.scene.liver')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...digestiveLabelStyle,
          top: 743,
          whiteSpace: 'pre-wrap',
          padding: '5px 12px 7px',
        }}
      >
        {t('digestive.scene.gallbladder')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...digestiveLabelStyle,
          top: 823,
        }}
      >
        {t('digestive.scene.largeIntestine')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 934,
        }}
      >
        {t('digestive.scene.appendix')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1014,
        }}
      >
        {t('digestive.scene.rectum')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 521,
        }}
      >
        {t('digestive.scene.mouth')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 604,
        }}
      >
        {t('digestive.scene.stomach')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          ...digestiveLabelStyle,
          top: 726,
        }}
      >
        {t('digestive.scene.smallIntestine')}
      </animated.span>
      <animated.span
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 862,
        }}
      >
        {t('digestive.scene.anus')}
      </animated.span>
    </>
  );
}
