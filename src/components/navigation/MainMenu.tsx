import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import playSound from '../../sound';
import NavigationButton from './UIComponents/NavigationButton';
import { useNavigate } from 'react-router-dom';
import Hearing from './SensoryAssets/Hearing.svg';
import Procedures from './MainMenuAssets/procedures.svg';
import BodySystems from './MainMenuAssets/bodySystems.svg';

type Props = {
  path: Paths;
};

const MainMenu = ({ path }: Props) => {
  const t = useNavBarTranslation(path);
  const navigate = useNavigate();
  return (
    <div className='nav-top'>
      <div className='body-text'>{t('selectPath')}</div>
      <div
        className='nav-items-container'
        style={{ width: 700, marginTop: 40 }}
      >
        <NavigationButton
          image={BodySystems}
          size='large'
          onClick={() => navigate(Paths.BodySystems + '/' + Paths.Sensory)}
          text={t('bodySystemButton')}
        />
        <NavigationButton
          image={Procedures}
          size='large'
          onClick={() => navigate(Paths.Procedures + '/' + Paths.SurgicalPrep)}
          text={t('proceduresButton')}
        />
      </div>
    </div>
  );
};

export default MainMenu;
