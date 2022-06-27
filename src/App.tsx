import React from 'react';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { PixiAnimationTest } from './components/PixiAnimationTest';
import { ReactAnimationTest } from './components/ReactAnimationTest';
import { PixiDndTest } from './components/PixiDndTest';
import { ReactDndTest } from './components/ReactDndTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
  );
}

export default App;
