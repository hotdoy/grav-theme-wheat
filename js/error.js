htmx.on("htmx:responseError", function (e) {
    console.log(e.detail.xhr.status);
    window.location.href = 'error';
})