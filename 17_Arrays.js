var ourArray = ["Andrew", 27];

var myArray = ["Emmanuel", 20];

//Nested arrays
var ourArray = [["the universe", 47], ["everything", 101010]];

//Accessing array with index

var ourArray = [50, 60, 27];

var ourData = ourArray[0];

var myArray = [50, 60, 70];
var myData = myArray[0];

console.log(myData);

//Modifying arrays with indexes
var ourArray = [50, 60, 27];
ourArray[1] = 45;

var myArray = [18, 65, 99];
myArray[0] = 58;
console.log(myArray);

//Multi-dimensional arrays
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[0][0];
console.log(myData);

//Manipulate array with push
var ourArray = ["Andrew", "John", "Kia"];
ourArray.push(["Anim", "Rio"]);

var myArray = ["Andrew", "John", "Kia"];
myArray.push(["Emmanue", "Spectra"]);

//Manipulate array with pop
var ourArray = [50, 60, 27];
var removedFromOurArrray = ourArray.pop();

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();
console.log(myArray);

//.shift() works like the pop() but shift() removes the first item in the array