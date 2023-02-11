// 1. Aufgabe:

for (let i=1; i<=20; i++) {
    console.log(i);
}

// 2. Aufgabe:

for (let i=1; i<=5; i++) {
    if (i === 1) {
    console.log(`There is ${i} bottle of beer on the wall.`);
    } else if (i>=2) {
    console.log(`There are ${i} bottle of beers on the wall.`);
    }
}

// 3. Aufgabe:
for (let i=0; i<=20; i++) {
    if (i%2===0) {
        console.log(`${i} is even`)
    } else (console.log(`${i} is odd`))
}

// 4. Aufgabe:
for (let i=0; i<=10; i++) {
    for (j=0; j<=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

// 5. Aufgabe:
for (let i=1; i<=100; i++) {    
    if (i%3===0 && i%5===0) {
    console.log("FizzBuzz");    
    } else if (i%3===0 ) {
        console.log("Fizz");    
    } else if (i%5===0 ) {
        console.log("Buzz");    
    } else (console.log("nicht durch 3 oder 5 teilbar"))
}


// 6. Aufgabe:

for (let i=0; i<1000; i++) {
    if (i%3===0 && i%5===0) {
        console.log(`${i}`)
    }
}

// 7. Aufgabe:

