const Links = {
  navigationDelay: 100,

  Watch: function () {
    const target = document.querySelector("#main");
    const config = { childList: true, subtree: true };
    const observer = new MutationObserver(function () {
      Links.Init(document.querySelectorAll("a"), false);
    });
    observer.observe(target, config);
  },

  SetTargetBlank: function (link) {
    link.setAttribute("target", "_blank");
  },

  SetNoopener: function (link) {
    link.setAttribute("rel", "noopener");
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
    }
  },

  Init: function (links, watch) {
    Links.Crawl(links);
    if (watch) {
      Links.Watch();
    }
  },
};

Links.Init(document.querySelectorAll("a"), true);
