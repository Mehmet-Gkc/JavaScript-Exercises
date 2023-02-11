// 1 Updater

let determiner = -20;

let x = determiner<0 ? "Less than 0" : "Greater or equal to 0";
console.log(x);

// 2 New Variables

let updater; 
if (determiner>=0) {
 let message = "Positive Integer";
 console.log(message);
} else {
    updater = "Less than 0";
}

console.log(`updater: ${updater}`);

// 3 Ternary v.s. If statement