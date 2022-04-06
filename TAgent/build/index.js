"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var main_1 = require("electron/main");
var path = require('path');
electron_1.app.on('ready', function () {
    console.log('App is ready');
});
var createWindow = function () {
    var win = new main_1.BrowserWindow({
        width: 800,
        height: 600
    });
    var indexHTML = path.join(__dirname + '/index.html');
    win.loadFile(indexHTML).then(function () {
        // IMPLEMENT FANCY STUFF HERE
    });
};
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on('activate', function () {
        if (main_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
