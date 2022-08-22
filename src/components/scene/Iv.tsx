import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import ProceduresTextBox from './SharedComponents/ProceduresTextBox';
import { CSSProperties } from 'react';
import { Characters } from './ChildrenAssets/childrenAssets';
import InitialPromptIV from './IvAssets/initialPromptIV.svg';

const bodyLeft = 461;

export default function Iv() {
  const [animatedPath] = useAnimateContext();
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

  const Child = Characters.default[0];

  return (
    <>
      <animated.div
        style={{
          top: 275,
          left: 461,
          position: 'absolute',
          ...bodyStyle,
        }}
      >
        <Child />
      </animated.div>
      <animated.img
        src={InitialPromptIV}
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
        onClick={() =>
          navigate(`/${Paths.Procedures}/${Paths.Iv}/${Paths.Game}`)
        }
      />
    </>
  );
}
