import React from 'react';
import Home from './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageContextProvider } from './state/language';
import { CharacterContextProvider } from './state/character';
import { AnimateContextProvider } from './state/animate';
import './App.css';

function App() {
  return (
    <LanguageContextProvider>
      <AnimateContextProvider>
        <CharacterContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='*' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </CharacterContextProvider>
      </AnimateContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
