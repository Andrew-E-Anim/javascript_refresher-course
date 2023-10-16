function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;

        case 2: 
            answer = "beta";
            break;

        case 3: 
            answer = "gamma";
            break;

        case 4:
            answer = "delta";
            break;
    }

    return answer;

}

console.log(caseInSwitch(1));


//Default option in switch statement
function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a": 
            answer = "alpha";
            break;

        case "b": 
            answer = "beta";
            break;

        case "c": 
            answer = "gamma";
            break;

        default: 
            answer = "stuff";
            break;
    }

    return answer;

}

console.log(switchOfStuff("b"));

//Multiple switch statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1: 
        case 2:
        case 3:
            answer = "Low";
            break;

        case 3: 
        case 4:
        case 5:
            answer = "Mid";
            break;

        case 6: 
        case 7:
        case 8:
            answer = "High";
            break;
}

    return answer;

}

console.log(sequentialSizes(7));