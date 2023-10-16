function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No it's false"
}
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

//Equality Operator
function testEqual(val) {
    if (val == 12) {
        return "Equal"
    }
    return "Not Equal"
}

console.log(testEqual(10));

// Strict Equality Operator
function testStrict(val) {
    if (val === 7) {
        return "Equal"
    }
    return "Not Equal"
}

console.log(testStrict(7));

// Equality and Strict equality
function compareEquality(a, b) {
    if (a === b) {
        return "Equal"
    }
    return "Not Equal"
}
console.log(compareEquality(10, "10"));

//Comparison with Inequality operator
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal"
    }
    return "Equal"
}

console.log(testNotEqual(10));

//Comparison with Strict Inequality operator
function testStrictNotEqual(val) {
    if (val !== 7) {
        return "Not Equal"
    }
    return "Equal"
}

console.log(testStrictNotEqual("7"));