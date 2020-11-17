document.addEventListener("DOMContentLoaded", function(event) {
    const videos = document.getElementsByClassName("video-container");
    const state = {};
    for (let i = 0; i < videos.length; i++) {
        state[i] = false;
        videos[i].onclick = function() {
            let video = videos[i].getElementsByTagName("video")[0];
            if (state[i]) {
                video.pause();
                state[i] = false;
                videos[i].classList.remove("playing");
            } else {
                video.play();
                state[i] = true;
                videos[i].classList.add("playing");
            }
        };
    }
});
