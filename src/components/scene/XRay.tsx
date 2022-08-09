import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import ProceduresTextBox from './ProceduresTextBox';
import { CSSProperties } from 'react';
import {
  Characters,
  childWidth,
  useCharacterContext,
} from '../../state/character';
import { ReactComponent as XrayMachine } from './XRayAssets/XRayMachine.svg';

const bodyLeft = 540;

export default function XRay() {
  const [animatedPath] = useAnimateContext();
  const [selectedChild] = useCharacterContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const shouldShowIntroAnimation =
    animatedPath === `${Paths.Procedures}/${Paths.XRay}`;
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
    navigate(`/${Paths.Procedures}/${Paths.XRay}?play=true`);
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
  }

  const Child = Characters.smock[selectedChild];
  const width = childWidth[selectedChild];

  return (
    <>
      <animated.div
        style={{
          top: 275,
          position: 'absolute',
          transform: `translate(-${width / 2}px, 0)`,
          ...bodyStyle,
        }}
      >
        <Child />
      </animated.div>
      <animated.div
        style={{
          top: 0,
          position: 'absolute',
          left: 95,
          ...overlayStyle,
        }}
      >
        <XrayMachine />
      </animated.div>
      <ProceduresTextBox
        text={t('xRay.scene.text')}
        animatedStyle={overlayStyle as unknown as CSSProperties}
        label={t('xRay.scene.label')}
        buttonText={t('xRay.scene.buttonText')}
        onClick={() =>
          navigate(`/${Paths.Procedures}/${Paths.XRay}/${Paths.Game}`)
        }
      />
    </>
  );
}
