var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You give love a bad name"
        ]
    },

    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little red Corvette"
        ]
    },

    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },

    "2548": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);   
    } else {
        collection[id][prop] = value;
    }

return collection;
}
updateRecords(2468, "tracks", "test")
console.log(updateRecords(5439, "artist", "ABBA"));

