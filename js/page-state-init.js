document.onreadystatechange = function() {
    switch (document.readyState) {
        case "interactive":
        	document.body.setAttribute('data-page-state', 'interactive');
        	console.log('%c PAGESTATE: interactive', 'color:green;');
            break;
        case "complete":
            PageState.Init();
            break;
    }
}