let ytPlayers = document.querySelectorAll(".youtube-player");

(function() {
    "use strict";
    const InitYt = function() {
        if (ytPlayers.length) {
            let tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            let firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    };
    InitYt();
})();

// iframe_api callback
function onYouTubeIframeAPIReady() {
    ytPlayers.forEach((ytPlayer) => {
        var player = new YT.Player(ytPlayer.id, {
            videoId: ytPlayer.dataset.videoid,
        });
    });
}