const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

const DEV_PATH = "http://localhost:3000";
const PROD_PATH = `file://${path.join(__dirname, "../build/index.html")}`;

const WINDOW_SPECS = {
  WIDTH: 1024,
  HEIGHT: 680
};

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: WINDOW_SPECS.WIDTH,
    height: WINDOW_SPECS.HEIGHT
  });
  mainWindow.loadURL(isDev ? DEV_PATH : PROD_PATH);
  mainWindow.on("closed", () => (mainWindow = null));
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
