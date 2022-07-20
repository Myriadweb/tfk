import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavBarTranslation } from '../../hooks';
import { Paths } from '../../types/Paths';

type Props = {
  path: Paths;
};

const MainMenu = ({ path }: Props) => {
  const t = useNavBarTranslation(path);

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
          marginTop: 45,
        }}
      >
        <Link
          style={{
            marginRight: 82,
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            width: 213,
          }}
          to={`/${Paths.BodySystems}/${Paths.Sensory}`}
        >
          <img
            src='images/MainMenu/bodySystemButton.png'
            
            style={{
              width: 192,
              height: 192,
            }}
          />
          <span
            style={{
              marginTop: 23,
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
            width: 213,
          }}
          to={`/${Paths.Procedures}/${Paths.SurgicalPrep}`}
        >
          <img
            src='images/MainMenu/proceduresButton.png'
            
            style={{
              width: 192,
              height: 192,
            }}
          />
          <span
            style={{
              marginTop: 23,
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
