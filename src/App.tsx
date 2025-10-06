import React, { useEffect } from 'react';
import Home from './components/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { LanguageContextProvider } from './state/language';
import { CharacterContextProvider } from './state/character';
import { AnimateContextProvider } from './state/animate';
import { setCSSScaleVariables } from "./utils/scaling";
import './App.css';
import { GameContextProvider } from './state/game';
import SplashScreen from './components/SplashScreen';
import { Paths } from './types/Paths';
import { unlockAudio, preloadSounds } from './sound';

function App() {
  useEffect(() => {
    setCSSScaleVariables();

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
    <LanguageContextProvider>
      <AnimateContextProvider>
        <GameContextProvider>
          <CharacterContextProvider>
            <div>
              <HashRouter>
                <Routes>
                  <Route path={Paths.SplashScreen} element={<SplashScreen />} />
                  <Route path='*' element={<Home />} />
                </Routes>
              </HashRouter>
            </div>
          </CharacterContextProvider>
        </GameContextProvider>
      </AnimateContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
