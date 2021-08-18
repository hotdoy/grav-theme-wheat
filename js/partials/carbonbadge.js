const cb = document.getElementById('carbonbadge');
const cb_url = encodeURIComponent(window.location.href)

const newRequest = function (render = true) {
    // Run the API request because there is no cached result available
    fetch('https://api.websitecarbon.com/b?url=' + cb_url)
        .then(function (r) {
            if (!r.ok) {
                throw Error(r);
            }
            return r.json();
        })

        .then(function (r) {
            if (render) {
                renderResult(r)
            }

            // Save the result into localStorage with a timestamp
            r.t = new Date().getTime()
            localStorage.setItem('carbonbadge_'+cb_url, JSON.stringify(r))
        })

        // Handle error responses
        .catch(function (e) {
            cb.innerHTML = '[unable to evaluate carbon footprint]'
            console.log(e);
            localStorage.removeItem('carbonbadge_'+cb_url)
        })
}

const renderResult = function (r) {
    cb.innerHTML = r.c + 'g of CO<sub>2</sub>'
}

if (('fetch' in window)) { // If the fetch API is not available, don't do anything.

    // Get result if it's saved
    let cachedResponse = localStorage.getItem('carbonbadge_' + cb_url)
    const t = new Date().getTime()

    // If there is a cached response, use it
    if (cachedResponse) {
        const r = JSON.parse(cachedResponse)
        renderResult(r)

        // If time since response was cached is over a day, then make a new request and update the cached result in the background
        if ((t - r.t) > (86400000)) {
            newRequest(false)
        }

    // If no cached response, then fetch from API
    } else {
        newRequest()
    }
}
