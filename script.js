const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg"
];

let currentPhoto = 0;

function openGallery(photoNumber) {
    currentPhoto = photoNumber;

    document.getElementById("viewer-image").src = photos[currentPhoto];
    document.getElementById("viewer").style.display = "flex";
}

function closeGallery() {
    document.getElementById("viewer").style.display = "none";
}

function changePhoto(direction) {
    currentPhoto = currentPhoto + direction;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    document.getElementById("viewer-image").src = photos[currentPhoto];
}



/* =========================
   VIDEO GALLERY
   ========================= */

const videos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4"
];

let currentVideo = 0;

// Open a video
function openVideo(index) {

    if (!videos[index]) return;

    currentVideo = index;

    const viewer = document.getElementById("video-viewer");
    const player = document.getElementById("active-video");

    if (!viewer || !player) return;

    player.pause();
    player.src = videos[currentVideo];
    player.load();

    viewer.style.display = "flex";

    player.play().catch(() => {});
}

// Change video using arrows
function changeVideo(direction) {

    if (videos.length === 0) return;

    currentVideo =
        (currentVideo + direction + videos.length) % videos.length;

    const player = document.getElementById("active-video");

    if (!player) return;

    player.pause();
    player.src = videos[currentVideo];
    player.load();

    player.play().catch(() => {});
}

// Close the video viewer
function closeVideo() {

    const viewer = document.getElementById("video-viewer");
    const player = document.getElementById("active-video");

    if (!viewer || !player) return;

    player.pause();
    player.removeAttribute("src");
    player.load();

    viewer.style.display = "none";
}

// Keyboard controls
document.addEventListener("keydown", function(event) {

    const viewer = document.getElementById("video-viewer");

    if (!viewer || viewer.style.display !== "flex") return;

    if (event.key === "Escape") {
        closeVideo();
    }

    if (event.key === "ArrowLeft") {
        changeVideo(-1);
    }

    if (event.key === "ArrowRight") {
        changeVideo(1);
    }

});
