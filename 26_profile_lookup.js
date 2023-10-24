var contacts = [
    {

        "firstName": "Akira",
        "lastName": "Lainne",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Poter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagridwnie Points"]

    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            return contacts[i][prop] || "no such property";
        }
    }
    return "No such contact";

}

var data = lookUpProfile("Akira", "likes")
console.log(data);