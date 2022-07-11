import React from 'react';
import { Navigate, useLocation, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Paths } from '../types/Paths';
import { usePathFromLocation } from '../hooks';
import { MainMenu } from './scene/MainMenu';
import Sensory from './scene/Sensory';
import { useTranslation } from 'react-i18next';

export function Home() {
  // This gets the current location from react router.
  const location = useLocation();
  const [path, prefix] = usePathFromLocation(location.pathname);
  const { t } = useTranslation('translation');

  // By default, the app will render the Home component.
  // If we're on '/' we redirect to main-menu
  if (location.pathname === '/') {
    return <Navigate to={Paths.MainMenu} />;
  }

  // TEMPORARY
  if (location.pathname === '/bodySystems') {
    return <Navigate to={Paths.Sensory} />;
  }

  return (
    <div className='App'>
      <Header path={Paths[path]} />
      <div className='App-stage'>
        {location.pathname !== '/' + Paths.MainMenu && (
          <div className='Options-buttons-box'>
            <img alt='explore' src='/images/Scene/exploreButton.png' />
            <span>{t('common.scene.explore')}</span>
            <img alt='play' src='/images/Scene/playButton.png' />
            <span>{t('common.scene.play')}</span>
          </div>
        )}
        <Routes>
          <Route path={'/' + Paths.MainMenu} element={<MainMenu />} />
          <Route path={Paths.BodySystems}>
            <Route path={Paths.Sensory} element={<Sensory />} />
          </Route>
        </Routes>
      </div>
      <NavBar path={Paths[path]} prefix={Paths[prefix]} />
    </div>
  );
}

export default Home;
