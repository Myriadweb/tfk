import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import HeartHighlight from './CardiovascularAssets/heartHighlight.png';
import ArteriesHighlight from './CardiovascularAssets/arteriesHighlight.png';
import LungsHighlight from './CardiovascularAssets/lungsHighlight.png';
import VeinsHighlight from './CardiovascularAssets/veinsHighlight.png';
import { useState } from 'react';
import AnimatedLabel from './AnimatedLabel';
import {screenScale} from "../../utils/scaling";

const bodyLeft = screenScale.x(540);

export default function Cardiovascular() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
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
    from: { left: shouldShowIntroAnimation ? screenScale.x(-300) : bodyLeft },
    to: { left: bodyLeft },
    config: {
      duration: 500,
    },
    onRest: () => setTimeout(() => setAnimatedPath(''), 0),
  }));
  const location = useLocation();
  const [highlighted, setHighlighted] = useState('');

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
      to: { left: screenScale.x(-300) },
      delay: 300,
      onRest: () => navigate('/' + animatedPath),
    });
  }

  return (
    <>
      <animated.img
        src='images/Cardiovascular/cardiovascularBody.png'
        style={{
          top: screenScale.y(343),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        src='images/Cardiovascular/cardiovascularLabels.png'
        style={{
          top: screenScale.y(589),
          position: 'absolute',
          left: screenScale.x(540),
          transform: 'translate(-50%, 0)',
          ...overlayStyle,
        }}
      />
      <img
        src={LungsHighlight}
        style={{
          top: screenScale.y(635),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['lungs'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={ArteriesHighlight}
        style={{
          top: screenScale.y(380),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['arteries'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={HeartHighlight}
        style={{
          top: screenScale.y(647),
          position: 'absolute',
          transform: 'translate(-30%, 0)',
          opacity: ['heart'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={VeinsHighlight}
        style={{
          top: screenScale.y(570),
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['veins'].includes(highlighted) ? 1 : 0,
        }}
      />
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: screenScale.y(594),
        }}
        value='lungs'
        setterFn={setHighlighted}
      >
        {t('cardiovascular.scene.lungs')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: screenScale.y(710),
        }}
        value='arteries'
        setterFn={setHighlighted}
      >
        {t('cardiovascular.scene.arteries')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: screenScale.y(589),
        }}
        value='heart'
        setterFn={setHighlighted}
      >
        {t('cardiovascular.scene.heart')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: screenScale.y(690),
        }}
        value='veins'
        setterFn={setHighlighted}
      >
        {t('cardiovascular.scene.veins')}
      </AnimatedLabel>
    </>
  );
}
