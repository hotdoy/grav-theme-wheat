if (document.monetization) {
    document.monetization.addEventListener('monetizationstart', () => {
        console.log('💰');
        const t = new Date().getTime();
        const m = localStorage.getItem('monetization');
        if ((t - m) > (86400000)) {
            localStorage.setItem('monetization', t);
            Dialog.open('dialog-monetization');
        }
    })
}
