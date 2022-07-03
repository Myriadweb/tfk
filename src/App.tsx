import React from 'react';
import Home from './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageContextProvider } from './state/language';
import { CharacterContextProvider } from './state/character';
import { MainMenu } from './components/content/MainMenu';
import './App.css';
import { Paths } from './types/Paths';

function App() {
  return (
    <LanguageContextProvider>
      <CharacterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={Paths.Home} element={<Home />}>
              <Route path={Paths.MainMenu} element={<MainMenu />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CharacterContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
