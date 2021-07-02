const Pagination = {
    list: {},
    ui: {},
    btn: {},
    url: {},
    result: {},

    Request: function() {
        Pagination.btn.classList.add('disabled', 'waiting');
        let request = new XMLHttpRequest();
        request.responseType = "document";
        request.open("GET", Pagination.url, true);
        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                Pagination.result = this.response;
                Pagination.AppendResult();
            } else {
                console.log("PAGINATION - SERVER STATUS: " + this.status);
            }
        };
        request.onerror = function() {
            console.log("PAGINATION - ERROR " + this.status);
        };
        request.send();
    },

    AppendResult: function() {
        const articles = Pagination.result.querySelector("[data-pagination-list]")
            .innerHTML;
        Pagination.list.insertAdjacentHTML("beforeend", articles);
        Pagination.UpdateUi();
        Pagination.UpdateParams();
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
                    Pagination.Request();
                });
            }
        }
    },
};

Pagination.Init();
