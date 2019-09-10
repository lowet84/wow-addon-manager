const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname)

let win

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // add this
    }
  })
  win.loadFile('dist/index.html')
}

app.on('ready', createWindow)
