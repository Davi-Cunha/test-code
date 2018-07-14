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
    bark: function() {
        console.log("AU AU!");
    }
};

console.log("\n" + dog.name);
dog.bark();

let darthVader = {
    race: 'human',
    job: 'villain',
    movieSeries: 'Star Wars',
    talk: function() {
        return 'come to the dark side, Luke!';
    },
    describeYourself: function() {
        return "I'm a " + this.race + " and I'm a " + this.job + " from " + this.movieSeries + " movie series.";
    }
};

function dvSpeak() {
    document.body.innerHTML += "<p>Darth Vader describe yourself: " + darthVader.describeYourself(); + "</p>";
    document.body.innerHTML += "<p>Darth Vader says: " + darthVader.talk(); + "</p>"; 
}

function deleteProperties() {
    delete darthVader.race;
    delete darthVader.job;
    delete darthVader.movieSeries;
    delete darthVader.talk;
}


