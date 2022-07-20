import React from 'react';
import { Navigate, useLocation, Routes, Route, Link } from 'react-router-dom';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Paths } from '../types/Paths';
import { usePathFromLocation } from '../hooks';
import { MainMenu } from './scene/MainMenu';
import Sensory from './scene/Sensory';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PlaySVG } from './HomeAssets/Play.svg';
import { ReactComponent as ExploreSVG } from './HomeAssets/Explore.svg';
import { ReactComponent as OptionOverlaySVG } from './HomeAssets/IconOverlay.svg';
import { Smell } from './Smell';
import Skeletal from './scene/Skeletal';
import Cardiovascular from './scene/Cardiovascular';
import Muscular from './scene/Muscular';
import Nervous from './scene/Nervous';
import Digestive from './scene/Digestive';
import XRay from './scene/XRay';
import Mri from './scene/Mri';
import Iv from './scene/Iv';
import Wellness from './scene/Wellness';
import Eeg from './scene/Eeg';
import SurgicalPrep from './scene/SurgicalPrep';

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
    return <Navigate to={Paths.BodySystems + '/' + Paths.Sensory} />;
  }

  // TEMPORARY
  if (location.pathname === '/procedures') {
    return <Navigate to={Paths.Procedures + '/' + Paths.SurgicalPrep} />;
  }

  return (
    <div className='App'>
      <Header path={Paths[path]} />
      <div
        className='App-stage'
        style={{ backgroundImage: 'url("images/BG.png")' }}
      >
        <Routes>
          <Route path={'/' + Paths.MainMenu} element={<MainMenu />} />
          <Route path={Paths.BodySystems}>
            <Route path={Paths.Sensory} element={<Sensory />} />
            <Route
              path={Paths.Sensory + '/' + Paths.Smell}
              element={<Smell />}
            />
            <Route path={Paths.Skeletal} element={<Skeletal />} />
            <Route path={Paths.Cardiovascular} element={<Cardiovascular />} />
            <Route path={Paths.Muscular} element={<Muscular />} />
            <Route path={Paths.Nervous} element={<Nervous />} />
            <Route path={Paths.Digestive} element={<Digestive />} />
          </Route>
          <Route path={Paths.Procedures}>
            <Route path={Paths.XRay} element={<XRay />} />
            <Route path={Paths.Mri} element={<Mri />} />
            <Route path={Paths.Iv} element={<Iv />} />
            <Route path={Paths.Wellness} element={<Wellness />} />
            <Route path={Paths.Eeg} element={<Eeg />} />
            <Route path={Paths.SurgicalPrep} element={<SurgicalPrep />} />
          </Route>
        </Routes>
        {location.pathname.includes(Paths.BodySystems) && (
          <div className='Options-buttons-box'>
            <Link to={location.pathname}>
              {!location.search && (
                <OptionOverlaySVG style={{ position: 'absolute', top: 0 }} />
              )}
              <ExploreSVG />
              <span>{t('common.scene.explore')}</span>
            </Link>
            <Link to={'?play=true'}>
              {location.search === '?play=true' && (
                <OptionOverlaySVG style={{ position: 'absolute', top: 160 }} />
              )}
              <PlaySVG />
              <span>{t('common.scene.play')}</span>
            </Link>
          </div>
        )}
      </div>
      <NavBar path={Paths[path]} prefix={Paths[prefix]} />
    </div>
  );
}

export default Home;
