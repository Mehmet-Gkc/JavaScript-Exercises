// 1. Exponentialwerte ausgeben

function exponential (a,b) {
    if (typeof a === "number" && typeof b === "number") {
        let result = "";
        for (let i=1; i<=b; i++) {
            result = result + " " + a**i;
        }
        console.log(result);
    } else {
        console.log(`a oder b ist nicht Nummer.`)
    }
    
}
exponential(3,5);
exponential(2,8);

// Array Method:
function exponentialArray (a,b) {
    let result2 = [];
    for (let i=1; i<=b; i++) {
        result2.push(Math.pow(a,i));
    }
    console.log(result2);
}
exponentialArray(10,5);


// 2. Früchte

let fruit = "Kiwi";
let printFavoriteFruit = function(a,b) {
    fruit = "Orange"
    console.log(`Meine Lieblingsfrucht ist:${fruit}`);
}
console.log(fruit);   // Kiwi
printFavoriteFruit(); // Meine Lieblingsfrucht ist:Orange
console.log(fruit);   // Orange

// 3. Eine Zahl mit sich selbst multiplizieren

function exponent (a,b) {
    result = "1";
    for (let i=1; i<=b; i++) {
        result = result + " " + a**i;
    }
    console.log(result);
}
exponent(3,4);  // 1 3 9 27 81

// Array Method:
function exponent1 (a,b) {
    let result2 = [1];
    for (let i=1; i<=b; i++) {
        result2.push(a**i);
    }
    console.log(result2);
}
exponent1(5,3); // [ 1, 5, 25, 125 ]