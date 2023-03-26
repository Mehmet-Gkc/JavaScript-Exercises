// 1. Aufgabe:

const person = {
    name: "Alice",
    age: 25,
    occupation: "teacher"
  };
  
  console.log(person.name); // Alice
  console.log(person.age); // 25
  console.log(person.occupation); // teacher

// 2. Aufgabe:

const getProp = (object,key) => {
    return object[key];
}
console.log(getProp(person,["name"])); // Alice
console.log(getProp(person,["age"]));  // 25

// 3. Aufgabe:

const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 214
};

const makeSentence = () => {
    return `"The Book ${book.title} was written by ${book.author} and has ${book.pages} pages.`
}
console.log(makeSentence(book));

// 4. Aufgabe:

const student = {
    name: "alex",
    info: {
        age: 43,
        email: "alex@mail.com"
    }, 
    subjects: ["programming basics", "ui basics"],
    teachers: [{ name: "max", email: "max@mail.com", isFavorite: false}, {name: "mo", email: "mo@mail.com", isFavorite: false}, {name: "mina", email: "mina@mail.com", isFavorite: true}]
};
// 4.1. Was ist der Name des Students?
console.log(student.name);
// 4.2. Was ist die Email des Students?
console.log(student.info.email);
// 4.3. Was ist der Name des ersten Lehrers im teachers Array?
console.log(student.teachers[0].name)
// 4.4. Wie viele Fächer (subjects) hat der Student?
console.log(student.subjects.length);
// 4.5. Bau ein Array mit den Emails aller Lehrer im teachers array. 
let array = [];
for (let i=0; i<student.teachers.length; i++) {
    let emails = student.teachers[i].email;
    array.push(emails)
}
console.log(array);
// 4.6. Was ist die Email des lieblingslehrers des Students? 
console.log(student.teachers[2].name);

// 5. Aufgabe

const pets = [
    { name: "Fluffy", type: "cat" },
    { name: "Spot", type: "dog" },
    { name: "Goldie", type: "fish" }
  ];
const printName = () => {
    let result = "";
    for (let i=0; i<pets.length; i++) {
        let tier = pets[i].name;
        result += tier + ", ";
    }
    return result;
}
console.log(printName())  // Fluffy, Spot, Goldie


// Bonus 1:

const car = {
    model: "Toyota",
    color: "red",
    year: 2010
};
const hasProperty = (object,string) => {
   return object[string] !== undefined;
}

  console.log(hasProperty(car, "model")); // true
  console.log(hasProperty(car, "price")); // false

// Bonus 2:
const user1 = {
    name: "max",
    yearBorn: 1990,
    contentRights: ["user", "admin", "moderator"],
    password: "1234",
}

const user2 = {
    name: "mo",
    yearBorn: 2001,
    contentRights: ["user"],
    password: "asdfj)ölkj!",
}

const user3 = {
    name: "mina",
    yearBorn: 1951,
    contentRights: ["user", "moderator"],
    password: "abc",
}

const users = [user1, user2, user3];

// 1. Welcher user im Array hat das längste Passwort?
// 1. Lösung:
// const längstePasswort = () => {
//     if (user1.password.length > user2.password.length && user1.password.length > user3.password.length) {
//         return `${user1.name} hat das längste Passwort`;
//     } else if (user2.password.length > user1.password.length && user2.password.length > user3.password.length) {
//         return `${user2.name} hat das längste Passwort`;
//     } else if (user3.password.length > user1.password.length && user3.password.length > user2.password.length) {
//         return `${user3.name} hat das längste Passwort`;
//     }
// }
// 2. Lösung:
let längstePasswort = "";
let längstePasswortName = "";
for (let i=0; i<users.length; i++) {
    if (users[i].password.length > längstePasswort.length) {
        längstePasswort = users[i].password;
        längstePasswortName = users[i].name;
    }
}
console.log(längstePasswort);
console.log(längstePasswortName);

// 2. Welcher user im array ist am ältesten?
 let ältesten = 2023;
 let ältestenName = "";
 for (let i=0; i<users.length; i++) {
    if (users[i].yearBorn < ältesten) {
        ältesten = users[i].yearBorn;
        ältestenName = users[i].name;
    }
 }
 console.log(ältesten);
 console.log(ältestenName);

 // 3. Gibt es einen user im array der ein passwort hat was kürzer ist als 4 buchstaben der/die admin ist?

for(let i = 0; i<users.length; i++){
    if(users[i].password.length < 4 && users[i].contentRights.includes("admin")){
       console.log(users[i])
    }
}