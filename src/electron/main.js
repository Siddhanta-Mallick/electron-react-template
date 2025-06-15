import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { isDev } from './util.js'
import { getPreloadPath } from './pathResolver.js'

app.whenReady().then(() => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath()
        }
    });
    if (isDev())
        win.loadURL("http://localhost:5123");
    else
        win.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));

    ipcMain.handle('ping', () => {
        return 'pong';
    });
});