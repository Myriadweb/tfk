import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import HearingHighlight from './SensoryAssets/hearingVestibularHighlight.png';
import ProprioceptionHighlight from './SensoryAssets/proprioceptionHighlight.png';
import SightHighlight from './SensoryAssets/sightHighlight.png';
import SmellHighlight from './SensoryAssets/smellHighlight.png';
import TasteHighlight from './SensoryAssets/tasteHighlight.png';
import TouchHighlight from './SensoryAssets/touchHighlight.png';
import AnimatedLabel from './AnimatedLabel';

const labelStyle = {
  background: '#30619C',
  border: '#FFF 3px solid',
  fontSize: 30,
  letterSpacing: 1.49,
  padding: '10px 15px',
  color: '#FFF',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  fontWeight: 'bold',
} as React.CSSProperties;

const bodyLeft = 540;

export default function Sensory() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();

  const [highlighted, setHighlighted] = useState('');

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
    onRest: () => setTimeout(() => setAnimatedPath(''), 0),
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
      {/* This is the highlight. We put it here and then play with its opacity based on the value of higlighted */}
      <img
        src={HearingHighlight}
        style={{
          top: 453,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['hearing', 'vestibular'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={ProprioceptionHighlight}
        style={{
          top: 348,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['proprioception'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={SightHighlight}
        style={{
          top: 460,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['sight'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={SmellHighlight}
        style={{
          top: 470,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['smell'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={TasteHighlight}
        style={{
          top: 525,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['taste'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={TouchHighlight}
        style={{
          top: 800,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['touch'].includes(highlighted) ? 1 : 0,
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
      {/* This needs to be done for all spans */}
      <AnimatedLabel
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 388,
          left: 901,
        }}
        value='hearing'
        setterFn={setHighlighted}
      >
        {t('sensory.scene.hearing')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 493,
          left: 212,
        }}
        value='proprioception'
        setterFn={setHighlighted}
      >
        {t('sensory.scene.proprioception')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 744,
          left: 172,
        }}
        value='sight'
        setterFn={setHighlighted}
      >
        {t('sensory.scene.sight')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 620,
          left: 922,
        }}
        value='vestibular'
        setterFn={setHighlighted}
      >
        {t('sensory.scene.vestibular')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 983,
          left: 171,
        }}
        value='taste'
        setterFn={setHighlighted}
      >
        {t('sensory.scene.taste')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 860,
          left: 901,
        }}
        value='smell'
        setterFn={setHighlighted}
      >
        {t('sensory.scene.smell')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: 1105,
          left: 782,
        }}
        value='touch'
        setterFn={setHighlighted}
      >
        {t('sensory.scene.touch')}
      </AnimatedLabel>
    </>
  );
}
