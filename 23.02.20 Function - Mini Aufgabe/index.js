// The Fortune Teller
function tellFortune (child,name,city,job) {
    console.log(`I am ${job} in ${city}, married to ${name} and have ${child} children.`);
}
tellFortune(2,"Marry","Paris","teacher");
tellFortune(3,"Jon","Berlin","engineer");
tellFortune(1,"Eric","London","doctor");

// The Puppy Age Calculator
const calculateDogAge = (a) => {
    let dogAge = a*7;
    return `Dein Hündchen ist ${dogAge} Jahre alt in Hundejahren!`;
}
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));
console.log(calculateDogAge(4.5));


// The Lifetime Supply Calculator

const calculateSupply = (alter,menge) => {
    let stückImJahr = 365.25*menge;
    let höchstAlter = 80;
    let konsum = ((höchstAlter - alter) * stückImJahr).toFixed(2);
    return `Du brauchst ${konsum}, um bis zum reifen Alter von ${höchstAlter} zu leben`
}
console.log(calculateSupply(24,2));
console.log(calculateSupply(67,3));
console.log(calculateSupply(24,1));

// The Geometrizer
const calcCircumference = (r) => {
    let radius =r;
    let Umfang = (2*Math.PI*radius).toFixed(2);
    return `Der Umfang ist ${Umfang}`
}
console.log(calcCircumference(5));

const calcArea = (r) => {
    let radius = r;
    let area = (Math.PI*Math.pow(r,2)).toFixed(2);
    return `Die Fläche ist ${area}`
}
console.log(calcArea(8));

// The Temperature Converter

const CelsiusToFahrenheit = () => {
    let fahrenheit = (c/5)*9+32;
    return `${c}°C ist ${fahrenheit}°F`
}
console.log(CelsiusToFahrenheit(30));
console.log(CelsiusToFahrenheit(-5));

const FahrenheitToCelsius = () => {
    let celsius = (f-32)*5/9;
    return `${f}°F ist ${celsius}°C`
}
console.log(FahrenheitToCelsius(86));
console.log(FahrenheitToCelsius(-5));