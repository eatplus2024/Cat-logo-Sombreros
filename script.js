document.addEventListener("DOMContentLoaded", () => {
    // Apply background dynamically
    document.body.style.background = "url('https://example.com/imagen-vaqueria.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    // Pause other videos when one is playing
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

    // Generate buttons dynamically
    const catalog = document.querySelector(".catalog");
    const hats = [
        {
            title: "Sombrero Llanero",
            videoSrc: "https://example.com/video-sombrero1.mp4",
            whatsappLink: "https://wa.me/1234567890?text=Hola,%20quiero%20cotizar%20el%20Sombrero%20Llanero%20(Video:%20https://example.com/video-sombrero1.mp4)"
        },
        {
            title: "Sombrero Vaquero",
            videoSrc: "https://example.com/video-sombrero2.mp4",
            whatsappLink: "https://wa.me/1234567890?text=Hola,%20quiero%20cotizar%20el%20Sombrero%20Vaquero%20(Video:%20https://example.com/video-sombrero2.mp4)"
        }
    ];

    catalog.innerHTML = '<h1>Catálogo de Sombreros</h1>';
    
    hats.forEach(hat => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";

        videoItem.innerHTML = `
            <h2>${hat.title}</h2>
            <video src="${hat.videoSrc}" controls></video>
            <a class="quote-button" href="${hat.whatsappLink}" target="_blank">Cotizar</a>
        `;

        catalog.appendChild(videoItem);
    });
});
