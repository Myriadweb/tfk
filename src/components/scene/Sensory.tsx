import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

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
  const [animatedPath, setAnimatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const [overlayStyle, overlayApi] = useSpring(() => ({ opacity: 1 }));
  const [bodyStyle, bodyApi] = useSpring(() => ({ left: bodyLeft }))

  // if we have an animated path, we need to show the slide in animation
  if (animatedPath === 'bodySystems/sensory') {
    overlayApi.start({
      to: [{ opacity: 1 }],
      from: { opacity: 0 },
      delay: 1000,
    });
    bodyApi.start({
      // @ts-ignore
      to: { left: bodyLeft },
      from: { left: -300 },
      config: {
        duration: 500
      },
      onRest: () => navigate('/' + animatedPath),
    })
    // we reset the animation
    setAnimatedPath('');
  } else if (animatedPath) {
    // if we have a different animatedPath, we show the slide out animation
    overlayApi.start({
      to: [{ opacity: 0 }],
      from: { opacity: 1 },
      config: {
        duration: 500,
      }
    });
    bodyApi.start({
      // @ts-ignore
      from: { left: bodyLeft },
      to: { left: -300 },
      delay: 1000,
      onRest: () => navigate('/' + animatedPath),
    })
    // then we navigate to the path
  }

  return (
    <>
      <animated.img
        alt='sensory'
        src='/images/Sensory/sensory-body.png'
        style={{
          top: 343,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        alt='sensory'
        src='/images/Sensory/sensory-labels.png'
        style={{
          top: 224,
          position: 'absolute',
          left: 540,
          transform: 'translate(-50%, 0)',
          ...overlayStyle,
        }}
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
