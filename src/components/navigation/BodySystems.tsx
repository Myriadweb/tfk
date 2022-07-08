import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import Cardiovascular from './BodySystemsAssets/Cardiovascular.svg';
import Digestive from './BodySystemsAssets/Digestive.svg';
import Muscular from './BodySystemsAssets/Muscular.svg';
import Nervous from './BodySystemsAssets/Nervous.svg';
import Sensory from './BodySystemsAssets/Sensory.svg';
import Skeletal from './BodySystemsAssets/Skeletal.svg';
import NavigationButton from './NavigationButton';

type Props = {
  path: Paths;
  prefix: Paths;
};

const BodySystems = ({ path, prefix }: Props) => {
  const t = useNavBarTranslation(prefix);

  return (
    <div>
      <span
        style={{
          display: 'block',
          fontSize: 20,
          color: '#FFF',
          fontFamily: 'LemonMilk',
          marginTop: 45,
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
          image={Sensory}
          alt='sensory'
          size={path === Paths.Sensory ? 'large' : 'small'}
          link={Paths.BodySystems + '/' + Paths.Sensory}
          text={path === Paths.Sensory ? t('sensory') : ''}
        />
        <NavigationButton
          image={Skeletal}
          alt='skeletal'
          size={path === Paths.Skeletal ? 'large' : 'small'}
          link={Paths.BodySystems + '/' + Paths.Skeletal}
          text={path === Paths.Skeletal ? t('skeletal') : ''}
        />
        <NavigationButton
          image={Cardiovascular}
          alt='cardiovascular'
          size={path === Paths.Cardiovascular ? 'large' : 'small'}
          link={Paths.BodySystems + '/' + Paths.Cardiovascular}
          text={path === Paths.Cardiovascular ? t('cardiovascular') : ''}
        />
        <NavigationButton
          image={Muscular}
          alt='muscular'
          size={path === Paths.Muscular ? 'large' : 'small'}
          link={Paths.BodySystems + '/' + Paths.Muscular}
          text={path === Paths.Muscular ? t('muscular') : ''}
        />
        <NavigationButton
          image={Nervous}
          alt='nervous'
          size={path === Paths.Nervous? 'large' : 'small'}
          link={Paths.BodySystems + '/' + Paths.Nervous}
          text={path === Paths.Nervous ? t('nervous') : ''}
        />
        <NavigationButton
          image={Digestive}
          alt='digestive'
          size={path === Paths.Digestive ? 'large' : 'small'}
          link={Paths.BodySystems + '/' + Paths.Digestive}
          text={path === Paths.Digestive ? t('digestive') : ''}
        />
      </div>
    </div>
  );
};

export default BodySystems;
