import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import ProceduresTextBox from './ProceduresTextBox';
import { CSSProperties } from 'react';

const bodyLeft = 458;

export default function Wellness() {
  const [animatedPath, setAnimatedPath] = useAnimateContext();
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const shouldShowIntroAnimation =
    animatedPath === `${Paths.Procedures}/${Paths.Wellness}`;
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
    navigate(`/${Paths.Procedures}/${Paths.Wellness}?play=true`);
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
        src='images/Wellness/wellnessChild.png'
        style={{
          top: 275,
          left: 458,
          position: 'absolute',
          ...bodyStyle,
        }}
      />
      <animated.img
        src='images/Wellness/wellnessMachine.png'
        style={{
          top: 470,
          left: 245,
          position: 'absolute',
          ...overlayStyle,
        }}
      />
      <ProceduresTextBox
        text={t('wellness.scene.text')}
        animatedStyle={overlayStyle as unknown as CSSProperties}
        label={t('wellness.scene.label')}
        buttonText={t('wellness.scene.buttonText')}
        onClick={() =>
          navigate(`/${Paths.Procedures}/${Paths.Wellness}/${Paths.Game}`)
        }
      />
    </>
  );
}
