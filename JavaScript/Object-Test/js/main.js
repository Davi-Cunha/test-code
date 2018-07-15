let js1 = {
    courseName: 'JavaScript Introduction',
    weeks: 5,
    madeBy: 'W3Cx',
    author: 'Michael Buffa'
};

let darthVaderAsArray = ['villain', 'half human half machine'];
console.log(darthVaderAsArray[0]);
console.log(darthVaderAsArray[1]);

let darthVaderAsObject = {
    job: 'villain',
    race: 'half human half machine'
};

console.log("\n" + darthVaderAsObject.job);
console.log(darthVaderAsObject.race);
console.log(typeof (darthVaderAsObject));

let book = {
    title: 'Frankenstein',
    'publish date': 1818
};

console.log("\nTitle: " + book.title + "\nPublish date: " + book['publish date']);

let key = 'title';
let book2 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    'publish date': 1979,
    author: {
        name: 'Douglas Noel Adams',
        'date of birth': 'March 11 1952',
        'city of birth': 'Cambridge'
    }
};

console.log("\n" + "Title: " + book2[key] + "\n"
    + "Publish date: " + book2['publish date'] + "\n"
    + "Author name: " + book2.author.name + "\n"
    + "Author's birth date: " + book2.author["date of birth"] + "\n"
    + "Author's city of birth: " + book2.author["city of birth"]);

let dog = {
    name: 'Mili',
    bark: function () {
        return "Au Au!";
    }
};

console.log("\n" + dog.name);
console.log(dog.bark());

let darthVader = {
    race: 'human',
    job: 'villain',
    movieSeries: 'Star Wars',
    talk: function () {
        return 'come to the dark side, Luke!';
    },
    describeYourself: function () {
        return "I'm a " + this.race + " and I'm a " + this.job + " from " + this.movieSeries + " movie series.";
    }
};

function dvSpeak() {
    document.body.innerHTML += "<p>Darth Vader describe yourself: " + darthVader.describeYourself(); + "</p>";
    document.body.innerHTML += "<p>Darth Vader says: " + darthVader.talk(); + "</p>";
}

//Deletes the object properties
function deleteProperties() {
    delete darthVader.race;
    delete darthVader.job;
    delete darthVader.movieSeries;
    delete darthVader.talk;
}

//Constructor function ES5
function HeroES5(name, side) {
    this.name = name;
    this.side = side;
    this.describeYourself = function () {
        return "I'm " + this.name + " and I'm from the " + this.side;
    }
}

let hanSolo = new HeroES5('Han Solo', 'Rebels');
let lukeSkywalker = new HeroES5('Luke Skywalker', 'Rebels');
let darkVader = new HeroES5('Darth Vader', 'Empire');
console.log("\n" + hanSolo.describeYourself());
console.log(lukeSkywalker.describeYourself());
console.log(darkVader.describeYourself());

// ES6 Classes
// In ES6 classes with constructors inside the classes to 
// change or add a variable's content with the reserved word 'new'

class HeroES6 {
    constructor(name, side) {
        this.name = name;
        this.side = side;
        HeroES6.objCreated++;
    }

    speak() {
        this.someOtherMethod();
        return {
            doSomethingElse: this.someOtherMethod(),
            msg: "My name is " + this.name + ", I'm with the " + this.side + "."
        };
    }

    someOtherMethod() {
        return "You call another method from the same class.";
    }
}

HeroES6.objCreated = 0;
let jarjarBinks = new HeroES6('Jar Jar Binks', "Rebels");
console.log(jarjarBinks.speak().doSomethingElse);
console.log(jarjarBinks.speak().msg);
console.log("Number of objects created: " + HeroES6.objCreated);




