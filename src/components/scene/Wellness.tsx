import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimateContext } from '../../state/animate';
import { animated, useSpring } from 'react-spring';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../types/Paths';
import ProceduresTextBox from './SharedComponents/ProceduresTextBox';
import { CSSProperties } from 'react';
import { Characters } from './ChildrenAssets/childrenAssets';
import WellnessMachine from './WellnessAssets/vitalsMachine.png';
import { useLocationPath } from '../../hooks';

const bodyLeft = 458;

export default function Wellness() {
  const [animatedPath] = useAnimateContext();
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
  const buildPath = useLocationPath();

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

  const Child = Characters.default[3];

  return (
    <>
      <div className='element-container'>
        <animated.div
          style={{
            top: 275,
            left: 458,
            position: 'absolute',
            ...bodyStyle,
          }}
        >
          <Child />
        </animated.div>
        <animated.img
          src={WellnessMachine}
          style={{
            top: 470,
            left: 243,
            position: 'absolute',
            ...overlayStyle,
          }}
        />
      </div>
      <ProceduresTextBox
        text={t('wellness.scene.text')}
        animatedStyle={overlayStyle as unknown as CSSProperties}
        label={t('wellness.scene.label')}
        buttonText={t('wellness.scene.buttonText')}
        onClick={() =>
          navigate(buildPath(`${Paths.Procedures}/${Paths.Wellness}/${Paths.Game}`))
        }
      />
    </>
  );
}
