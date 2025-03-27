const path = require('path');

const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
  
    win.loadFile('views/index.html')

    ipcMain.on('window-minimize', () => {
        win.minimize();
    });

    ipcMain.on('window-close', () => {
        win.destroy();
    });

    ipcMain.on('load-new-page', () => {
        win.loadFile('views/selector.html');
    });

    ipcMain.on('navigate-to', (event, page) => {
        const win = BrowserWindow.getFocusedWindow();
        win.loadFile(path.join(__dirname, 'views', page));
    });

    win.maximize()

}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
  
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})