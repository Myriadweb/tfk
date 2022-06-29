import React from 'react';
import Home from './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PixiAnimationTest } from './components/PixiAnimationTest';
import { ReactAnimationTest } from './components/ReactAnimationTest';
import { PixiDndTest } from './components/PixiDndTest';
import { ReactDndTest } from './components/ReactDndTest';
import { LanguageContextProvider } from './state/language';
import { CharacterContextProvider } from './state/character';

function App() {
  return (
    <LanguageContextProvider>
      <CharacterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pixi' element={<Home />}>
              <Route path='animate' element={<PixiAnimationTest />} />
              <Route path='dnd' element={<PixiDndTest />} />
            </Route>
            <Route path='/react' element={<Home />}>
              <Route path='animate' element={<ReactAnimationTest />} />
              <Route path='dnd' element={<ReactDndTest />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CharacterContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
