import React from 'react';
import Home from './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageContextProvider } from './state/language';
import { CharacterContextProvider } from './state/character';
import './App.css';

function App() {
  return (
    <LanguageContextProvider>
      <CharacterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CharacterContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
