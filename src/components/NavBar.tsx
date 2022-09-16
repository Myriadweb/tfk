import React from 'react';
import { Paths } from '../types/Paths';
import { getNavbarComponent } from '../getters';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageToggle } from './LanguageToggle';
import playSound from '../sound';
import { useGameContext } from '../state/game';
import { useAnimateContext } from '../state/animate';
import exitButton from './navigation/SharedAssets/exitButton.svg';
import proceduresButton from './navigation/SharedAssets/proceduresButton.svg';
import bodySystemsButton from './navigation/SharedAssets/bodySystemsButton.svg';


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
    return bodySystemsButton;
  }
  if (ProceduresPaths.includes(path)) {
    return proceduresButton;
  }
  return '';
};

const getNavigationText = (path: Paths) => {
  if (bodySystemPaths.includes(path)) {
    return 'bodySystems';
  }
  if (ProceduresPaths.includes(path)) {
    return 'procedures';
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
      <div className='nav-bottom'>
        <div className="links-container">
        {path !== Paths.MainMenu && !hideButtons && (
          <Link className="link"
            to={Paths.MainMenu}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
              setAnimatedPath('');
            }}
          >
            <img src={exitButton} />
            <span>
              {t('common.navbar.exit')}
            </span>
          </Link>
        )}
        {prefix === Paths.Sensory && (
          <Link className="link"
            to={`${Paths.BodySystems}/${Paths.Sensory}`}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
            }}
          >
            <img src={proceduresButton} />
            <span>
              {t('common.navbar.bodySystems')}
            </span>
          </Link>
        )}
        {path === Paths.Game && !hideButtons && (
          <Link className="link"
            to={`${getNavigationPath(prefix)}/${prefix}`}
            onClick={() => {
              playSound('click');
              setStep({ step: 0 });
            }}
          >
            <img src={getNavigationIcon(prefix)} />
            <span>
              {t(`common.navbar.${getNavigationText(prefix)}`)}
            </span>
          </Link>
        )}
        </div>
        <LanguageToggle />
      </div>
    </div>
  );
}
