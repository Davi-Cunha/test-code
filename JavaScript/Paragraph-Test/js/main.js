function changeBackgroundColor(id) {
    var paragraphs = document.querySelectorAll("." + id + " p");

    for (var i = 0; i < paragraphs.length; i++ ) {
        paragraphs[i].style.backgroundColor = "lightGreen";
    }
}
