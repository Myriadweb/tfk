import React from 'react';
import Home from './components/Home';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { LanguageContextProvider } from './state/language';
import { CharacterContextProvider } from './state/character';
import { AnimateContextProvider } from './state/animate';
import './App.css';
import { ProcedureContextProvider } from './state/procedure';

function App() {
  return (
    <LanguageContextProvider>
      <AnimateContextProvider>
        <ProcedureContextProvider>
          <CharacterContextProvider>
            <HashRouter>
              <Routes>
                <Route path='*' element={<Home />} />
              </Routes>
            </HashRouter>
          </CharacterContextProvider>
        </ProcedureContextProvider>
      </AnimateContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
