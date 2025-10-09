import React, { useEffect, useRef } from 'react';
import {
  Navigate,
  useLocation,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Paths } from '../types/Paths';
import { usePathFromLocation, useLocationPath } from '../hooks';
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
import { useGameContext } from '../state/game';
import { screenScale } from '../utils/scaling';

const TIME_TO_SPLASH = 1200000;

export function Home() {
  // This gets the current location from react router.
  const location = useLocation();
  const params = useParams(); // Get route params (including :location)
  const [, setAnimateState] = useAnimateContext();
  const [gameState, setGameState] = useGameContext();
  const [path, prefix] = usePathFromLocation(location.pathname);
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  // Build the base path including location if it exists
  const locationPrefix = params.location ? `/${params.location}` : '';

  const handleResetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      navigate(`${locationPrefix}/${Paths.SplashScreen}`);
      setGameState({ step: 0 });
      setAnimateState('');
    }, TIME_TO_SPLASH);
  };
  /*
  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => navigate(`${locationPrefix}/${Paths.SplashScreen}`),
      TIME_TO_SPLASH
    );
  });
   */

  // By default, the app will render the Home component.
  // If we're at the location root (e.g., /#/childlifezone or /#/childlifezone/), redirect to main-menu
  const pathWithoutLocation = params.location
    ? location.pathname.replace(`/${params.location}`, '')
    : location.pathname;

  if (pathWithoutLocation === '/' || pathWithoutLocation === '') {
    return <Navigate to={`${locationPrefix}/${Paths.MainMenu}`} replace />;
  }

  // TEMPORARY
  if (pathWithoutLocation === '/bodySystems') {
    return (
      <Navigate
        to={`${locationPrefix}/${Paths.BodySystems}/${Paths.Sensory}`}
        replace
      />
    );
  }

  // TEMPORARY
  if (pathWithoutLocation === '/procedures') {
    return (
      <Navigate
        to={`${locationPrefix}/${Paths.Procedures}/${Paths.SurgicalPrep}`}
        replace
      />
    );
  }

  return (
    <div className='App' onClick={() => handleResetTimeout()}>
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
              to={
                prefix === 'Skeletal' && gameState.value === 'done'
                  ? location.pathname + location.search
                  : location.pathname
              }
              onClick={() => {
                if (prefix === 'Skeletal' && gameState.value === 'done') return;
                location.search && playSound('generalSelect');
                location.search && setGameState({ step: 0 });
              }}
            >
              <ExploreSVG
                style={{
                  width: screenScale.y(100),
                  height: screenScale.y(100),
                  filter:
                    !location.search ||
                    (prefix === 'Skeletal' && gameState.value === 'done')
                      ? 'brightness(50%)'
                      : 'brightness(1)',
                }}
              />
              <span style={{ color: 'white' }}>
                {t('common.scene.explore')}
              </span>
            </Link>
            <Link
              to={'?play=true'}
              onClick={() => {
                if (prefix === 'Skeletal' && gameState.value === 'done') {
                  setGameState({ value: 'reset' });
                }
                setAnimateState('');
                location.search !== '?play=true' && playSound('generalSelect');
              }}
            >
              <PlaySVG
                style={{
                  width: screenScale.y(100),
                  height: screenScale.y(100),
                  filter:
                    location.search === '?play=true' &&
                    !(prefix === 'Skeletal' && gameState.value === 'done')
                      ? 'brightness(50%)'
                      : 'brightness(1)',
                }}
              />
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
