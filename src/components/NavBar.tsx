import React from 'react';
import { Paths } from '../types/Paths';
import { getNavbarComponent } from '../getters';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageToggle } from './LanguageToggle';
import playSound from '../sound';
import { useGameContext } from '../state/game';
import { useAnimateContext } from '../state/animate';

const bodySystemPaths = [
  Paths.Sensory,
  Paths.Skeletal,
  Paths.Cardiovascular,
  Paths.Muscular,
  Paths.Nervous,
  Paths.Digestive,
];

const ProceduresPaths = [
  Paths.SurgicalPrep,
  Paths.XRay,
  Paths.Mri,
  Paths.Iv,
  Paths.Wellness,
  Paths.Eeg,
];

type Props = {
  path: Paths;
  prefix?: Paths;
};

const getNavigationPath = (path: Paths) => {
  if (bodySystemPaths.includes(path)) {
    return Paths.BodySystems;
  }
  if (ProceduresPaths.includes(path)) {
    return Paths.Procedures;
  }
  return '';
};

const getNavigationIcon = (path: Paths) => {
  if (bodySystemPaths.includes(path)) {
    return 'bodySystemsButton';
  }
  if (ProceduresPaths.includes(path)) {
    return 'proceduresButton';
  }
  return '';
};

export function NavBar({ path, prefix }: Props) {
  const Component = getNavbarComponent(prefix || path);
  const [{ hideButtons }, setStep] = useGameContext();
  const [, setAnimatedPath] = useAnimateContext();

  const { t } = useTranslation('translation');

  return (
    <div className='App-navigation'>
      {Component ? <Component path={path} prefix={prefix} /> : <></>}
      {path !== Paths.MainMenu && !hideButtons && (
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
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
              setAnimatedPath('');
            }}
          >
            <img src='images/NavBar/exitButton.png' />
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
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src='images/NavBar/bodySystemsButton.png' />
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
      {path === Paths.Game && !hideButtons && (
        <div
          style={{
            position: 'absolute',
            left: 207,
            top: 383,
          }}
        >
          <Link
            to={`${getNavigationPath(prefix)}/${prefix}`}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={`images/NavBar/${getNavigationIcon(prefix)}.png`} />
            <span
              style={{
                fontSize: 20,
                color: '#FFF',
                fontFamily: 'LemonMilk',
                marginLeft: 15,
              }}
            >
              {t('common.navbar.procedures')}
            </span>
          </Link>
        </div>
      )}
      <LanguageToggle />
    </div>
  );
}
