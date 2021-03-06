const Links = {
    navigationDelay: 100,

    Watch: function() {
        const target = document.querySelector("#main");
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(function() {
            Links.Init(document.querySelectorAll("a"), false);
        });
        observer.observe(target, config);
    },

    SetTargetBlank: function(link) {
        link.setAttribute("target", "_blank");
    },

    SetNoopener: function(link) {
        link.setAttribute("rel", "noopener");
    },

    Crawl: function(links) {
        for (let link of links) {

            // HREF
            const href = link.getAttribute("href");

            // EXTERNAL
            if (!!href && href.match("^http")) {
                Links.SetTargetBlank(link);
                Links.SetNoopener(link);
            }

            // NAVIGATION
            else if (!!href && href.match("^/")) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    PageState.UpdateState();
                    setTimeout(function(){ 
                        window.location.href = href;
                    }, PageState.navigationDelay);

                  },
                  false);
            }
        }
    },

    Init: function(links, watch) {
        Links.Crawl(links);
        if (watch) {
            Links.Watch();
        }
    },
};

Links.Init(document.querySelectorAll("a"), true);
