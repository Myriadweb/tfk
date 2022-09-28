import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import Cardiovascular from './BodySystemsAssets/Cardiovascular.svg';
import Digestive from './BodySystemsAssets/Digestive.svg';
import Muscular from './BodySystemsAssets/Muscular.svg';
import Nervous from './BodySystemsAssets/Nervous.svg';
import Sensory from './BodySystemsAssets/Sensory.svg';
import Skeletal from './BodySystemsAssets/Skeletal.svg';
import NavigationButton from './UIComponents/NavigationButton';
import { useAnimateContext } from '../../state/animate';
import { useEffect, useState } from 'react';

type Props = {
  path: Paths;
  prefix: Paths;
};

const BodySystems = ({ path, prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [, setAnimatedPath] = useAnimateContext();
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  useEffect(() => {
    if (buttonsDisabled) {
      setButtonsDisabled(false);
    }
  }, [path]);

  const onClickHandler = (destination: Paths) => {
    if (destination === path || buttonsDisabled) return;

    setButtonsDisabled(true);

    setAnimatedPath(Paths.BodySystems + '/' + destination);
  };

  return (
    <div>
      <div className='nav-top'>
        <div className='body-text'>{t('selectPath')}</div>
      </div>
      <div className='nav-middle' style={{ height: 191 }}>
        <div className='nav-items-container'>
          <NavigationButton
            image={Sensory}
            size={path === Paths.Sensory ? 'large' : 'small'}
            onClick={() => onClickHandler(Paths.Sensory)}
            text={path === Paths.Sensory ? t('sensory') : ''}
          />
          <NavigationButton
            image={Skeletal}
            size={path === Paths.Skeletal ? 'large' : 'small'}
            onClick={() => onClickHandler(Paths.Skeletal)}
            text={path === Paths.Skeletal ? t('skeletal') : ''}
          />
          <NavigationButton
            image={Cardiovascular}
            size={path === Paths.Cardiovascular ? 'large' : 'small'}
            onClick={() => onClickHandler(Paths.Cardiovascular)}
            text={path === Paths.Cardiovascular ? t('cardiovascular') : ''}
          />
          <NavigationButton
            image={Muscular}
            size={path === Paths.Muscular ? 'large' : 'small'}
            onClick={() => onClickHandler(Paths.Muscular)}
            text={path === Paths.Muscular ? t('muscular') : ''}
          />
          <NavigationButton
            image={Nervous}
            size={path === Paths.Nervous ? 'large' : 'small'}
            onClick={() => onClickHandler(Paths.Nervous)}
            text={path === Paths.Nervous ? t('nervous') : ''}
          />
          <NavigationButton
            image={Digestive}
            size={path === Paths.Digestive ? 'large' : 'small'}
            onClick={() => onClickHandler(Paths.Digestive)}
            text={path === Paths.Digestive ? t('digestive') : ''}
          />
        </div>
      </div>
    </div>
  );
};

export default BodySystems;
