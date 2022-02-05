# App.js - Wheat's micro framework

## What is Wheat's App.js and why should I care?

App.js file is a small javascript library exposing various states of the document, allowing loader, navigation effects and smoother image loading with artificial delays and transitions.

## What's happening when a page loads

- `Init`
- `App.currentDepth` is set
- `App.setLinkBehaviour` takes over same domain links to allow for the `navigating` series of events.
- `App.setImgBehaviour` listen to images `complete` state.
- `App.setAdjustedDelay` takes into account delays already experienced by the user.
- Wait for the end of `interactiveAdjustedDelay` calculated from `interactiveDelay` and `perceivedDelay`.
- `App.setState` to interactive.
- `appInteractive` event is fired.
- `data-state="_01"` is set on `<body>`.
- `App.setCompleteListener` listen for `readyState` to be `complete`.
- All images touched by `setImgBehaviour` are given a `data-state=1` attribute once `complete`.
- The browser's `readyState` switches to `complete`.
- Wait for the end of `completeAdjustedDelay` calculated from `completeDelay` and `perceivedDelay`.
- `App.setState` to complete.
- `appComplete` event is fired.
- `data-state="_012"` is set on `<body>`.

## When a link to the same domain is clicked

- `preventDefault`
- Set `destinatioPath` from `href` attribute.
- Set `destinationDepth` by counting number of `/` is destinationPath.
- Add `<link rel="prerender" href="...">` if a `navivationDelay` is set to try mitigate any drawback from artificial delays.
- Fire the `navigating` and appropriate `navigatingBackward` or `navigatingForward` additional event
- Wait for the end of `navigationDelay`
- `window.location.href` to `destinationPath`

## Images

By default, Wheat is set to add `data-state="1"` to any `img` once it finished loading the asset and the tries to delete any `style` attribute fout on the image, taking for granted that you are using the File Content plugin to generate ultra low-res placeholders. You can change this behaviour by modifying the `setImgBehaviour` function.
A CSS fade-in exemple is also commented in `app.css` if you ever whantto fo for a more "native app" feel.

## Js events

- `appInteractive`
- `appComplete`
- `appNavigating`
- `appNavigatingForward`
- `appNavigatingBackward`

## CSS Body selector

- `body[data-state^='_0']`
- `body[data-state^='_01']`
- `body[data-state^='_012']`
- `body[data-state*='_nav']`
- `body[data-state*='_nav-f']`
- `body[data-state*='_nav-b']`

See `app.css` for exemples. All the necessary code to add a site loader can also be found in `loader.css` and `loader.html.twig`.
