var iBrowsers1 = document.querySelectorAll("#browsersList1 i");
iBrowsers1.forEach(function(i) {
    i.addEventListener('click', function() {
        var coolBrowser = document.querySelector("#browsers1")
        coolBrowser.appendChild(i);
        i.onclick = null;
    });
});

var iBrowsers2 = document.querySelectorAll("#browsersList2 i");
iBrowsers2.forEach(function(i) {
    i.addEventListener('dragstart', function(target, evt) {
        evt.dataTransfer.setData("#browsers2", target.id);
    }, false);
});
