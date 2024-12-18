document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");

    videos.forEach((video, index) => {
        video.addEventListener("play", () => {
            videos.forEach((v, i) => {
                if (i !== index) {
                    v.pause();
                }
            });
        });
    });
});
