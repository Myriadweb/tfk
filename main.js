// Electron configuration file

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { app, BrowserWindow } = require('electron');

const isProductionBuild = process.env.NODE_ENV === 'production';

const config = {
  width: isProductionBuild ? 1080 : 540,
  height: isProductionBuild ? 1920 : 960,
  webPreferences: {
    nodeIntegration: false,
    zoomFactor: isProductionBuild ? undefined : 0.5,
  }
}

const createMainWindow = () => {
  let mainWindow = new BrowserWindow({
    ...config,
    show: false,
    backgroundColor: 'white',
    center: true,
    fullscreen: false,
  });
  const startURL = 'http://localhost:3000/';

  mainWindow.loadURL(startURL);

  mainWindow.once('ready-to-show', () => mainWindow.show());

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
