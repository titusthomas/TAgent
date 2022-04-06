import { app } from 'electron';
import { BrowserWindow } from 'electron/main';
const path = require('path');

app.on('ready', () => {
  console.log('App is ready');
});
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    const indexHTML = path.join(__dirname + '/index.html');
    win.loadFile(indexHTML).then(() => {
        // IMPLEMENT FANCY STUFF HERE
    });
  }

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })