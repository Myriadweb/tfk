import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import SkeletalGame from './SkeletalGame';
import AnimatedLabel from './AnimatedLabel';
import { useState } from 'react';
import SkullHighlight from './SkeletalAssets/skullHighlight.png';
import MandibleHighlight from './SkeletalAssets/mandibleHighlight.png';
import ClaviclesHighlight from './SkeletalAssets/claviclesHighlight.png';
import CarpalsHighlight from './SkeletalAssets/carpalsHighlight.png';
import FemurHighlight from './SkeletalAssets/femurHighlight.png';
import FibulaHighlight from './SkeletalAssets/fibulaHighlight.png';
import HumerusHighlight from './SkeletalAssets/humerusHighlight.png';
import MetacarpalsHighlight from './SkeletalAssets/metacarpalsHighlight.png';
import MetatarsalsHighlight from './SkeletalAssets/metatarsalsHighlight.png';
import PatellaHighlight from './SkeletalAssets/patellaHighlight.png';
import PelvisHighlight from './SkeletalAssets/pelvisHighlight.png';
import RadiusHighlight from './SkeletalAssets/radiusHighlight.png';
import RibcageHighlight from './SkeletalAssets/ribcageHighlight.png';
import ScapulaHighlight from './SkeletalAssets/scapulaHighlight.png';
import SternumHighlight from './SkeletalAssets/sternumHighlight.png';
import TibiaHighlight from './SkeletalAssets/tibiaHighlight.png';
import UlnaHighlight from './SkeletalAssets/ulnaHighlight.png';
import VertebraeHighlight from './SkeletalAssets/vertebraeHighlight.png';

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

  const [highlighted, setHighlighted] = useState('');

  console.debug(highlighted);

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
      <img
        src={SkullHighlight}
        style={{
          top: 330,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['skull'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={MandibleHighlight}
        style={{
          top: 330,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['mandible'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={ClaviclesHighlight}
        style={{
          top: 330,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['clavicle'].includes(highlighted) ? 1 : 0,
        }}
      />
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 264,
        }}
        value='skull'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.skull')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 350,
        }}
        value='mandible'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.mandible')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 429,
        }}
        value='clavicle'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.clavicle')}
      </AnimatedLabel>
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
