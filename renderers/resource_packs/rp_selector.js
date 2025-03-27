const { ipcRenderer } = require('electron');

// Back button
document.getElementById('back-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'selector.html');
});

// Introduction button
document.getElementById('introduction-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'resource_packs/rp_introduction.html');
});

// 3D-Models button
document.getElementById('3dmodels-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'resource_packs/rp_3dmodels.html');
});

// 2D-Sprites button
document.getElementById('2dsprites-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'resource_packs/rp_2dsprites.html');
});

document.getElementById('glyphs-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'resource_packs/rp_glyphs.html');
});

document.getElementById('armor-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'resource_packs/rp_armor.html');
});

document.getElementById('furniture-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'resource_packs/rp_furniture.html');
});

// Window controls (reuse from main page)
document.getElementById('minimize-btn').addEventListener('click', () => {
    ipcRenderer.send('window-minimize');
});

document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.send('window-close');
});