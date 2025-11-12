import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './i18n';
import { isElectron } from "./utils/platform";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

async function loadFonts() {
  const changaOne = new FontFace(
    'ChangaOne',
    'url("fonts/ChangaOne-Regular.ttf")'
  );
  const lemonMilk = new FontFace('LemonMilk', 'url("fonts/LemonMilk.otf")');
  const lemonMilkBold = new FontFace(
    'LemonMilk',
    'url("fonts/LemonMilkbold.otf")',
    {
      weight: 'bold',
    }
  );
  const lemonMilkBoldItalic = new FontFace(
    'LemonMilk',
    'url("fonts/LemonMilkbolditalic.otf")',
    {
      weight: 'bold',
      style: 'italic',
    }
  );
  const lemonMilkLight = new FontFace(
    'LemonMilk',
    'url("fonts/LemonMilklight.otf")',
    {
      weight: '400',
    }
  );
  const lemonMilkLightItalic = new FontFace(
    'LemonMilk',
    'url("fonts/LemonMilklightitalic.otf")',
    {
      weight: '400',
      style: 'italic',
    }
  );

  await Promise.all([
    changaOne.load(),
    lemonMilk.load(),
    lemonMilkBold.load(),
    lemonMilkBoldItalic.load(),
    lemonMilkLight.load(),
    lemonMilkLightItalic.load(),
  ]);
  document.fonts.add(changaOne);
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

// Register service worker (web only)
if (!isElectron()) {
  serviceWorkerRegistration.register({
    onUpdate: (registration) => {
      if (confirm('New version available! Reload to update?')) {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
        window.location.reload();
      }
    }
  });
}
