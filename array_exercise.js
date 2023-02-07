/* Grundlagen der Programmierung: Arrays und Array-Methoden

Diese Übungen sind zum Üben von Arrays und Array-Methoden gedacht. **Es kann sein, dass du einige Methoden nachschlagen musst, um diese Aufgaben zu lösen.** Gib jedes Ergebnis auf der Konsole aus.
*/

//1. Deklariere eine Variable namens `euroCities` und weise ihr ein Array mit 5 europäischen Städten zu, z.B. `["Paris", "London", "Valletta", "Prag", "Rom"]`. Deklariere eine weitere Variable mit dem Namen `secondCity` und weise ihr das zweite Element des Arrays als Wert zu.

let euroCities = ["London","Athen","Barcelona","Rom","Paris"];

// 2. Ändere den ersten Eintrag im Array zu "Berlin".

euroCities[0] = "Berlin";
console.log("Q2:",euroCities);


// 3. Gib die Länge des Arrays `euroCities` aus.

console.log("Q3:",euroCities.length);

// 4. Entferne das letzte Element aus dem Array `euroCities`.

console.log("Q4",euroCities.pop()); // silinen
console.log(euroCities);            // geriye kalan

// 5. Verwende eine Array-Methode, um "Budapest" an das Ende des Arrays `euroCities" anzuhängen.

console.log("Q5",euroCities.push("Budapest"));
console.log(euroCities);

// 6. Erstelle eine weitere Variable mit dem Namen `asianCities` und weise ihr ein Array mit mindestens 5 Städten zu.

let asianCities = ["Pekin","Tokyo","Sam","Ankara","Tiflis"];


// 7. Benutze eine Methode, um `euroCities` und `asianCities` in einem Array zu kombinieren. Speichere das Ergebnis in der neuen Variablen `WorldCities`.  

let WorldCities = euroCities.concat(asianCities);
console.log("Q7",WorldCities);

// 8. Kehr die Reihenfolge von `worldCities` um.
 console.log("Q8", WorldCities.sort());

// 9. **Bonus**: Entferne den dritten Eintrag aus dem Array `euroCities`.

console.log(euroCities.splice(2,1));
console.group(euroCities);

// 10. **Bonus**: Benutze eine Array-Methode, um die Punkte 2 bis 4 aus dem Array `asianCities` auszuwählen und speichere sie in einer anderen Variable.  

 let einpaarCities = asianCities.slice(2,4);
 console.log("Q10:",einpaarCities);

// 11. **Bonus**: Ersetze den 3. Eintrag im Array von `worldCities` durch "Toronto".

WorldCities[2] = "Toronto";
console.log("Q11",WorldCities);

// 12. **Bonus**: Entferne keine Elemente aus dem Array `worldCities`, sondern füge "Washington" an der zweiten Position ein.

console.log("Q12:",WorldCities.splice(1,0,"Washington")); // silinen elemani gösterir
console.log(WorldCities); 

// 13. **Bonus** Schreibe ein Programm, um alle Elemente des Ergebnisses (`worldCities`) zu einer Zeichenkette zu verbinden.

// Beispiel: `worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]`;

// Erwartete Ergebnisse:

// "Berlin, London, Bangkok, Phnom Penh"

// "Berlin+London+Bangkok+Phnom Penh"

console.log(WorldCities.toString()); //Ankara,Washington,Athen,Toronto,Berlin,Budapest,Pekin,Rom,Sam,Tiflis,Tokyo
console.log(WorldCities.join("+")); //Ankara,Washington,Athen,Toronto,Berlin,Budapest,Pekin,Rom,Sam,Tiflis,Tokyo
console.log(WorldCities.join("-")); //Ankara,Washington,Athen,Toronto,Berlin,Budapest,Pekin,Rom,Sam,Tiflis,Tokyo


/***Bonus**

1. Schreibe ein Programm, um die Zeichenkette umzukehren: "Hallo Welt".

**Zusätzliche Übung**

Gib die Ergebnisse in der Konsole aus.

1. Erstelle ein Array mit den Namen deiner Geschwister oder den Namen deiner Lieblingsfilmfiguren.
2. Erstelle ein Array mit den Namen deiner Eltern.
3. Kombiniere diese beiden Arrays.
4. Füge die Namen deiner Haustiere hinzu.
5. Drehe die Reihenfolge der Felder um.
6. Greife auf einen der Namen deiner Eltern zu.
7. Aktualisiere den Namen eines deiner Elternteile.
*/