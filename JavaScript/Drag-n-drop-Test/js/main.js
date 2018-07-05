var iBrowsers = document.querySelectorAll("i");
iBrowsers.forEach(function(i) {
    i.addEventListener('click', function() {
        var coolBrowser = document.querySelector("#browsers")
        coolBrowser.appendChild(i);
    });
});