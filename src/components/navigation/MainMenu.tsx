import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';
import playSound from '../../sound';
import { useCharacterContext } from '../../state/character';
import {screenScale} from "../../utils/scaling";

type Props = {
  path: Paths;
};

const PROCEDURES_CONFIG = {
  0: Paths.Iv,
  1: Paths.SurgicalPrep,
  2: Paths.Mri,
  3: Paths.Wellness,
  4: Paths.XRay,
  5: Paths.Eeg,
};

const MainMenu = ({ path }: Props) => {
  const [character] = useCharacterContext();

  const t = useNavBarTranslation(path);
  return (
    <div className='nav-top'>
      <div className='body-text'>{t('selectPath')}</div>
      <div
        className='nav-items-container'
      >
        <Link
          style={{
            marginRight: screenScale.x(82),
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            width: screenScale.x(250),
          }}
          to={`/${Paths.BodySystems}/${Paths.Sensory}`}
          onClick={() => playSound('generalSelect')}
        >
          <img
            src='images/MainMenu/bodySystemButton.png'
            style={{
              width: screenScale.y(192),
              height: screenScale.y(192),
            }}
          />
          <span
            style={{
              marginTop: screenScale.y(23),
              fontSize: 25,
              color: '#FFF',
              letterSpacing: 1.24,
              whiteSpace: 'pre-wrap',
            }}
          >
            {t('bodySystemButton')}
          </span>
        </Link>
        <Link
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            textDecoration: 'none',
            letterSpacing: 1.24,
            alignItems: 'center',
            width: screenScale.x(250),
          }}
          to={`/${Paths.Procedures}/${PROCEDURES_CONFIG[character]}`}
          onClick={() => playSound('generalSelect')}
        >
          <img
            src='images/MainMenu/proceduresButton.png'
            style={{
              width: screenScale.y(192),
              height: screenScale.y(192),
            }}
          />
          <span
            style={{
              marginTop: screenScale.y(23),
              fontSize: 25,
              color: '#FFF',
            }}
          >
            {t('proceduresButton')}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
