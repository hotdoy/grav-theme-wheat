(function () {
  "use strict";

  const InitShare = function () {
    const shareButtons = document.querySelectorAll("[data-share-button]");
    const shareDialog = document.getElementById("share__dialog");
    const closeDialogButton = shareDialog.getElementsByClassName(
      "share__dialog__close"
    );
    const title = document.title;
    const url = window.location.href;
    const targets = shareDialog.getElementsByClassName("js-share-target");

    // Share Buttons
    for (let shareButton of shareButtons) {
      shareButton.addEventListener("click", (event) => {
        if (navigator.share) {
          navigator.share({
            title: title,
            url: url,
          });
          console.log("Thanks for sharing!");
        } else {
          console.log("Share API not supported!");
          shareDialog.classList.add("share__dialog--on");
        }
      });
    }

    // Close button
    for (let btn of closeDialogButton) {
      btn.addEventListener("click", (event) => {
        if (shareDialog.classList.contains("share__dialog--on")) {
          shareDialog.classList.remove("share__dialog--on");
        }
        event.stopImmediatePropagation;
      });
    }

    // Close by outside click
    shareDialog.addEventListener("click", (event) => {
      if (
        event.target == shareDialog &&
        shareDialog.classList.contains("share__dialog--on")
      ) {
        shareDialog.classList.remove("share__dialog--on");
      }
    });

    for (let target of targets) {
      if (target.classList.contains("facebook")) {
        target.addEventListener("click", (event) => {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        });
      } else if (target.classList.contains("twitter")) {
        target.addEventListener("click", (event) => {
          window.open(
            `https://twitter.com/intent/tweet?url=${url}&title=${title}`
          );
        });
      } else if (target.classList.contains("linkedin")) {
        target.addEventListener("click", (event) => {
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
          );
        });
      } else if (target.classList.contains("reddit")) {
        target.addEventListener("click", (event) => {
          window.open(`https://reddit.com/submit?url=${url}&title=${title}`);
        });
      } else if (target.classList.contains("email")) {
        target.addEventListener("click", (event) => {
          window.open(`mailto:?subject=${title}&body=${url}`);
        });
      }
    }
  };
  InitShare();
})();
