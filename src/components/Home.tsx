import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Paths } from '../types/Paths';
import { usePathFromLocation } from '../hooks';

export function Home() {
  // This gets the current location from react router.
  const location = useLocation();
  const path = usePathFromLocation(location.pathname);

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
            <span>Test</span>
            <img alt='play' src='/images/Scene/playButton.png' />
            <span>Test 2</span>
          </div>
        )}
        <Outlet />
      </div>
      <NavBar path={Paths[path]} />
    </div>
  );
}

export default Home;
