const Pagination = {
    list: null,
    pagination: null,
    trigger: null,
    url: null,
    qsKey: 'articles',
    qsValue: 0,
    qs: new URLSearchParams(),

    Fetch: function() {
        Pagination.trigger.classList.add('disabled', 'waiting');
        fetch(Pagination.url)

        .then(function(r) {
            // return response as text
            return r.text();
        })

        .then(function (r) {

            // Turn response string into dom
            let parser = new DOMParser();
            r = parser.parseFromString(r, 'text/html');

            // Get content of new list
            let el = r.querySelector('[data-pagination-list] .wrapper').innerHTML;

            // Get next trigger from response
            let newTrigger = r.querySelector("[data-pagination] button");

            // Replace old trigger with new one or remove if none is available
            if (!!newTrigger) {
                Pagination.trigger.parentNode.replaceChild(newTrigger, Pagination.trigger);
            } else {
                Pagination.pagination.remove();
            }

            // Add new articles to existing list
            Pagination.list.insertAdjacentHTML('beforeend', el);

            // Update query-string value with current # of articles
            Pagination.qsValue = Pagination.list.children.length;

            // Build qs based on the real number of articles
            Pagination.qs.set(Pagination.qsKey, '0-' + Pagination.qsValue);

            // Swap the current url with the one including the new query
            window.history.replaceState({}, "", `${location.pathname}?${Pagination.qs}`);

            // Make sure new images are handled by App
            App.setImgBehaviour(document.querySelectorAll('img'));

            // Restart the whole process
            Pagination.Init();
        })

        // Handle error
        .catch(function (e) {
            console.log(e);
        })
        
    },

    Init: function() {
        Pagination.list = document.querySelector('[data-pagination-list] .wrapper');
        Pagination.pagination = document.querySelector('[data-pagination]');
        if (!!Pagination.pagination) {
            Pagination.trigger = Pagination.pagination.querySelector('button');
            Pagination.url = Pagination.trigger.getAttribute('href');
            if (!!Pagination.url) {
                Pagination.trigger.addEventListener('click', function(event) {
                    event.preventDefault();
                    Pagination.Fetch();
                })
            }
        }
    },
};

Pagination.Init();
