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

import NavigationButton from './NavigationButton';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from '../../state/game';
import playSound from '../../sound';
import { ReactComponent as Arrow } from '../scene/SceneAssets/Arrow.svg';

type Props = {
  path: Paths;
  prefix: Paths;
};

const VALUES = {
  badSmell: true,
  badSight: true,
};

const NavigationPrefix = `${Paths.BodySystems}/${Paths.Sensory}/`;

function Sensory({ path, prefix }: Props) {
  const t = useNavBarTranslation(prefix);
  const [{ value }, setGameState] = useGameContext();

  const navigate = useNavigate();

  const hasValue = VALUES[value];

  return (
    <>
      <span
        style={{
          display: 'block',
          fontSize: hasValue ? 40 : 20,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          marginTop: 45,
          whiteSpace: 'pre-wrap',
        }}
      >
        {t(hasValue ? value + '.title' : 'selectPath')}
      </span>
      <div
        style={{
          marginTop: 47,
          background: '#0E1F33',
          height: 191,
          display: 'flex',
          justifyContent: hasValue ? 'start' : 'space-around',
          alignItems: 'center',
          flexDirection: hasValue ? 'column' : 'row',
        }}
      >
        {!hasValue && (
          <>
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
                navigate(NavigationPrefix + Paths.Proprioception + '?play=true')
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
          </>
        )}
        {hasValue && (
          <>
            <span
              style={{
                display: 'block',
                fontSize: 20,
                color: '#FFF',
                fontFamily: 'LemonMilk',
                marginTop: 27,
                whiteSpace: 'pre-wrap',
              }}
            >
              {t(value + '.description')}
            </span>
            <button
              style={{
                fontFamily: 'LemonMilk',
                fontSize: 20,
                color: '#fff',
                background: '#CD4845',
                border: '1px solid #000',
                borderRadius: 12,
                width: 241,
                height: 65,
                marginTop: 20,
              }}
              onClick={() => {
                playSound('click');
                setGameState({ step: 0, value: value + '-final' });
              }}
            >
              {t(`continueButton`)} <Arrow />
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Sensory;
