// eslint-disable-next-line @typescript-eslint/no-var-requires
const { app, BrowserWindow } = require('electron');

const createMainWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 540,
    height: 960,
    show: false,
    backgroundColor: 'white',
    center: true,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: false
    }
  });
  const startURL = 'http://localhost:3000';

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
