// Create your solutions here
// 1. Los oder New?

function nameOfCity (a) {
    let city = a.toLowerCase();
    if (city[0] === "n" && city[1]==="e" && city[2]==="w") {
        console.log(a);
    } else if (city[0] === "l" && city[1]==="o" && city[2]==="s") {
        console.log(a);
    } else (console.log("The city name does not begin with Los or New" ))
}
nameOfCity("New York");
nameOfCity("newark");
nameOfCity("London");

// 2. isDivisible?

const isDivisible = (a) => {
    if (a%100===0) {
        console.log("true");
    } else {
        console.log("false");
    }
}
isDivisible(1);
isDivisible(1000);
isDivisible(100);

// 3. Wie ist das Wetter?
    let isRaining = false ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";

    console.log(isRaining);


//  Schleifen

// 1. Sequenz

const geometricalSequence = (a) => {
    let sum="";
    for (let i=0; i<a; i++) {
    let hoch = Math.pow(2,i);
    sum = sum + " " + hoch;
    }
    console.log(sum);
}
geometricalSequence(6);
geometricalSequence(10);

// 2. Vielfaches

function multiplesOfThree (n) {
    let sum=" ";
    if (n<1) {
        console.log("Invalid input")
    } else {
    for (let i=1; i<=n; i++) {
        sum += " " + 3*i;
        }
    }
    console.log(sum);
}
multiplesOfThree(5);
multiplesOfThree(10);
multiplesOfThree(0);



// Mathe
 function powerOf (a) {
    console.log(a**a);
 }
 powerOf(2);
 powerOf(3);
 powerOf(4);
 powerOf(5);

 //  Problemlösung

 //  1. Wie viele?

let string = "A, a, E, e, I, i, O, o, U, u";
let vowelCount = function (wort) {
    let sum = " ";
    let array = string.split(", ");
    let arrayWort = wort.split("");
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<arrayWort.length; j++) {
            if (arrayWort[j]===array[i]) {
                sum += arrayWort[j];
            }
        }
    }
    console.log(sum);
}
vowelCount("hello");
vowelCount("test");
vowelCount("fbw");