// Object Array
let anArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Parses the object 'anArray' into a JSON String
let JSONFormat = JSON.stringify(anArray);
// Complex JavaScript object
let complexObject = {
    name: 'Metallica',
    album:[
        {
            name: "Master of Puppets",
            year: 1986
        },
        {
            name: "Black Album",
            year: 1991
        }
    ]
};

console.log(typeof(anArray))
console.log(anArray);
console.log(typeof(JSONFormat))
console.log(JSONFormat);

JSONFormat = JSON.stringify(complexObject);
console.log(typeof(JSONFormat));
console.log(JSONFormat);

// Parses JSON which is a JSON String into a JavaScript Object and allows its properties to be accessed 
let JSONObject = JSON.parse(JSONFormat);
console.log(JSONObject.name);



