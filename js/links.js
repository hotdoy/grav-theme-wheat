const Links = {
  navigationDelay: 100,

  Init: function (links, watch) {
    Links.Crawl(links);
    if (watch) {
      Links.Watch();
    }
  },

  Watch: function () {
    const target = document.querySelector("#main");
    const config = { childList: true, subtree: true };
    const observer = new MutationObserver(function () {
      Links.Init(document.body.querySelectorAll("a"), false);
    });
    observer.observe(target, config);
  },

  SetTargetBlank: function (link) {
    link.setAttribute("target", "_blank");
  },

  SetNoopener: function (link) {
    link.setAttribute("rel", "noopener");
  },

  SetNavigationEvent: function (link, href) {
    link.addEventListener(
      "click",
      function (event) {
        document.body.classList.add("navigating");

        // use this to add fake delays for outro
        // event.preventDefault();
        // setTimeout(function () {
        //   window.location.href = href;
        // }, Links.navigationDelay);
        
      },
      false
    );
  },

  Crawl: function (links) {
    for (let link of links) {
      // GET HREF
      const href = link.getAttribute("href");

      // CONSIDER URLS STARTING WITH HTTP AS EXTERNAL LINKS
      if (!!href && href.match("^http")) {
        Links.SetTargetBlank(link);
        Links.SetNoopener(link);
      }

      // CONSIDER URLS STARTING WITH / AS NAVIGATION LINKS
      else if (!!href && href.match("^/")) {
        Links.SetNavigationEvent(link, href);
      }
    }
  },
};

Links.Init(document.body.querySelectorAll("a"), true);
