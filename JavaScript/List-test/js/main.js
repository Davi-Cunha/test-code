var count = 0;

var btnToRed = document.querySelector(".btnToRed");
btnToRed.addEventListener('click', function() {
    var redListItem = document. querySelector(".nav li.red");
    redListItem.style.color = "red";
});

var btnUnderline = document.querySelector(".btnUnderline");
btnUnderline.addEventListener('click', function() {
    var underlineListItem = document.querySelectorAll(".nav > li");
    count++;
    underlineListItem.forEach(function(event) {
        if (count % 2 === 0) {
            event.style.textDecoration = "underline";
            console.log("count = " + count);
        } else {
            event.style.textDecoration = "none";
            console.log("count = " + count);
        }
    });
});

var showCheckedItems = document.querySelector(".showCheckedItems");
showCheckedItems.addEventListener('click', function() {
    var listOfSelectedItems = "";
    var checkboxFruits = document.querySelectorAll(".fruitList li input:checked");
    checkboxFruits.forEach(function(elm) {
        listOfSelectedItems += elm.value + " ";
        elm.parentNode.style.color = "green";
    });
    document.querySelector("#selectFruitSelected").innerHTML = "You selected: " + listOfSelectedItems; + " "
});
