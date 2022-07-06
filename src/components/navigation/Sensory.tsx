import * as React from 'react';
// import { Link } from 'react-router-dom';
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
          marginTop: 47,
          background: '#0E1F33',
          height: 191,
        }}
      >
        {/*<Link*/}
        {/*  style={{*/}
        {/*    marginRight: 82,*/}
        {/*    display: 'inline-flex',*/}
        {/*    flexDirection: 'column',*/}
        {/*    textDecoration: 'none',*/}
        {/*  }}*/}
        {/*  to='/bodySystems'*/}
        {/*>*/}
        {/*  <img*/}
        {/*    src='images/MainMenu/bodySystemButton.png'*/}
        {/*    alt='body systems icon'*/}
        {/*  />*/}
        {/*  <span*/}
        {/*    style={{*/}
        {/*      marginTop: 23,*/}
        {/*      fontSize: 25,*/}
        {/*      color: '#FFF',*/}
        {/*      letterSpacing: 1.24,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {t('bodySystemButton')}*/}
        {/*  </span>*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  style={{*/}
        {/*    display: 'inline-flex',*/}
        {/*    flexDirection: 'column',*/}
        {/*    textDecoration: 'none',*/}
        {/*    letterSpacing: 1.24,*/}
        {/*  }}*/}
        {/*  to='/procedures'*/}
        {/*>*/}
        {/*  <img*/}
        {/*    src='images/MainMenu/proceduresButton.png'*/}
        {/*    alt='procedures icon'*/}
        {/*  />*/}
        {/*  <span*/}
        {/*    style={{*/}
        {/*      marginTop: 23,*/}
        {/*      fontSize: 25,*/}
        {/*      color: '#FFF',*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {t('proceduresButton')}*/}
        {/*  </span>*/}
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default MainMenu;
