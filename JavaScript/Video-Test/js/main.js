window.onload = init;
let vid, videoTime;


function init() {
    console.log("Page is loaded, DOM is ready!");
    vid = document.querySelector("#player");
    videoTime = document.querySelector("#videoTime");

}

function playVideo() {
    vid.play();
}

function pauseVideo() {
    vid.pause();
}

function rewindVideo() {
    vid.currentTime -= 5;
}

