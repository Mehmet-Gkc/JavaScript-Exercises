// 1. Aufgabe:

let euroCities = ["Paris", "London", "Valletta", "Prag", "Rom"];

let secondCity = "Valletta";

// 2. Aufgabe:

euroCities[0] = "Berlin";
console.log(euroCities);

// 3. Aufgabe:

console.log(euroCities.length);

// 4. Aufgabe:

euroCities.pop();
console.log(euroCities);

// 5. Aufgabe:

euroCities.push("Budapest");
console.log(euroCities);

// 6. Aufgabe:

let asianCities = ["Seoul", "Peking", "Dhaka", "Hongkong", "Teheran"];

// 7. Aufgabe:

let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 8. Aufgabe:

worldCities.reverse(worldCities);
console.log(worldCities);

// 9. Aufgabe:

euroCities.splice(2,1);
console.log(euroCities);

// 10. Aufgabe:

let aLittleCities = asianCities.slice(1,4);
console.log(aLittleCities);

// 11. Aufgabe:

worldCities[2] = "Toronto"
console.log(worldCities);

// 12. Aufgabe:

worldCities.splice(1,0,"Washington");
console.log(worldCities);

// 13. Aufgabe:

console.log(worldCities.toString());
console.log(worldCities.join( ));
