import { app, BrowserWindow, Menu } from 'electron';
import * as node_server from 'node-static';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const dir_name = fileURLToPath(import.meta.url);
let main_window;
let server;

app.on("ready", async ()=>{
  main_window = new BrowserWindow({
    width: 1280,
    height: 864,
    // icon: path.join(path.dirname(dir_name), "favicon.png"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // 메뉴바 없애기
  Menu.setApplicationMenu(null);

  // 보여줄 화면
  if (process.env.NODE_ENV === "development") main_window.webContents.openDevTools();
  else {
    // 정적 파일 서버를 위한 객체 생성
    const file = new node_server.Server(path.join(path.dirname(dir_name), "../dist"));

    server = http.createServer(function (req, res) {
      // 요청에 대해 파일을 서빙
      file.serve(req, res);
    }).listen(3000, () => {});
  }

  await main_window.loadURL("http://localhost:3000");
});

app.on("window-all-closed", () => {
  if (process.platform !== 'darwin'){
    if(server){
      server.close();
    }
    app.quit();
  }
});