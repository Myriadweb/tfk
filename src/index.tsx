import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './i18n';

async function loadFonts() {
  const changaOne =  new FontFace('ChangaOne', 'url("fonts/ChangaOne.ttf")')
  const lemonMilk = new FontFace('LemonMilk', 'url("fonts/LemonMilk.otf")')

  await Promise.all([changaOne.load(), lemonMilk.load()])
  document.fonts.add(changaOne)
  document.fonts.add(lemonMilk)
}

loadFonts();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
