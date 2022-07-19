import * as React from 'react';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import EEG from './Procedures/EEG.svg';
import IV from './Procedures/IV.svg';
import MRI from './Procedures/MRI.svg';
import SurgicalPrep from './Procedures/SurgicalPrep.svg';
import Wellness from './Procedures/Wellness.svg';
import XRay from './Procedures/XRay.svg';
import NavigationButton from './NavigationButton';
import { useAnimateContext } from '../../state/animate';

type Props = {
  path: Paths;
  prefix: Paths;
};

const Procedures = ({ path, prefix }: Props) => {
  const t = useNavBarTranslation(prefix);
  const [, setAnimatedPath] = useAnimateContext();

  const onClickHandler = (destination: Paths) => {
    if (path === destination) return;
    setAnimatedPath(Paths.BodySystems + '/' + destination);
  };

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
          image={SurgicalPrep}
          alt='sensory'
          size={path === Paths.SurgicalPrep ? 'large' : 'small'}
          onClick={() => onClickHandler(Paths.SurgicalPrep)}
          text={path === Paths.SurgicalPrep ? t('surgicalPrep') : ''}
        />
        <NavigationButton
          image={XRay}
          alt='skeletal'
          size={path === Paths.XRay ? 'large' : 'small'}
          onClick={() => onClickHandler(Paths.XRay)}
          text={path === Paths.XRay ? t('xRay') : ''}
        />
        <NavigationButton
          image={EEG}
          alt='cardiovascular'
          size={path === Paths.Eeg ? 'large' : 'small'}
          onClick={() => onClickHandler(Paths.Eeg)}
          text={path === Paths.Eeg ? t('eeg') : ''}
        />
        <NavigationButton
          image={Wellness}
          alt='muscular'
          size={path === Paths.Wellness ? 'large' : 'small'}
          onClick={() => onClickHandler(Paths.Wellness)}
          text={path === Paths.Wellness ? t('wellness') : ''}
        />
        <NavigationButton
          image={MRI}
          alt='nervous'
          size={path === Paths.Mri ? 'large' : 'small'}
          onClick={() => onClickHandler(Paths.Mri)}
          text={path === Paths.Mri ? t('mri') : ''}
        />
        <NavigationButton
          image={IV}
          alt='digestive'
          size={path === Paths.Iv ? 'large' : 'small'}
          onClick={() => onClickHandler(Paths.Iv)}
          text={path === Paths.Iv ? t('iv') : ''}
        />
      </div>
    </div>
  );
};

export default Procedures;
