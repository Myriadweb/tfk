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
import { Smell } from './scene/Smell';
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
import XRayGame from './scene/XRayGame';
import playSound from '../sound';
import Sight from './scene/Sight';
import Touch from './scene/Touch';
import Hearing from './scene/Hearing';
import Taste from './scene/Taste';
import Proprioception from './scene/Proprioception';
import MriGame from './scene/MriGame';
import EegGame from './scene/EegGame';
import WellnessGame from './scene/WellnessGame';
import IvGame from './scene/IvGame';
import SurgicalPrepGame from './scene/SurgicalPrepGame';
import Vestibular from './scene/Vestibular';
import { useAnimateContext } from '../state/animate';
import NervousGame from './scene/NervousGame';
import CardiovascularGame from './scene/CardiovascularGame';
import MuscularGame from './scene/MuscularGame';
import DigestiveGame from './scene/DigestiveGame';

export function Home() {
  // This gets the current location from react router.
  const location = useLocation();
  const [, setAnimateState] = useAnimateContext();
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
      <Header path={Paths[path === 'Game' ? prefix : path]} />
      <div
        className='App-stage'
        style={{ backgroundImage: 'url("images/BG.png")' }}
      >
        <Routes>
          <Route path={'/' + Paths.MainMenu} element={<MainMenu />} />
          <Route path={Paths.BodySystems}>
            <Route path={Paths.Sensory} element={<Sensory />} />
            <Route
              path={Paths.Sensory + '/' + Paths.Hearing}
              element={<Hearing />}
            />
            <Route
              path={Paths.Sensory + '/' + Paths.Smell}
              element={<Smell />}
            />
            <Route
              path={Paths.Sensory + '/' + Paths.Sight}
              element={<Sight />}
            />
            <Route
              path={Paths.Sensory + '/' + Paths.Touch}
              element={<Touch />}
            />
            <Route
              path={Paths.Sensory + '/' + Paths.Taste}
              element={<Taste />}
            />
            <Route
              path={Paths.Sensory + '/' + Paths.Proprioception}
              element={<Proprioception />}
            />
            <Route
              path={Paths.Sensory + '/' + Paths.Vestibular}
              element={<Vestibular />}
            />
            <Route path={Paths.Skeletal} element={<Skeletal />} />
            <Route
              path={Paths.Skeletal + '/' + Paths.Game}
              element={<Skeletal />}
            />
            <Route path={Paths.Cardiovascular} element={<Cardiovascular />} />
            <Route
              path={Paths.Cardiovascular + '/' + Paths.Game}
              element={<CardiovascularGame />}
            />
            <Route path={Paths.Muscular} element={<Muscular />} />
            <Route
              path={Paths.Muscular + '/' + Paths.Game}
              element={<MuscularGame />}
            />
            <Route path={Paths.Nervous} element={<Nervous />} />
            <Route
              path={Paths.Nervous + '/' + Paths.Game}
              element={<NervousGame />}
            />
            <Route path={Paths.Digestive} element={<Digestive />} />
            <Route
              path={Paths.Digestive + '/' + Paths.Game}
              element={<DigestiveGame />}
            />
          </Route>
          <Route path={Paths.Procedures}>
            <Route path={Paths.XRay} element={<XRay />} />
            <Route
              path={Paths.XRay + '/' + Paths.Game}
              element={<XRayGame />}
            />
            <Route path={Paths.Mri} element={<Mri />} />
            <Route path={Paths.Mri + '/' + Paths.Game} element={<MriGame />} />
            <Route path={Paths.Iv} element={<Iv />} />
            <Route path={Paths.Iv + '/' + Paths.Game} element={<IvGame />} />
            <Route path={Paths.Wellness} element={<Wellness />} />
            <Route
              path={Paths.Wellness + '/' + Paths.Game}
              element={<WellnessGame />}
            />
            <Route path={Paths.Eeg} element={<Eeg />} />
            <Route path={Paths.Eeg + '/' + Paths.Game} element={<EegGame />} />
            <Route path={Paths.SurgicalPrep} element={<SurgicalPrep />} />
            <Route
              path={Paths.SurgicalPrep + '/' + Paths.Game}
              element={<SurgicalPrepGame />}
            />
          </Route>
        </Routes>
        {location.pathname.includes(Paths.BodySystems) && (
          <div className='Options-buttons-box'>
            <Link
              to={location.pathname}
              onClick={() => location.search && playSound('click')}
            >
              {!location.search && (
                <OptionOverlaySVG style={{ position: 'absolute', top: 0 }} />
              )}
              <ExploreSVG />
              <span style={{ color: 'white' }}>
                {t('common.scene.explore')}
              </span>
            </Link>
            <Link
              to={'?play=true'}
              onClick={() => {
                setAnimateState('');
                location.search !== '?play=true' && playSound('click');
              }}
            >
              {location.search === '?play=true' && (
                <OptionOverlaySVG style={{ position: 'absolute', top: 160 }} />
              )}
              <PlaySVG />
              <span style={{ color: 'white' }}>{t('common.scene.play')}</span>
            </Link>
          </div>
        )}
      </div>
      <NavBar path={Paths[path]} prefix={Paths[prefix]} />
    </div>
  );
}

export default Home;
