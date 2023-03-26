// 1. Aufgabe

const triplet = (a) => {
    let result = " ";
    for (let i=1; i<=3; i++){
        result += a; // result = result + a;
    }
    console.log(result);
}
triplet("Katze");

// 2. Aufgabe

let quintuplet = function(a) {
    let result = " ";
    for (let i=1; i<=5; i++) {
        result += a;
    }
    console.log(result);
}
quintuplet("Katze");

// 3. Aufgabe

function multiStr (a,b) {
    result = " ";
    for (let i=1; i<=a; i++) {
        result += b;
    }
    console.log(result);
}
multiStr(3,"Woah");

// 4. Aufgabe:

const largestNumInArray = (a) => {
    let array = [1,6,83,91,0,-4,1337,5];
    let grossZahl = Math.max(...array);
    console.log(grossZahl);   
}
largestNumInArray();

// 5. Aufgabe:
// a)
function printIfDivisibleByTen (a) {
    if (a%10===0) {
        console.log(`Even 10!`);
    } else {
        console.log(`keine Ausgabe`)
    }
}
printIfDivisibleByTen(25);
printIfDivisibleByTen(36);
printIfDivisibleByTen(40);

// b)
for (let i=0; i<=125; i++) {
    printIfDivisibleByTen(i);
}
printIfDivisibleByTen();

// 6. Aufgabe:
function largestNum (a,b,c,d,e) {
    console.log(Math.max(a,b,c,d,e));
}
largestNum(10,65,74,32,1);

// 7. Aufgabe:
const isString = (a) => {
    if (typeof a === "string") {
        console.log("true");
    } else {
        console.log("false")
    }
}
isString(5);
isString("ich");

// 8. Aufgabe:

const areStrings = (a,b) => {
    if (typeof a==="string" && typeof b==="string") {
        console.log("true")
    } else {
        console.log(`${a} oder ${b} ist nicht string.`)
    }
}
areStrings("ich","du");
areStrings(3,"du");

// 9. Aufgabe:
const getFirstWord = (a) => {
    let firstWorld = a.split(" ");
    console.log(firstWorld[0]);
}
getFirstWord("Internetting ist schwer");
getFirstWord("Hallo Welt");
getFirstWord("hallo");

// 10. Aufgabe:
const wordRepeater = (a) => {
    let array = a.split(" ");
    let result = [];
    for (let i=0; i<array.length; i++) {
        let wörter = array[i];
        for (let j=0; j<array.length; j++) {
            result.push(wörter);
        }
    }
    return result.join(' ');
}
console.log(wordRepeater("I am groot"));

// 11. Aufgabe:
const firstLetter = (a) => {
    console.log(a[0]);
}
firstLetter("Cat");
firstLetter("quylthulg");

// 12. Aufgabe: 
const firstLetters = (x) => {
    const y = x.split(" ");
    let ergebnis = " ";
    for (let i=0; i<y.length; i++) {
        ergebnis += y[i][0];
    }
    return ergebnis;
};
console.log(firstLetters("What the fruit"));

// 13. Aufgabe: 

const len = (a) => {
    if (typeof a==="string") {
        console.log(a.length);
    } else if (Array.isArray(a)) {
        console.log(a.length);
    } else (console.log("null"))
}
len("Ich bin Mehmet")
len(['Tom','Jerry','Bunny'])
len(61)


// 14. Aufgabe: 

const explode = (a) => {
    if (typeof a!=="string") {
        console.log("null");
    } else {
        console.log(a.split(""))
    }
}
explode("Cat")
explode(41)
explode("")
explode("R & D")


// 15. Aufgabe: 
const foo = (a) => {
    let x = a.includes("o") ? "true" : "false";
    console.log(x)
}
foo("");
foo("a");
foo("o");
foo("Cat");
foo("tomato");
foo("Potato");
foo("Blanket");
foo("1");

// 16. Aufgabe: 

const bar = (a) => {
 console.log(`Cat${a.slice(2)}`)
}

bar("");
bar("x");
bar("Cat"); 
bar("Foobar");
bar("Potato");
bar("Tomato");
bar("International Space Station");


