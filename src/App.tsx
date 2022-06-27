import React from 'react';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { PixiTest } from './components/PixiTest';
import { ReactTest } from './components/ReactTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pixi' element={<Home />}>
          <Route path='/pixi/:id' element={<PixiTest />} />
        </Route>
        <Route path='/react' element={<Home />}>
          <Route path='/react/:id' element={<ReactTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
