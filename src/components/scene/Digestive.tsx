import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import { columnLabelStyleLeft, columnLabelStyleRight } from './common';
import { CSSProperties, useState } from 'react';
import AnimatedLabel from './AnimatedLabel';
import GallbladderHighlight from './DigestiveAssets/gallbladderHighlight.png';
import LargeIntestineHighlight from './DigestiveAssets/largeIntestineHighlight.png';
import LiverHighlight from './DigestiveAssets/liverHighlight.png';
import SmallIntestineHighlight from './DigestiveAssets/smallIntestineHighlight.png';
import StomachHighlight from './DigestiveAssets/stomachHighlight.png';
import AnusHighlight from './DigestiveAssets/anusHighlight.png';
import EsophagusHighlight from './DigestiveAssets/esophagusHighlight.png';
import MouthHighlight from './DigestiveAssets/mouthHighlight.png';
import RectumHighlight from './DigestiveAssets/rectumHighlight.png';
import AppendixHighlight from './DigestiveAssets/appendixHighlight.png';

const bodyLeft = 540;

const digestiveLabelStyle = {
  padding: '8px 17px 10px',
  whiteSpace: 'pre-wrap',
} as CSSProperties;

export default function Digestive() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const shouldShowIntroAnimation =
    animatedPath === `${Paths.BodySystems}/${Paths.Digestive}`;
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
        src='images/Digestive/digestiveBody.png'
        style={{
          top: 343,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          ...bodyStyle,
        }}
      />
      <animated.img
        src='images/Digestive/digestiveLabels.png'
        style={{
          top: 518,
          position: 'absolute',
          left: 540,
          transform: 'translate(-50%, 0)',
          ...overlayStyle,
        }}
      />
      <img
        src={GallbladderHighlight}
        style={{
          top: 743,
          left: 470,
          position: 'absolute',
          opacity: ['gallbladder'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={LargeIntestineHighlight}
        style={{
          top: 777,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['largeIntestine'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={LiverHighlight}
        style={{
          top: 678,
          position: 'absolute',
          transform: 'translate(-80%, 0)',
          opacity: ['liver'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={SmallIntestineHighlight}
        style={{
          top: 803,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['smallIntestine'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={StomachHighlight}
        style={{
          top: 672,
          position: 'absolute',
          transform: 'translate(-25%, 0)',
          opacity: ['stomach'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={AnusHighlight}
        style={{
          top: 898,
          left: 538,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['anus'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={RectumHighlight}
        style={{
          top: 872,
          left: 538,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['rectum'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={AppendixHighlight}
        style={{
          top: 877,
          left: 488,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['appendix'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={EsophagusHighlight}
        style={{
          top: 578,
          left: 542,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['esophagus'].includes(highlighted) ? 1 : 0,
        }}
      />
      <img
        src={MouthHighlight}
        style={{
          top: 536,
          left: 543,
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          opacity: ['mouth'].includes(highlighted) ? 1 : 0,
        }}
      />
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...digestiveLabelStyle,
          top: 576,
        }}
        value='esophagus'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.esophagus')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 653,
        }}
        value='liver'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.liver')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...digestiveLabelStyle,
          top: 743,
          whiteSpace: 'pre-wrap',
        }}
        value='gallbladder'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.gallbladder')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          ...digestiveLabelStyle,
          top: 823,
          lineHeight: '1.2',
        }}
        value='largeIntestine'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.largeIntestine')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 934,
        }}
        value='appendix'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.appendix')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleLeft,
          ...overlayStyle,
          top: 1014,
        }}
        value='rectum'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.rectum')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 521,
        }}
        value='mouth'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.mouth')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 604,
        }}
        value='stomach'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.stomach')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          ...digestiveLabelStyle,
          top: 726,
          lineHeight: '1.2',
        }}
        value='smallIntestine'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.smallIntestine')}
      </AnimatedLabel>
      <AnimatedLabel
        style={{
          ...columnLabelStyleRight,
          ...overlayStyle,
          top: 862,
        }}
        value='anus'
        setterFn={setHighlighted}
      >
        {t('digestive.scene.anus')}
      </AnimatedLabel>
    </>
  );
}
