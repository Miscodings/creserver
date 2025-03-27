const { ipcRenderer } = require('electron');

document.querySelectorAll('.selection-btn').forEach(btn => {
    if (btn.id !== 'back-btn') {
        btn.addEventListener('click', (e) => {
            const subject = e.target.textContent;
            ipcRenderer.send('subject-selected', subject);
        });
    }
});

// Back button
document.getElementById('back-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'index.html');
});

// Resource-Pack button
document.getElementById('resourcepacks-btn').addEventListener('click', () => {
    ipcRenderer.send('navigate-to', 'resource_packs/rp_selector.html');
});

// Window controls (reuse from main page)
document.getElementById('minimize-btn').addEventListener('click', () => {
    ipcRenderer.send('window-minimize');
});

document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.send('window-close');
});