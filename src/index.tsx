import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './i18n';
import { isElectron } from "./utils/platform";

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

// Register service worker with update detection (web only)
if ('serviceWorker' in navigator && !isElectron()) {
  window.addEventListener('load', () => {
    // Explicitly set the base path for GitHub Pages
    const swUrl = `${process.env.PUBLIC_URL || ''}/service-worker.js`;

    navigator.serviceWorker
      .register(swUrl)
      .then((registration: ServiceWorkerRegistration) => {
        console.log('ServiceWorker registered: ', registration);

        // Check for updates on registration
        registration.update();

        // Check for updates every 60 minutes
        setInterval(() => {
          registration.update();
          console.log('Service worker checking for updates.');
        }, 60 * 60 * 1000);

        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'activated') {
                // New service worker activated
                if (confirm('New version available! Reload to update?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((error: Error) => {
        console.error('ServiceWorker registration failed: ', error);
      });
  });
}
