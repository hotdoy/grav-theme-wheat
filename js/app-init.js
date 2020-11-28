document.onreadystatechange = function() {
    switch (document.readyState) {
        case "interactive":
            break;
        case "complete":
            App.Init();
            break;
    }
}