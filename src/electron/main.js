import { app, BrowserWindow } from 'electron'
import path from 'path'
import { isDev } from './util.js'

app.whenReady().then(() => {
    const win = new BrowserWindow({});
    if (isDev())
        win.loadURL("http://localhost:5123");
    else
        win.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
});