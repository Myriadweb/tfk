import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import { CSSProperties, useState } from 'react';
import Labels from './MuscularAssets/labels.svg';
import { useLanguageContext } from '../../state/language';
import AbdominalMusclesHighlight from './MuscularAssets/abdominalMusclesHighlight.png';
import BicepsHighlight from './MuscularAssets/bicepsHighlight.png';
import CalvesHighlight from './MuscularAssets/calvesHighlight.png';
import DeltoidHighlight from './MuscularAssets/deltoidHighlight.png';
import GlueteusMaximusHighlight from './MuscularAssets/glueteusMaximusHighlight.png';
import HamstringsHighlight from './MuscularAssets/hamstringsHighlight.png';
import LattisimusDosiHighlight from './MuscularAssets/lattisimusDosiHighlight.png';
import PectoralsHighlight from './MuscularAssets/pectoralsHighlight.png';
import QuadricepsHighlight from './MuscularAssets/quadricepsHighlight.png';
import TricepsHighlight from './MuscularAssets/tricepsHighlight.png';
import AnimatedLabel from './AnimatedLabel';
import {screenScale} from "../../utils/scaling";

const bodyLeft = screenScale.x(540);

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
  const [highlighted, setHighlighted] = useState('');

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
    <div className='scene-container'>
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
          left: screenScale.x(543),
          transform: 'translate(-50%, 0)',
          ...overlayStyle,
        }}
      />
      <img
        src={AbdominalMusclesHighlight}
        style={{
          top: 725,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['abs'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={BicepsHighlight}
        style={{
          top: 671,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['biceps'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={CalvesHighlight}
        style={{
          top: 1025,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['calves'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={DeltoidHighlight}
        style={{
          top: 625,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['deltoids'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={GlueteusMaximusHighlight}
        style={{
          top: 625,
          right: screenScale.y(85),
          position: 'absolute',
          opacity: ['gluteus'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={HamstringsHighlight}
        style={{
          top: 1095,
          left: screenScale.avg(117),
          position: 'absolute',
          opacity: ['hamstrings'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={LattisimusDosiHighlight}
        style={{
          top: 310,
          left: screenScale.avg(155),
          position: 'absolute',
          opacity: ['latissimus'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={PectoralsHighlight}
        style={{
          top: 625,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['pectorals'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={QuadricepsHighlight}
        style={{
          top: 875,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['quadriceps'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={TricepsHighlight}
        style={{
          top: 675,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['triceps'].includes(highlighted) ? 1 : 0,
        }}
      />
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...muscularLabelStyle,
          top: 440,
          padding: '5px 12px 7px',
          left: 33,
        }}
        value='latissimus'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.latissimus')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 615,
        }}
        value='pectorals'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.pectorals')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...muscularLabelStyle,
          top: 730,
          whiteSpace: 'pre-wrap',
          padding: '5px 12px 7px',
        }}
        value='abs'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.abs')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 886,
        }}
        value='quadriceps'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.quadriceps')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1176,
          left: language === 'es' ? 16 : columnLabelStyleLeft.left,
        }}
        value='hamstrings'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.hamstrings')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 271,
        }}
        value='deltoids'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.deltoids')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 355,
        }}
        value='biceps'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.biceps')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 456,
        }}
        value='triceps'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.triceps')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          ...muscularLabelStyle,
          top: 737,
          right: language === 'es' ? 50 : columnLabelStyleRight.right,
        }}
        value='gluteus'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.gluteus')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 850,
        }}
        value='calves'
        setterFn={setHighlighted}
      >
        {t('muscular.scene.calves')}
      </AnimatedLabel>
    </div>
  );
}
