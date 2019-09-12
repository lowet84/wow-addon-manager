const { app, BrowserWindow } = require('electron')
console.log(__dirname)
require('electron-reload')(__dirname + '/dist')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true // add this
    }
  })
  win.loadFile('dist/index.html')
}

app.on('ready', createWindow)
