// 1. Aufgabe:

const doubleValues = (arr) => {
    let multi = arr.map((item) => item * 2)
    return multi;
}
console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,1,2,3,10]));

// 2. Aufgabe:

const onlyEvenValues = (arr) => {
    let odd = arr.filter((item) => item % 2 ===0)
    return odd; 
}
console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));

// 3. Aufgabe:

const showFirstAndLast = (arr) => {
    let erst = arr.map((item) => item[0] + item[item.length-1])
    return erst
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

// 4. Aufgabe:

const addKeyAndValue = (object,key,value) => {
    let newObject = object.map((item) => { 
        item[key] = value;
        return item;
    });
    return newObject;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') );

// 5. Aufgabe

const vowelCount = (str) => {
    let lowerCase = str.toLowerCase().split("");
    let vowel = ["a","e","i","o","u"];
    let leerObject = {};
    lowerCase.forEach((letter) => {
        if(vowel.includes(letter)) {
            leerObject[letter] = (leerObject[letter] || 0) +1
        }
    });
    return leerObject;
}
console.log(vowelCount('Elie'));
console.log(vowelCount('Tim'));
console.log(vowelCount('Matt'));
console.log(vowelCount('hmmm'));
console.log(vowelCount('I Am awesome and so are you'));

