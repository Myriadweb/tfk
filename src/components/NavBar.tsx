import React from 'react';
import { Paths } from '../types/Paths';
import { getNavbarComponent } from '../getters';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageToggle } from './LanguageToggle';

type Props = {
  path: Paths;
  prefix?: Paths;
};

export function NavBar({ path, prefix }: Props) {
  const Component = getNavbarComponent(prefix || path);
  const { t } = useTranslation('translation');

  return (
    <div className='App-navigation'>
      <Component path={path} prefix={prefix} />
      {path !== Paths.MainMenu && (
        <div
          style={{
            position: 'absolute',
            left: 44,
            top: 383,
          }}
        >
          <Link
            to={Paths.MainMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src='images/NavBar/exitButton.png' alt='exit' />
            <span
              style={{
                fontSize: 20,
                color: '#FFF',
                fontFamily: 'LemonMilk',
                marginLeft: 15,
              }}
            >
              {t('common.navbar.exit')}
            </span>
          </Link>
        </div>
      )}
      {prefix === Paths.Sensory && (
        <div
          style={{
            position: 'absolute',
            left: 207,
            top: 383,
          }}
        >
          <Link
            to={`${Paths.BodySystems}/${Paths.Sensory}`}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src='images/NavBar/bodySystemsButton.png' alt='body systems' />
            <span
              style={{
                fontSize: 20,
                color: '#FFF',
                fontFamily: 'LemonMilk',
                marginLeft: 15,
              }}
            >
              {t('common.navbar.bodySystems')}
            </span>
          </Link>
        </div>
      )}
      <LanguageToggle />
    </div>
  );
}
