import React, {useEffect} from 'react';
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

function App() {
  useEffect(() => {
    setCSSScaleVariables();
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
