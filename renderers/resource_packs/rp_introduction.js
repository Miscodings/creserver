const { ipcRenderer } = require('electron');

function navigateWithTransition(path) {
    const contentBox = document.querySelector('.content-box');
    if (contentBox) {
        contentBox.classList.add('page-exit');
        
        setTimeout(() => {
            ipcRenderer.send('navigate-to', path);
        }, 300); // Match this to your CSS transition duration
    } else {
        ipcRenderer.send('navigate-to', path);
    }
}

function setupNavigation() {
    // Universal window controls
    const minimizeBtn = document.getElementById('minimize-btn');
    const closeBtn = document.getElementById('close-btn');
    
    if (minimizeBtn) minimizeBtn.addEventListener('click', () => ipcRenderer.send('window-minimize'));
    if (closeBtn) closeBtn.addEventListener('click', () => ipcRenderer.send('window-close'));

    // Dynamic navigation handling with transitions
    const navButtons = {
        'mainback-btn': '../views/selector.html',
        'back-btn': 'resource_packs/rp_selector.html',
        'introduction-btn': 'resource_packs/rp_introduction.html',
        '3dmodels-btn': 'resource_packs/rp_3dmodels.html',
        '2dsprites-btn': 'resource_packs/rp_2dsprites.html',
        'glyphs-btn': 'resource_packs/rp_glyphs.html',
        'armor-btn': 'resource_packs/rp_armor.html',
        'furniture-btn': 'resource_packs/rp_furniture.html'
    };

    Object.entries(navButtons).forEach(([id, path]) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => navigateWithTransition(path));
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'complete') {
    setupNavigation();
    document.querySelector('.content-box')?.classList.add('page-enter');
} else {
    document.addEventListener('DOMContentLoaded', () => {
        setupNavigation();
        document.querySelector('.content-box')?.classList.add('page-enter');
    });
}