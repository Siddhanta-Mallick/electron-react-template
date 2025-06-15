import { app } from "electron";
import path from 'path'
import { isDev } from "./util.js";
export function getPreloadPath() {
    if (isDev) {
        return path.join(app.getAppPath(), './src/electron/preload.cjs');
    } else {
        return path.join(app.getAppPath(), '../src/electron/preload.cjs')
    }
}