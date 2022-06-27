import React from 'react';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { PixiAnimationTest } from './components/PixiAnimationTest';
import { ReactAnimationTest } from './components/ReactAnimationTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pixi' element={<Home />}>
          <Route path='animate' element={<PixiAnimationTest />} />
        </Route>
        <Route path='/react' element={<Home />}>
          <Route path='animate' element={<ReactAnimationTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
