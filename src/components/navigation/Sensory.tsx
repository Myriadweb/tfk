import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import Hearing from './SensoryAssets/Hearing.svg';
import Proprioception from './SensoryAssets/Proprioception.svg';
import Sight from './SensoryAssets/Sight.svg';
import Smell from './SensoryAssets/Smell.svg';
import Taste from './SensoryAssets/Taste.svg';
import Vestibular from './SensoryAssets/Vestibular.svg';
import Touch from './SensoryAssets/Touch.svg';

import NavigationButton from './UIComponents/NavigationButton';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../../state/game';
import playSound from '../../sound';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';
import { useState } from 'react';
import { animated } from 'react-spring';

type Props = {
  path: Paths;
  prefix: Paths;
};

const VALUES = {
  badSmell: true,
  badSight: true,
  badSound: true,
  badTouch: true,
  badVestibular: true,
};

const NavigationPrefix = `${Paths.BodySystems}/${Paths.Sensory}/`;

function Sensory({ path, prefix }: Props) {
  const t = useNavBarTranslation(prefix);
  const [{ value }, setGameState] = useGameContext();
  const [showVestibular, setShowVestibular] = useState(false);

  const navigate = useNavigate();

  let hasValue;

  if (value === 'badVestibular' && !showVestibular) {
    setTimeout(() => setShowVestibular(true), 2000);
  } else {
    hasValue = VALUES[value];
  }

  const selectPathText =
    path === Paths.Vestibular ? 'selectPathVestibular' : 'selectPath';

  return (
    <>
      <animated.div>
        <div className='nav-top'>
          {hasValue && <div className='header-text'>{t(value + '.title')}</div>}
          {!hasValue && <div className='body-text'>{t(selectPathText)}</div>}
        </div>
        <div className='nav-middle'>
          {!hasValue && (
            <div className='nav-items-container'>
              <NavigationButton
                image={Hearing}
                size={path === Paths.Hearing ? 'large' : 'small'}
                onClick={() =>
                  navigate(NavigationPrefix + Paths.Hearing + '?play=true')
                }
                text={path === Paths.Hearing ? t('hearing') : ''}
              />
              <NavigationButton
                image={Taste}
                size={path === Paths.Taste ? 'large' : 'small'}
                onClick={() =>
                  navigate(NavigationPrefix + Paths.Taste + '?play=true')
                }
                text={path === Paths.Taste ? t('taste') : ''}
              />
              <NavigationButton
                image={Sight}
                size={path === Paths.Sight ? 'large' : 'small'}
                onClick={() =>
                  navigate(NavigationPrefix + Paths.Sight + '?play=true')
                }
                text={path === Paths.Sight ? t('sight') : ''}
              />
              <NavigationButton
                image={Smell}
                size={path === Paths.Smell ? 'large' : 'small'}
                onClick={() =>
                  navigate(NavigationPrefix + Paths.Smell + '?play=true')
                }
                text={path === Paths.Smell ? t('smell') : ''}
              />
              <NavigationButton
                image={Proprioception}
                size={path === Paths.Proprioception ? 'large' : 'small'}
                onClick={() =>
                  navigate(
                    NavigationPrefix + Paths.Proprioception + '?play=true'
                  )
                }
                text={path === Paths.Proprioception ? t('proprioception') : ''}
              />
              <NavigationButton
                image={Vestibular}
                size={path === Paths.Vestibular ? 'large' : 'small'}
                onClick={() =>
                  navigate(NavigationPrefix + Paths.Vestibular + '?play=true')
                }
                text={path === Paths.Vestibular ? t('vestibular') : ''}
              />
              <NavigationButton
                image={Touch}
                size={path === Paths.Touch ? 'large' : 'small'}
                onClick={() =>
                  navigate(NavigationPrefix + Paths.Touch + '?play=true')
                }
                text={path === Paths.Touch ? t('touch') : ''}
              />
            </div>
          )}
          {hasValue && (
            <div className='nav-middle-container'>
              <div className='description'>{t(value + '.description')}</div>
              <button
                className='continue-button'
                onClick={() => {
                  playSound('click');
                  setGameState({ step: 0, value: value + '-final' });
                }}
              >
                {t(`continueButton`)} <Arrow />
              </button>
            </div>
          )}
        </div>
      </animated.div>
    </>
  );
}

export default Sensory;