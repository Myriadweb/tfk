import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './i18n';

async function loadFonts() {
  const changaOne = new FontFace('ChangaOne', 'url("fonts/ChangaOne.ttf")');
  const changaOneItalic = new FontFace('ChangaOneItalic', 'url("fonts/ChangaOne-italic.ttf")');
  const lemonMilk = new FontFace('LemonMilk', 'url("fonts/LemonMilk.otf")');
  const lemonMilkBold = new FontFace('LemonMilkBold', 'url("fonts/LemonMilkbold.otf")');
  const lemonMilkBoldItalic = new FontFace('LemonMilkBoldItalic', 'url("fonts/LemonMilkbolditalic.otf")');
  const lemonMilkLight = new FontFace('lemonMilkLight', 'url("fonts/LemonMilklight.otf")');
  const lemonMilkLightItalic = new FontFace('lemonMilkLightItalic', 'url("fonts/LemonMilklightitalic.otf")');

  await Promise.all([changaOne.load(), changaOneItalic.load(), lemonMilk.load(), lemonMilkBold.load(), lemonMilkBoldItalic.load(), lemonMilkLight.load(), lemonMilkLightItalic.load()]);
  document.fonts.add(changaOne);
  document.fonts.add(changaOneItalic);
  document.fonts.add(lemonMilk);
  document.fonts.add(lemonMilkBold);
  document.fonts.add(lemonMilkBoldItalic);
  document.fonts.add(lemonMilkLight);
  document.fonts.add(lemonMilkLightItalic);
}

loadFonts();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
