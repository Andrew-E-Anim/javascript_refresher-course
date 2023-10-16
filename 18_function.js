function ourResuableFunction(){
    console.log("Hello, World");
}

ourResuableFunction();

function resuableFunction(){
    console.log("Hi, World");
}

resuableFunction();

//Passing values to a Function with Arguments
function ourFunctionWithArgs(a,b){
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

//Return function
function minusSeven(num){
    return num -7;
}
console.log(minusSeven(10));

function timesFive(num){
    return num * 5;
}
console.log(timesFive(5));

//Return early pattern of function
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2 ));
}

console.log(abTest(-2, 2));