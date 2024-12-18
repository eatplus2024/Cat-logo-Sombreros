document.addEventListener("DOMContentLoaded", () => {
    // Select catalog container
    const catalog = document.querySelector(".catalog");

    // Define hat data
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

    // Create header
    const header = document.createElement("h1");
    header.textContent = "Catálogo de Sombreros";
    header.style.marginBottom = "40px";
    catalog.appendChild(header);

    // Generate hat items dynamically
    hats.forEach(hat => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";

        const title = document.createElement("h2");
        title.textContent = hat.title;

        const video = document.createElement("video");
        video.src = hat.videoSrc;
        video.controls = true;

        const button = document.createElement("a");
        button.href = hat.whatsappLink;
        button.target = "_blank";
        button.textContent = "Cotizar";

        videoItem.appendChild(title);
        videoItem.appendChild(video);
        videoItem.appendChild(button);

        catalog.appendChild(videoItem);
    });
});
