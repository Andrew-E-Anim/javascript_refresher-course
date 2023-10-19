//while loops
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//for loop
var ourArray = [];

for(var i = 0; i < 5; i++){
    ourArray.push(i);
}

console.log(ourArray);

var anArray = [];

for(var i = 0; i < 6; i++){
    anArray.push(i);
}

console.log(anArray);

//loop by even numbers
var evenArray = [];

for(var i = 0; i < 6; i += 2){
    evenArray.push(i);
}

console.log(evenArray);

//loop by odd numbers
var oddArray = [];

for(var i = 1; i < 10; i += 2){
    oddArray.push(i);
}

console.log(oddArray);

//count backwards with for loop
var evenArray = [];

for(var i = 10; i > 0; i -= 2){
    evenArray.push(i);
}

console.log(evenArray);

var oddArray = [];

for(var i = 9; i > 0; i -= 2){
    oddArray.push(i);
}

console.log(oddArray);

//Iterate through an array
var myArr = [2, 3, 4, 5, 6]
var total = 0;

for(var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

//Nested loops
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product;
}

var product = multiplyAll([1, 2], [3, 4], [5, 6, 7]);
console.log(product);  

//do while and while loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while(i < 5)

console.log(i, myArray);