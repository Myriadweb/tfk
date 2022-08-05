import React from 'react';
import Home from './components/Home';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { LanguageContextProvider } from './state/language';
import { CharacterContextProvider } from './state/character';
import { AnimateContextProvider } from './state/animate';
import './App.css';
import { GameContextProvider } from './state/game';

function App() {
  return (
    <LanguageContextProvider>
      <AnimateContextProvider>
        <GameContextProvider>
          <CharacterContextProvider>
            <HashRouter>
              <Routes>
                <Route path='*' element={<Home />} />
              </Routes>
            </HashRouter>
          </CharacterContextProvider>
        </GameContextProvider>
      </AnimateContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
