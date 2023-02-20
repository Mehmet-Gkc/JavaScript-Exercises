// 1. Aufagbe:

const sumIntFrom1ToN = (a) => {
    let sum=0;
    for (let i=1; i<=a; i++) {
            sum += i;
    }
    return sum;
}
console.log(sumIntFrom1ToN(4));
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(600));

// 2. Aufagbe:

const sumOfCubes = (a,b,c) => {
   let cub1 = Math.pow(a,3);
   let cub2 = Math.pow(b,3);
   let cub3 = Math.pow(c,3);
   return cub1+cub2+cub3;
}
console.log(sumOfCubes(1,5,9));
console.log(sumOfCubes(2,8));
console.log(sumOfCubes());

// 3. Aufagbe:
const isStrStartOfWord = (buchstaben,wort) => {
    let lowerCaseBS = buchstaben.toLowerCase();
    let lowerCaseW = wort.toLowerCase();
    let bs = buchstaben.length;
    return lowerCaseW.substring(0,bs) === lowerCaseBS;
}
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));



// 4. Aufagbe:

const isLEQZero = (a) => {
    let zero = a<=0 ? "true" : "false";
    return zero;
}
console.log(isLEQZero(3));
console.log(isLEQZero(0));
console.log(isLEQZero(-4));
console.log(isLEQZero(10));

// 5. Aufagbe:

const countOccurrences = (a,b) => {
    console.log(a.indexOf(b)+1);
}
countOccurrences("mehmet","t");
countOccurrences("this is a string", "i");

// 6. Aufagbe:

let calcBaseToExponent = function (a,b) {
    if (a>0 && b>0) {
        let hoch = Math.pow(a,b);
        return hoch;
    } 
}
console.log(calcBaseToExponent(5,3));
console.log(calcBaseToExponent(10,10));
console.log(calcBaseToExponent(3,4));
console.log(calcBaseToExponent(-3,4));

// 7. Aufagbe:

function dogAge (a) {
    let age = a*7;
    console.log(`Your doggo is ${age} years old in dog years!`)
}
dogAge(4);
dogAge(2);

// 8. Aufagbe: ??? soruyu anlamadim

let calcLifetimeSupply = function(a,b) {

}

// 9. Aufagbe:

let isWaldoHere = function(a) {
    console.log(a.includes("Waldo") || a.includes("waldo"));
}
isWaldoHere("is there a wal here?");
isWaldoHere("I found you Waldo!");
isWaldoHere("Wait, don't you mean Wally?"),
isWaldoHere("walDo is here");

// 10. Aufagbe:

function isEqualSlices (a,b,c) {
    let gesamt = (a>=(b*c)) ? "true" : "false";
    console.log(gesamt);
}
isEqualSlices(8,3,2);
isEqualSlices(8,3,3);
isEqualSlices(24,12,2);

// 11. Aufagbe:  

const isEqualNumXandOs = (a) => {
    let lowerCase = a.toLowerCase();
    let anzahlX = 0;
    let anzahlO = 0;
    for (let i=0; i<=a.length; i++) {
        if (lowerCase[i]==="x") {
            anzahlX ++;
        } else if (lowerCase[i]==="o") {
            anzahlO ++;
        }
    }
    if ((anzahlX === 0) && (anzahlO === 0)) {
        return true;
    } else if (anzahlX === anzahlO) {
        return true;
    } else if (anzahlX !== anzahlO) {
        return false;
    }
}
console.log(isEqualNumXandOs("ooxx"));
console.log(isEqualNumXandOs("xooxx"));
console.log(isEqualNumXandOs("ooxXm"));
console.log(isEqualNumXandOs("zpzpzpp"));
console.log(isEqualNumXandOs("zzoo"));

// 12. Aufagbe:  

const isPrime = (a) => {
    let prime = true;
    for (let i=2; i<a; i++) {
        if (a%i===0) {
            prime = false;  
        }
    }
    return prime;      
}
console.log(isPrime(7)); // true
console.log(isPrime(9)); // false
console.log(isPrime(8)); // false
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true
