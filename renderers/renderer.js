const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {

    // Event listeners for window control buttons
    document.getElementById('close-btn').addEventListener('click', () => {
        ipcRenderer.send('window-close');
    });

    document.getElementById('minimize-btn').addEventListener('click', () => {
        ipcRenderer.send('window-minimize');
    });

    document.getElementById('begin-btn').addEventListener('click', () => {
        ipcRenderer.send('load-new-page');
    });
});
