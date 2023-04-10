function randomNum() {
    return Math.floor(Math.random()*10+1); 
}
console.log(randomNum()); 

function guessingGame() {
    const lösung = randomNum();
    for(let i=1; i<=3; i++) {
        const spielerEingabe = Number(prompt("Guess a number between 1 - 10:"));
        if(spielerEingabe === lösung) {
            prompt("Success! Lösung gefunden");
            return;

        } else {
            prompt("Wrong. Try again!")
        }              
        
        if(i===3) {
            alert("Sorry, you failed to guess the number in three attempts.");
            return;
        }
        alert(`falsch das war der ${i}te versuch.`)
    }
}
guessingGame()