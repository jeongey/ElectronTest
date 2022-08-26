const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');

/** main windows */
function createWindow() {
    /** default app size set */
    const wdMain = new BrowserWindow({
        width: 1080,
        height:720
    });

    if(isDev) {
        wdMain.webContents.openDevTools();        
    }
    
    /** start url or file */
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    wdMain.loadURL(startUrl);
}

/* electron PART */
app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    app.quit();
});