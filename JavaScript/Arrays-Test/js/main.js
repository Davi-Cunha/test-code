let fruitArray = ["apples", "oranges", "bananas", "grapes"];
let person = [
    { givenName: 'Michael', familyName: 'Buffa', age: '51' },
    { givenName: 'Davi', familyName: 'Cunha', age: '21' },
    { givenName: 'Milton', familyName: 'Santos', age: '53' },
    { givenName: 'Darien', familyName: 'Lyons', age: '25' }
]

var h1Index = document.querySelector("#fruit");

for (var i = 0; i < fruitArray.length; i++) {
    h1Index.innerHTML += fruitArray[i] + " ";
}
h1Index.innerHTML += "<br>" + fruitArray.length;
fruitArray.push("watermelon");
h1Index.innerHTML += "<br>" + fruitArray;
h1Index.innerHTML += "<br>" + fruitArray.length;
for (var i = 0; i <= fruitArray.length; i++) {
    fruitArray.pop();
}
h1Index.innerHTML += "<br>" + fruitArray;
h1Index.innerHTML += "<br>" + fruitArray.length;

h1Index.innerHTML += "<br>" + person[0].givenName + " " + person[0].familyName + " " + person[0].age + "<br>"
    + person[1].givenName + " " + person[1].familyName + " " + person[1].age + "<br>"
    + person[2].givenName + " " + person[2].familyName + " " + person[2].age + "<br>"
    + person[3].givenName + " " + person[3].familyName + " " + person[3].age;

person = person.sort(compareByAge);

h1Index.innerHTML += "<br>";

h1Index.innerHTML += "<br>" + person[0].givenName + " " + person[0].familyName + " " + person[0].age + "<br>"
    + person[1].givenName + " " + person[1].familyName + " " + person[1].age + "<br>"
    + person[2].givenName + " " + person[2].familyName + " " + person[2].age + "<br>"
    + person[3].givenName + " " + person[3].familyName + " " + person[3].age;

function compareByAge(a, b) {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return 1;
    }
    return 0;
}

let myarr = ['yellow', 'blue', 'red', 'black', 'white', 'green', 'pink'];

myarr.forEach(function (array) {
    h1Index.innerHTML += "<br>" + array;
});

mYarr = myarr.sort();

myarr.forEach(function (array) {
    h1Index.innerHTML += "<br>" + array;
});

let myarr2 = [4, 2, 1, 3, 'one', 'three', 'two', 'four'];

myarr2.forEach(function(array2) {
    h1Index.innerHTML += "<br>" + array2;
});

myarr2.sort();

myarr2.forEach(function(array2) {
    h1Index.innerHTML += "<br>" + array2;
});

myarr2 = myarr2.splice(2, 4);

myarr2.forEach(function(array2) {
    h1Index.innerHTML += "<br>" + array2;
});

// myarr2 = myarr2.pop();

// myarr2.forEach(function(array2) {
//     h1Index.innerHTML += "<br>" + array2;
// });

// myarr2 = myarr2.push("ten");

// myarr2.forEach(function(array2) {
//     h1Index.innerHTML += "<br>" + array2;
// });
