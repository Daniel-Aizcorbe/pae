const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createWindows() {

    mainWindow = new BrowserWindow({
        width: 1360,
        height: 768,
        maximizable: true,
        webPreferences: {
            nodeIntegration: true,
            contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        },
        autoHideMenuBar: false,
    });

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    let direccion = path.join(__dirname, '../public/index.html');
    console.log(direccion);
    mainWindow.loadFile(direccion);
}

app.on("ready", createWindows);