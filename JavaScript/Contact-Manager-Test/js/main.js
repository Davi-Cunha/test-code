class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

class ContactManager {
    constructor() {
        this.listOfContacts = [];
    }

    add(contact) {
        this.listOfContacts.push(contact)
    }

    remove(contact) {
        for (let i = 0; i < this.listOfContacts.length; i++) {
            let c = this.listOfContacts[i];

            if (c.firstName === contact.firstName) {
                this.listOfContacts.splice(i, i);
                break;
            }
        }
    }

    printContactToConsole() {
        this.listOfContacts.forEach((list) => {
            console.log(list);
        });
    }

    contactIndex(contactName) {
        let index;
        for (let i = 0; i < this.listOfContacts.length; i++) {
            let name = this.listOfContacts[i].firstName;

            if (name === contactName) {
                index = i;
                break;
            }
        }

        if (index === undefined) {
            return -1;
        }

        return index;
    }


    findContact(contactIndex){
        // IMPORTANT
        // CREATE A METHOD FIND THE CONTACT BY INDEX NUMBER
    }
}

let inputs = document.querySelectorAll(".inputDiv input");
let submitBtn = document.querySelector("#submitBtn");
let contact;
let contactManager = new ContactManager();

submitBtn.addEventListener('click', () => {
    let arr = [];
    inputs.forEach((input) => {
        arr.push(input.value);
        input.value = "";
    });

    contact = new Contact(arr[0], arr[1], arr[2], arr[3]);
    contactManager.add(contact);

    // arr.forEach((array) => {
    //     console.log(array);
    // });
});

let search = document.querySelector(".searchNameDiv #search");
let searchBtn = document.querySelector(".searchNameDiv #searchBtn");

searchBtn.addEventListener('click', () => {
    contactManager.findContact(search.value);
});


