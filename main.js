let randomTab = [];

let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function newWord(){
    for (let i = 0; i<7; i++){
        randomTab[i] = alphabet[(Math.floor(Math.random()*26))];
        console.log(randomTab[i]);
    }
}

let body = document.querySelector("body");
body.onload = newWord();