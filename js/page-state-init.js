document.onreadystatechange = function() {
    switch (document.readyState) {
        case "interactive":
        	document.body.setAttribute('data-page-state', 'interactive');
            break;
        case "complete":
            PageState.Init();
            break;
    }
}