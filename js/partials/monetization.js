if (document.monetization) {
    document.monetization.addEventListener('monetizationstart', () => {
        Dialog.open('dialog-monetization');
    })
}
