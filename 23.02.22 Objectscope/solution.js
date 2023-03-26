// 1. Aufgabe:

const student = {
    firstname: "John",
    lastname: "Smith",
    class: 12,
    printDetails: function() {
        return `${this.firstname} ${this.lastname} is a student in class ${this.class}`;
    }
}
console.log(student.printDetails());

// 2. Aufgabe:

const person = {
    firstname: "John",
    lastname: "Smith",
    age: 41,
    job: "engineer",
    city: "France",
    printDetails: function () {
        return `${this.firstname} ${this.lastname} is a ${this.age} years old ${this.job} living in ${this.city}.`
    }
}
console.log(person.printDetails());

// Bonus:

// 1. Lösung
console.log(Object.keys(person).length); // 6
console.log(Object.values(person).length); // 6
console.log(Object.keys(student).length);  // 4
console.log(Object.values(student).length);// 4

// 2. Lösung
let array = [];
for (let wörter in person) {
    array.push(wörter);
};
console.log(array); // [ 'firstname', 'lastname', 'age', 'job', 'city', 'printDetails' ]
console.log(array.length);
