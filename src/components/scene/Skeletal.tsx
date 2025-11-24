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
import TarsalsHighlight from './SkeletalAssets/tarsalsHighlight.png';
import TibiaHighlight from './SkeletalAssets/tibiaHighlight.png';
import UlnaHighlight from './SkeletalAssets/ulnaHighlight.png';
import VertebraeHighlight from './SkeletalAssets/vertebraeHighlight.png';
import { useGameContext } from '../../state/game';
import {screenScale} from "../../utils/scaling";
import { useLocationPath } from '../../hooks';

const bodyLeft = screenScale.x(540);

export default function Skeletal() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
  const [{ value }, setGameState] = useGameContext();
  const { t } = useTranslation('translation');
  const [uid, setUid] = useState(Date.now());
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
    onRest: () => setTimeout(() => setAnimatedPath(''), 0),
  }));

  const navigate = useNavigate();
  const location = useLocation();
  const buildPath = useLocationPath();
  const isGamePath = buildPath(
    `${Paths.BodySystems}/${Paths.Skeletal}/${Paths.Game}`,
    true
  );


  const isGame =
    location.pathname === isGamePath;

  const [highlighted, setHighlighted] = useState('');

  React.useEffect(() => {
    // Handle game reset
    if (value === 'reset') {
      setGameState({ step: 0 });
      setUid(Date.now());
    }

    // Reset overlay when coming back from game
    if (!isGame && !animatedPath) {
      overlayApi.start({
        to: { opacity: 1 },
        config: {
          duration: 500,
        },
      });
    }
  }, [value, isGame, animatedPath, overlayApi, setGameState]);



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
  }

  if (!isGame && location.search === '?play=true') {
    console.log('navigating to game');
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
    return <SkeletalGame key={uid} />;
  }

  return (
    <div className='skeletal-scene-container'>
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
        src='images/Skeletal/skeletalLabelsNew.png'
        style={{
          top: 263,
          position: 'absolute',
          left: screenScale.x(540),
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
          top: 500,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['mandible'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={ClaviclesHighlight}
        style={{
          top: 610,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['clavicle'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={ScapulaHighlight}
        style={{
          top: 615,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['scapula'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={RibcageHighlight}
        style={{
          top: 600,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['ribs'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={PelvisHighlight}
        style={{
          top: 805,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['pelvis'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={CarpalsHighlight}
        style={{
          top: 810,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['wrist'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={MetacarpalsHighlight}
        style={{
          top: 820,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['hand'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={FemurHighlight}
        style={{
          top: 850,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['femur'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={TibiaHighlight}
        style={{
          top: 1000,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['tibia'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={TarsalsHighlight}
        style={{
          top: 1155,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['ankles'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={MetatarsalsHighlight}
        style={{
          top: 1160,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['feet'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={SternumHighlight}
        style={{
          top: 610,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['sternum'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={VertebraeHighlight}
        style={{
          top: 600,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['vertebrae'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={HumerusHighlight}
        style={{
          top: 625,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['humerus'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={RadiusHighlight}
        style={{
          top: 735,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['radius'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={UlnaHighlight}
        style={{
          top: 745,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['ulna'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={PatellaHighlight}
        style={{
          top: 985,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['patella'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={FibulaHighlight}
        style={{
          top: 1010,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['fibula'].includes(highlighted) ? 1 : 0,
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
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 510,
        }}
        value='scapula'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.scapula')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 591,
        }}
        value='ribs'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.ribs')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 683,
        }}
        value='pelvis'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.pelvis')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 760,
        }}
        value='wrist'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.wrist')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 842,
        }}
        value='hand'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.hand')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 929,
        }}
        value='femur'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.femur')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1014,
        }}
        value='tibia'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.tibia')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1095,
        }}
        value='ankles'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.ankles')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1182,
        }}
        value='feet'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.feet')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 363,
        }}
        value='sternum'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.sternum')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 447,
        }}
        value='vertebrae'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.vertebrae')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 532,
        }}
        value='humerus'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.humerus')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 612,
        }}
        value='radius'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.radius')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 695,
        }}
        value='ulna'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.ulna')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 785,
        }}
        value='patella'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.patella')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 860,
        }}
        value='fibula'
        setterFn={setHighlighted}
      >
        {t('skeletal.scene.fibula')}
      </AnimatedLabel>
    </div>
  );
}
