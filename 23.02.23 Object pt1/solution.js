// 1. Aufgabe:
/* 
const mensch = {
    name: "Mike",
    class: "4A",
    course: "English"
}
const getProperties = () => {
    let array = Object.keys(mensch);
    return array;
}
console.log(getProperties());

// 2. Aufgabe:

const trink = {
    choice1: "Tee",
    choice2: "Kaffee",
    choice3: "Milch"
}
const getValues = () => {
    let values = Object.values(trink);
    return values;
}
console.log(getValues());

// 3. Aufgabe:
const tier = {
    cats: 1,
    dogs: 2,
    turtles: 4
}
const getKeyValuePairs = () => {
    let arrayTier = Object.entries(tier);
    return arrayTier;
}
console.log(getKeyValuePairs());
 
// 4. Aufgabe:

let person = {
    firstName: "Michael",
    lastName: "Smith",
    citizenship: "Germany",
    city: "Berlin",
    gender: "male",
    job: "driver",
    age: 28,
    height: 178,
    'eye colour': "brown",
    printDetails: function () {
        return `${this.firstName} ${this.lastName} is a citizen of ${this.citizenship}. They are ${this.gender}, ${this.height} and have ${this["eye colour"]} eyes.`
    }
  };
const getKeyValuesObject = (object) => {
    const outerArray = [];
    for (const key in object) {
        const innerObject = {};
        // console.log(person[key]);
        // console.log(key);
        innerObject[key] = object[key];
        outerArray.push(innerObject);
    };
    return outerArray;
}  
console.log(getKeyValuesObject(person));

// 5. Aufgabe:

console.log(person.printDetails());

// 6. Aufgabe:

const firstObject = {
    firstname: "John",
    lastName: "Smith",
    
};
const secondObject = {
    job: "Doktor",
    age: 35
}
const mergeObjects = Object.assign(firstObject,secondObject);
console.log(mergeObjects);
*/
// 8. Aufgabe:

const bevorReverse = {
    location: "berlin",
    status: "occupied"
}
function switchedCopy () {
    let array = Object.entries(bevorReverse);
    // console.log(array);
    let afterReverse = [];
    for (let i=0; i<array.length; i++) {
        let reverse = array[i].reverse();
        afterReverse.push(reverse);        
    } 
    return Object.fromEntries(afterReverse); 
}
console.log(switchedCopy());