# App.js - Wheat's micro framework

## What is Wheat's App.js and why should I care?

App.js file is a small javascript library exposing various states of the document, allowing you to smooth out loadings, navigation and image loading with artificial delays and transitions. The inspiration comes from making something useful out of [document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState) but eventually grew into some kind of toolbox I just trow around on all my projects.

## Page loading

- Page starts loading (`_0`).
- `Init`
- `App.currentDepth`
- `App.setLinkBehaviour` takes over internal links clicks to allow for the "`navigating`" series of events.
- `App.setImgBehaviour` listen to images `complete` state. 
- `App.setAdjustedDelay`
- Wait for the end of `interactiveAdjustedDelay` calculated from `interactiveDelay` and `perceivedDelay`
- `App.setState` to interactive
- `appInteractive` event is fired
- `data-state="_01"` is set on `<body>`.
- `App.setCompleteListener`
- All images touched by `setImgBehaviour` are given a `data-state=1` attribute once `complete`.
- The browser's `readyState` switches to `complete`
- Wait for the end of `completeAdjustedDelay` calculated from `completeDelay` and `perceivedDelay`
- `App.setState` to complete
- `appComplete` event is fired
- `data-state="_012"` is set on `<body>`.

## Navigation

- `preventDefault`
- Set `destinatioPath` from `href` attribute.
- Set `destinationDepth` by counting number of `/` is destinationPath.
- Add `<link rel="prerender" href="...">` if a `navivationDelay` is set to try mitigate any drawback from artificial delays.
- Fire the `navigating` and appropriate `navigatingBackward` or `navigatingForward` additional event
- Wait for the end of `navigationDelay`
- `window.location.href` to `destinationPath`

## Images

Typing noise...
