let fruitArray = ["apples", "oranges", "bananas", "grapes"];

var h1Index = document.querySelector("#fruit");

for (var i = 0; i < fruitArray.length; i++) {
    h1Index.innerHTML += fruitArray[i] + " ";
}

h1Index.innerHTML += "<br>" + fruitArray.length;

fruitArray.push("watermelon");

h1Index.innerHTML += "<br>" + fruitArray;

h1Index.innerHTML += "<br>" + fruitArray.length;

fruitArray.pop(1);
fruitArray.pop(3);

h1Index.innerHTML += "<br>" + fruitArray;
h1Index.innerHTML += "<br>" + fruitArray.length;

