const Pagination = {
    list: {},
    ui: {},
    btn: {},
    url: {},
    result: {},

    Fetch: function() {
        Pagination.btn.classList.add('disabled', 'waiting');

        fetch(Pagination.url)

        .then(function(r) {
            // return response as text
            return r.text();
        })

        .then(function (text) {

            // init DOM parser
            let parser = new DOMParser();
            let doc = parser.parseFromString(text, 'text/html');


            Pagination.result = doc;
            let articles = doc.querySelector("[data-pagination-list]").innerHTML;
            Pagination.list.insertAdjacentHTML("beforeend", articles);
            Pagination.UpdateUi();
            Pagination.UpdateParams();
        })

        // Handle error
        .catch(function (e) {
            console.log(e);
        })
        
    },

    UpdateUi: function() {
        let newUi = Pagination.result.querySelector("[data-pagination-ui]");
        if (!!newUi) {
            Pagination.ui.parentNode.replaceChild(newUi, Pagination.ui);
        } else {
            Pagination.ui.parentNode.remove();
        }
        Pagination.Init();
    },

    UpdateParams: function() {
        const key = "articles";
        const length = Pagination.list.children.length;
        const value = "0-" + length;
        const params = new URLSearchParams();
        params.set(key, value);
        window.history.replaceState({}, "", `${location.pathname}?${params}`);
    },

    Init: function() {
        Pagination.list = document.querySelector("[data-pagination-list]");
        Pagination.ui = document.querySelector("[data-pagination-ui]");
        Pagination.btn = document.querySelector("[data-pagination-ui-btn]");
        if (!!Pagination.btn) {
            Pagination.url = Pagination.btn.getAttribute("href");
            if (!!Pagination.ui && !!Pagination.url && !!Pagination.list) {
                Pagination.btn.addEventListener("click", (event) => {
                    event.preventDefault();
                    Pagination.Fetch();
                });
            }
        }
    },
};

Pagination.Init();
