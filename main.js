const { app, BrowserWindow } = require('electron')

function createWindow(){
        let win = new BrowserWindow({
            width:320,
            height:210,
            x: 100,
            y : 200,
            frame : false,
            titleBarStyle : 'hidden',
            webPreferences:{
                nodeIntegration : true
            }
        })

        // win.loadURL('https://wp.m.163.com/163/page/news/virus_report/index.html?_nw_=1&_anw_=1')
        win.loadFile('./index.html')
    
}

app.whenReady().then(()=>createWindow())