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
    


const toto = newWord();



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
        tusmoItems[i].innerText = toto[i];
    }
});






