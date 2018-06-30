window.onload = init;
var listImages = document.querySelectorAll("img");

function init() {
  listImages.forEach(function(img) {
    img.style.boxShadow = "0px 2px 3px grey";
    img.style.margin = "10px";
  });
}

var btn = document.querySelector("#btn");
var btn_bw = document.querySelector("#btn-bw");

btn.addEventListener('mouseover', function() {
    listImages.forEach(function(img) {
        img.style.width = "400px";
        img.style.height = "200px";
        img.style.transition = "all .4s ease-in-out"
    });
});

btn.addEventListener('mouseout', function() {
    listImages.forEach(function(img) {
        img.style.width = "200px";
        img.style.height = "100px";
        img.style.transition = "all .4s ease-in-out"
    });
});

btn_bw.addEventListener('mouseover', function() {
    listImages.forEach(function(img) {
        img.style.filter = "grayscale(100%)";
        img.style.transition = "all .4s ease-in-out"
    });
});

btn_bw.addEventListener('mouseout', function() {
    listImages.forEach(function(img) {
        img.style.filter = "grayscale(0%)";
        img.style.transition = "all .4s ease-in-out"
    });
});
