var count = 0;

var btnToRed = document.querySelector(".btnToRed");
btnToRed.addEventListener('click', function () {
    var redListItem = document.querySelector(".nav li.red");
    redListItem.style.color = "red";
});

var btnUnderline = document.querySelector(".btnUnderline");
btnUnderline.addEventListener('click', function () {
    var underlineListItem = document.querySelectorAll(".nav > li");
    count++;
    underlineListItem.forEach(function (event) {
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
showCheckedItems.addEventListener('click', function () {
    var listOfSelectedItems = "";
    var checkboxFruits = document.querySelectorAll(".fruitList li input:checked");
    checkboxFruits.forEach(function (elm) {
        listOfSelectedItems += elm.value + " ";
        elm.parentNode.style.color = "green";
    });
    document.querySelector("#selectFruitSelected").innerHTML = "You selected: " + listOfSelectedItems; + " "
});


var resetBtn = document.querySelector(".resetButton");
resetBtn.addEventListener('click', function () {
    var list = document.querySelectorAll(".fruitList li input");
    list.forEach(function (elm) {
        // uncheck
        elm.checked = false;

        // remove CSS decoration
        var liParent = elm.parentNode;
        liParent.classList.remove("checked");
        liParent.style.color = "black";
    });
    document.querySelector("#selectFruitSelected").innerHTML = "";
});