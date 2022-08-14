import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import ProceduresTextBox from './ProceduresTextBox';
import { CSSProperties } from 'react';

const bodyLeft = 461;

export default function Iv() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const shouldShowIntroAnimation =
    animatedPath === `${Paths.Procedures}/${Paths.Iv}`;
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
    navigate(`/${Paths.Procedures}/${Paths.Iv}?play=true`);
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
        src='images/Iv/ivChild.png'
        style={{
          top: 275,
          left: 461,
          position: 'absolute',
          ...bodyStyle,
        }}
      />
      <animated.img
        src='images/Iv/ivMachine.png'
        style={{
          top: 288,
          position: 'absolute',
          left: 225,
          ...overlayStyle,
        }}
      />
      <ProceduresTextBox
        text={t('iv.scene.text')}
        animatedStyle={overlayStyle as unknown as CSSProperties}
        label={t('iv.scene.label')}
        buttonText={t('iv.scene.buttonText')}
      />
    </>
  );
}
