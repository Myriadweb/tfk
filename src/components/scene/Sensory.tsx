import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import Hearing from './SensoryAssets/Teammates_Systems_Sensory_Assets_Hearing.svg';
import HearingHighlight from './SensoryAssets/Teammates_Systems_Sensory_Assets_Sensory_Hearing&Vestibular_Highlight.png';
import HearingLabel from './SensoryAssets/Teammates_Systems_Sensory_Assets_Callouts_Hearing.svg';
const labelStyle = {
  background: '#30619C',
  border: '#FFF 3px solid',
  fontSize: 30,
  letterSpacing: 1.49,
  padding: '10px 15px',
  color: '#FFF',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  fontFamily: 'LemonMilk',
  fontWeight: 'bold',
} as React.CSSProperties;

const bodyLeft = 540;

export default function Sensory() {
  const [animatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const shouldShowIntroAnimation =
    animatedPath === `${Paths.BodySystems}/${Paths.Sensory}`;

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
    return (
      <Navigate
        to={`/${Paths.BodySystems}/${Paths.Sensory}/${Paths.Hearing}?play=true`}
      />
    );
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
        src='images/Sensory/sensoryBody.png'
        style={{
          top: 343,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        src='images/Sensory/sensoryLabels.png'
        style={{
          top: 224,
          position: 'absolute',
          left: 540,
          transform: 'translate(-50%, 0)',
          ...overlayStyle,
        }}
      />
      <animated.img
        src={HearingLabel}
        style={{
          top: 221,
          position: 'absolute',
          right: 97,
        }}
        id='hearingLabel'
      />
      <animated.img
        src={Hearing}
        style={{
          top: 465,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        src={HearingHighlight}
        style={{
          top: 465,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: 0,
          ...bodyStyle,
        }}
        id='hearingHighlight'
      />
      <animated.span
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 388,
          left: 901,
        }}
      >
        {t('sensory.scene.hearing')}
      </animated.span>
      <animated.span
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 493,
          left: 212,
        }}
      >
        {t('sensory.scene.proprioception')}
      </animated.span>
      <animated.span
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 744,
          left: 172,
        }}
      >
        {t('sensory.scene.sight')}
      </animated.span>
      <animated.span
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 620,
          left: 922,
        }}
      >
        {t('sensory.scene.vestibular')}
      </animated.span>
      <animated.span
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 983,
          left: 171,
        }}
      >
        {t('sensory.scene.taste')}
      </animated.span>
      <animated.span
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 860,
          left: 901,
        }}
      >
        {t('sensory.scene.smell')}
      </animated.span>
      <animated.span
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 1105,
          left: 782,
        }}
      >
        {t('sensory.scene.touch')}
      </animated.span>
    </>
  );
}
