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
import {screenScale} from "../../utils/scaling";

const labelStyle = {
  background: '#30619C',
  border: '#FFF 3px solid',
  fontSize: screenScale.y(30),
  letterSpacing: 1.49,
  padding: '10px 15px',
  color: '#FFF',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  fontWeight: 'bold',
} as React.CSSProperties;

const bodyLeft = screenScale.x(540);

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
          top: screenScale.y(343),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          height: screenScale.y(903),
          ...bodyStyle,
        }}
      />
      {/* This is the highlight. We put it here and then play with its opacity based on the value of higlighted */}
      <img
        src={HearingHighlight}
        style={{
          top: screenScale.y(453),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['hearing', 'vestibular'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={ProprioceptionHighlight}
        style={{
          top: screenScale.y(348),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['proprioception'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={SightHighlight}
        style={{
          top: screenScale.y(460),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['sight'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={SmellHighlight}
        style={{
          top: screenScale.y(470),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['smell'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={TasteHighlight}
        style={{
          top: screenScale.y(525),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['taste'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={TouchHighlight}
        style={{
          top: screenScale.y(800),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['touch'].includes(highlighted) ? 1 : 0,
        }}
      />
      <animated.img
        src='images/Sensory/sensoryLabels.png'
        style={{
          top: screenScale.y(224),
          position: 'absolute',
          left: bodyLeft,
          transform: 'translate(-50%, 0)',
          height: screenScale.y(911),
          ...overlayStyle,
        }}
      />
      {/* This needs to be done for all spans */}
      <AnimatedLabel
        style={{
          ...labelStyle,
          ...overlayStyle,
          top: screenScale.y(388),
          left: screenScale.x(901),
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
          top: screenScale.y(493),
          left: screenScale.x(212),
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
          top: screenScale.y(744),
          left: screenScale.x(172),
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
          top: screenScale.y(620),
          left: screenScale.x(922),
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
          top: screenScale.y(983),
          left: screenScale.x(171),
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
          top: screenScale.y(860),
          left: screenScale.x(901),
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
          top: screenScale.y(1105),
          left: screenScale.x(782),
        }}
        value='touch'
        setterFn={setHighlighted}
      >
        {t('sensory.scene.touch')}
      </AnimatedLabel>
    </>
  );
}
