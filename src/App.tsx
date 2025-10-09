import React, { useEffect } from 'react';
import Home from './components/Home';
import { HashRouter, Route, Routes, Navigate, useLocation as useRouterLocation } from 'react-router-dom';
import { LanguageContextProvider } from './state/language';
import { CharacterContextProvider } from './state/character';
import { AnimateContextProvider } from './state/animate';
import { setCSSScaleVariables } from "./utils/scaling";
import './App.css';
import { GameContextProvider } from './state/game';
import SplashScreen from './components/SplashScreen';
import { unlockAudio, preloadSounds } from './sound';
import { LocationContextProvider } from "./state/location";
import { DEFAULT_LOCATION } from './utils/locationLoader';
import { updateManifestStartUrl } from './utils/updateManifest'; // NEW

// Component to redirect to default location if none specified
function LocationRedirect() {
  const routerLocation = useRouterLocation();

  // If we're at root (/#/), redirect to default location
  if (routerLocation.pathname === '/') {
    return <Navigate to={`/${DEFAULT_LOCATION}`} replace />;
  }

  return <Home />;
}

function App() {
  useEffect(() => {
    setCSSScaleVariables();

    // Update manifest with current location for PWA
    updateManifestStartUrl();

    // Simple unlock on first interaction
    const handleInteraction = () => {
      unlockAudio();
      preloadSounds([
        'click',
        'generalSelect',
        'completeStep',
        'mainScreenSwoosh',
        'completeProcedure'
      ]).catch(error => console.log('Preload error:', error));
    };

    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <LocationContextProvider>
      <LanguageContextProvider>
        <AnimateContextProvider>
          <GameContextProvider>
            <CharacterContextProvider>
              <div>
                <HashRouter>
                  <Routes>
                    {/* Routes WITH location (e.g., /#/childlifezone/splashScreen) */}
                    <Route path=":location/splashScreen" element={<SplashScreen />} />
                    <Route path=":location/*" element={<Home />} />

                    {/* Root path - redirect to default location */}
                    <Route path="/" element={<LocationRedirect />} />

                    {/* Catch-all for any other paths without location */}
                    <Route path="*" element={<LocationRedirect />} />
                  </Routes>
                </HashRouter>
              </div>
            </CharacterContextProvider>
          </GameContextProvider>
        </AnimateContextProvider>
      </LanguageContextProvider>
    </LocationContextProvider>
  );
}

export default App;
