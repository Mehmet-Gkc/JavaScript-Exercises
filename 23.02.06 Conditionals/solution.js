// 1. Aufgabe

let aleezaTeamAve = (89+120+103)/3; // 104
let laraTeamAve = (116+94+123)/3;   // 111

// 2. Aufgabe

if (aleezaTeamAve>laraTeamAve) {
    let gewinn = `Aleeza's team is the winner with an average score of ${aleezaTeamAve}`;
    console.log(gewinn);
} else {
    gewinn = `Lara's team is the winner with an average score of ${laraTeamAve} `;
    console.log(gewinn);
}

// 3. Aufgabe

let aleezaTeamAve2 = (200+120+103)/3;  // 141

if (aleezaTeamAve2>laraTeamAve) {
    let gewinn = `Aleeza's team is the winner with an average score of ${aleezaTeamAve2}`;
    console.log(gewinn);
} else {
    gewinn = `Lara's team is the winner with an average score of ${laraTeamAve} `;
    console.log(gewinn);
}

// 4. Aufgabe

let maryTeamAve = Math.floor((200+134+105)/3); // 146.6


if (maryTeamAve==aleezaTeamAve && maryTeamAve > laraTeamAve) {
    let message = `Marry's team and Aleeza's team are tied for first place with an average score of ${maryTeamAve}`;   
    console.log(message); 
} else if (maryTeamAve==laraTeamAve && maryTeamAve>aleezaTeamAve) {
    let message = `Marry's team and Lara's team are tied for first place with an average score of ${maryTeamAve}`; 
    console.log(message); 

} else if (aleezaTeamAve==laraTeamAve && aleezaTeamAve>maryTeamAve) {
    let message = `Aleeza's team and Lara's team are tied for first place with an average score of ${aleezaTeamAve}`; 
    console.log(message); 

} else if (aleezaTeamAve==laraTeamAve && laraTeamAve==maryTeamAve) {
    let message = `All three teams are tied with an average score of ${laraTeamAve}`; 
    console.log(message); 
} else {
    let message = `Winner with an averagescore of ${Math.max(maryTeamAve, aleezaTeamAve2, laraTeamAve)}` ; 
    console.log(message); 
}

// 5. Aufgabe

let maryTeamAve2 = (184+134+105)/3; // 141

if (maryTeamAve2==aleezaTeamAve2 && maryTeamAve2 > laraTeamAve) {
    let message = `Marry's team and Aleeza's team are tied for first place with an average score of ${maryTeamAve2}`;   
    console.log(message); 
} else if (maryTeamAve2==laraTeamAve && maryTeamAve2>aleezaTeamAve2) {
    let message = `Marry's team and Lara's team are tied for first place with an average score of ${maryTeamAve2}`; 
    console.log(message); 

} else if (aleezaTeamAve2==laraTeamAve && aleezaTeamAve2>maryTeamAve2) {
    let message = `Aleeza's team and Lara's team are tied for first place with an average score of ${aleezaTeamAve2}`; 
    console.log(message); 

} else if (aleezaTeamAve2==laraTeamAve && laraTeamAve==maryTeamAve2) {
    let message = `All three teams are tied with an average score of ${laraTeamAve}`; 
    console.log(message); 
} else {
    let message = "All three teams are different with an average score"; 
    console.log(message); 
}