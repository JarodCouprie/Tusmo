let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function newWord(){
    let randomTab = [];
    for (let i = 0; i<7; i++){
        randomTab[i] = alphabet[(Math.floor(Math.random()*26))];
    }
    return randomTab;
}


    const tusmoContainer = document.querySelector("#tusmo-container");
    const tusmoItems = tusmoContainer.querySelectorAll(".tusmo-item");
    const tested = document.querySelector("#tested");
    
const toto = newWord();

console.log(toto);

let count = 0;
let health = 100;

document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    let letterTried = data.get("letter-try").trim();
    if (letterTried.length > 1){
        return;
    }
    form.reset();

    for (let i = 0; i < tusmoItems.length; i++){
        if (letterTried === toto[i]){
            tusmoItems[i].innerText = toto[i];
            count++;
        }else{
            console.log("You lost 1 heatlh point");
            health--;
        };
        tested.innerText = letterTried;
    };
    console.log(count);
    console.log(health);
    if (count >= 7){
        console.log("win");
    }
});






