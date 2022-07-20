import React from 'react';
import { Paths } from '../types/Paths';
import { useHeaderTranslation } from '../hooks';
import { useLocation } from 'react-router-dom';
import { useLanguageContext } from '../state/language';

type Props = {
  path: Paths;
};

export function Header(props: Props) {
  const [t, section] = useHeaderTranslation(props.path);
  const location = useLocation();
  const [lang] = useLanguageContext();

  if (props.path === Paths.MainMenu) {
    return <div className='App-header'>{t('title')}</div>;
  }

  const locationPath = location.pathname.split('/')[1];

  return (
    <div className='App-header-split'>
      <div className='App-header-split-left'>
        <img
          src={`images/Header/${locationPath}Icon.png`}
          style={{
            marginRight: 28,
            display: 'inline-block',
            marginTop: 49,
            marginLeft: 39,
          }}
        />
        <span
          style={{
            position: 'relative',
            top: -8,
            letterSpacing: 2.98,
            fontSize: lang === 'en' ? 60 : 42,
          }}
        >
          {section}
        </span>
      </div>
      <div className='App-header-split-right'>{t('title')}</div>
    </div>
  );
}
