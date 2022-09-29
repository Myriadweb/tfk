import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import NervousGame from './NervousAssets/nervousMain.svg';
import { useLanguageContext } from '../../state/language';
import AnimatedLabel from "./AnimatedLabel";
import {useState} from "react";
import BrainHighlight from './NervousAssets/brainHighlight.png';
import BrainStemHighlight from './NervousAssets/brainStemHighlight.png';
import CerebellumHighlight from './NervousAssets/cerebellumHighlight.png';
import NervesHighlight from './NervousAssets/nervesHighlight.png';
import SpinalChordHighlight from './NervousAssets/spinalChordHighlight.png';

const bodyLeft = 540;

export default function Nervous() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
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
      <img
        src={BrainHighlight}
        style={{
          top: 345,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['brain'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={BrainStemHighlight}
        style={{
          top: 450,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['brainstem'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={CerebellumHighlight}
        style={{
          top: 457,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['cerebellum'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={NervesHighlight}
        style={{
          top: 433,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['nerves'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={SpinalChordHighlight}
        style={{
          top: 530,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['spinal'].includes(highlighted) ? 1 : 0,
        }}
      />
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 370,
        }}
        value='brain'
        setterFn={setHighlighted}
      >
        {t('nervous.scene.brain')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 456,
        }}
        value='cerebellum'
        setterFn={setHighlighted}
      >
        {t('nervous.scene.cerebellum')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 692,
        }}
        value='nerves'
        setterFn={setHighlighted}
      >
        {t('nervous.scene.nerves')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: language === 'es' ? 449 : 474,
        }}
        value='brainstem'
        setterFn={setHighlighted}
      >
        {t('nervous.scene.brainStem')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 578,
        }}
        value='spinal'
        setterFn={setHighlighted}
      >
        {t('nervous.scene.spinalCord')}
      </AnimatedLabel>
    </>
  );
}
