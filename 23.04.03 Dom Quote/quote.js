const quotes = [
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    "Don't watch the clock; do what it does. Keep going.",
    'The secret of getting ahead is getting started.',
    'Well done is better than well said.',
    'You miss 100% of the shots you don’t take.',
    'A goal is a dream with a deadline.',
    'Outstanding people have one thing in common: An absolute sense of mission.',
    'Trying is winning in the moment.',
    'Fall down seven times and stand up eight.',
    "You just can't beat the person who never gives up.",
    'There is little success where there is little laughter.',
    'We cannot solve our problems with the same thinking we used when we created them.'
  ];

const button = document.querySelector("#btn");
button.style.fontSize = "24px";
button.style.backgroundColor = "blue";
button.style.padding = "1rem";
button.style.color = "white";
button.style.width = "15rem";


const reset = document.querySelector("#btn-reset");
reset.style.fontSize = "24px";
reset.style.backgroundColor = "red";
reset.style.padding = "1rem";
reset.style.color = "white"
reset.style.width = "15rem";

function random () {
    const zahl = Math.floor(Math.random() * quotes.length);
    return quotes[zahl];
};

button.addEventListener("click", function(e) {
    const p = document.querySelector("#text")
    p.innerText = random();
    p.style.backgroundColor = "#D3D3D3";
    p.style.padding = "1rem";
    p.style.fontSize = "18px";
    
})

reset.addEventListener("click", e => {
    const p1 = document.querySelector("#text");
    p1.innerText = "";
    p1.style.backgroundColor = "white";
})