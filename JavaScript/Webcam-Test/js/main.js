window.onload = init;

function init() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(function (stream) {
        let video = document.querySelector("#video");
        video.srcObject = stream;
        video.play();
        let vid = document.createElement("video");
        vid.srcObject = stream;
    }).catch(function (err) {
        alert("Something went wrong: " + err);
    });
}