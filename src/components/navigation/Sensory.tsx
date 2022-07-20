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

type Props = {
  path: Paths;
  prefix: Paths;
};

const NavigationPrefix = `${Paths.BodySystems}/${Paths.Sensory}/`;

const Sensory = ({ path, prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const navigate = useNavigate();

  return (
    <div>
      <span
        style={{
          display: 'block',
          fontSize: 20,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          marginTop: 45,
          whiteSpace: 'pre-wrap',
        }}
      >
        {t('selectPath')}
      </span>
      <div
        style={{
          marginTop: 47,
          background: '#0E1F33',
          height: 191,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
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
      </div>
    </div>
  );
};

export default Sensory;
