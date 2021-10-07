const Collection = {
    list: null,
    pagination: null,
    trigger: null,
    url: null,
    qsKey: 'articles',
    qsValue: 0,
    qs: new URLSearchParams(),

    Fetch: function() {
        Collection.trigger.classList.add('disabled', 'waiting');
        fetch(Collection.url)

        .then(function(r) {
            // return response as text
            return r.text();
        })

        .then(function (r) {

            // Turn response string into dom
            let parser = new DOMParser();
            r = parser.parseFromString(r, 'text/html');

            // Get content of new list
            let el = r.querySelector('[data-list] .wrapper').innerHTML;

            // Get next trigger from response
            let newTrigger = r.querySelector("[data-pagination] button");

            // Replace old trigger with new one or remove if none is available
            if (!!newTrigger) {
                Collection.trigger.parentNode.replaceChild(newTrigger, Collection.trigger);
            } else {
                Collection.pagination.remove();
            }

            // Add new articles to existing list
            Collection.list.insertAdjacentHTML('beforeend', el);

            // Update query-string value with current # of articles
            Collection.qsValue = Collection.list.children.length;

            // Build qs based on the real number of articles
            Collection.qs.set(Collection.qsKey, '0-' + Collection.qsValue);

            // Swap the current url with the one including the new query
            window.history.replaceState({}, "", `${location.pathname}?${Collection.qs}`);

            // Restart the whole process
            Collection.Init();
        })

        // Handle error
        .catch(function (e) {
            console.log(e);
        })
        
    },

    Init: function() {
        Collection.list = document.querySelector('[data-list] .wrapper');
        Collection.pagination = document.querySelector('[data-pagination]');
        if (!!Collection.pagination) {
            Collection.trigger = Collection.pagination.querySelector('button');
            Collection.url = Collection.trigger.getAttribute('href');
            if (!!Collection.url) {
                Collection.trigger.addEventListener('click', function(event) {
                    event.preventDefault();
                    Collection.Fetch();
                })
            }
        }
    },
};

Collection.Init();
