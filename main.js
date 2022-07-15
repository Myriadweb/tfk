// eslint-disable
// Electron configuration file

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { app, BrowserWindow } = require('electron');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { dev } = require('electron-is');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const isDev = dev();

const createMainWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 1080,
    height: 1920,
    webPreferences: {
      nodeIntegration: false,
      zoomFactor: 1,
    },
    zoomToPageWidth: true,
    scaleFactor: 1,
    show: false,
    center: true,
    fullscreenable: true,
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, 'build/index.html')}`
  );

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.webContents.setZoomFactor(isDev ? 0.5 : 1);
    mainWindow.setSize(...(isDev ? [540, 960] : [1080, 1920]));
    mainWindow.show()
  });

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
