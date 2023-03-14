// Benutzer grüßen

const greetMessage = (name) => {
    console.log(`Good Morning, ${name}`);
};

// 1. Lösung
const greetUsers = (namenArray, callback) => {
    for(let i=0; i<namenArray.length; i++) {
        callback(namenArray[i]);
    }
};
greetUsers(["John","Peter","Mark"], greetMessage)

// 2. Lösung
const getUsers2 = (namenArray, callback) => {
    namenArray.forEach(callback);
}
getUsers2(["Messi","Ronaldo","Benzema"], greetMessage);

// Quadratzahl:

const squareNumber = (num) =>  Math.pow(num,2);
const array = [1, 2, 3, 4, 5];
const square = (arr, callback) => arr.map(callback);
console.log(square(array, squareNumber));