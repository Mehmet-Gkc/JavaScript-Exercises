// 1. Aufgabe

const person = {
    name: "Alice",
    age: 25,
    occupation: "teacher"
  };
  
  console.log(person.name); // Alice
  console.log(person.age); // 25
  console.log(person.occupation); // teacher

// 2. Aufgabe

const getProp = (object,key) => {
    return object[key];
}
console.log(getProp(person,"name")); // Alice
console.log(getProp(person,"age")); // 25

// 3. Aufgabe:

const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 214
  };
const makeSentence = (book) => {
   return `The Book ${book.title} was written by ${book.author} and has ${book.pages} pages.`;
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
}
// 1. Was ist der Name des Students?
console.log(student.name); // alex

// 2. Was ist die Email des Students?
console.log(student.info.email); // alex@mail.com

// 3. Was ist der Name des ersten Lehrers im teachers Array?
console.log(student.teachers[0].name); // max

// 4. Wie viele Fächer (subjects) hat der Student?
console.log(student.subjects.length); // 2

// 5. Bau ein Array mit den Emails aller Lehrer im teachers array. 
let result = [];
for (let i=0; i<student.teachers.length;i++) {
    result.push(student.teachers[i].email);
}
console.log(result);

// 6. Was ist die Email des lieblingslehrers des Students? 
for (let i=0; i<student.teachers.length; i++) {
    if (student.teachers[i].isFavorite===true) {
        console.log(student.teachers[i].email);
    }
}
