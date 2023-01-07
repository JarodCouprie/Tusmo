let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function newWord(){
    let randomTab = [];
    for (let i = 0; i<7; i++){
        randomTab[i] = alphabet[(Math.floor(Math.random()*26))];
    }
    return randomTab;
}


const letterDisplayedContainer = document.querySelector("#tusmo-container");
const letterDisplayed = letterDisplayedContainer.querySelectorAll(".tusmo-item");

const keyboardKey = document.querySelector("#key-container");
const keyLetter = keyboardKey.querySelectorAll(".key");

let word = newWord();
let alreadyTriedKeys = [];
console.log(word);

let count = 0;

function removeClass(element, classToRemove){
    element.classList.remove(classToRemove);
};

document.querySelector("#new-word").addEventListener("click", () =>{
    word = newWord();
    alreadyTriedKeys = [];
    count = 0;
    for (let i = 0; i < letterDisplayed.length; i++){
        if(letterDisplayed[i].innerText !== ""){
            letterDisplayed[i].innerText = "";
        };
    };
    for (let i = 0; i < keyLetter.length; i++){
        removeClass(keyLetter[i],"wrong-key");
        removeClass(keyLetter[i], "right-key");
    };
});


document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    let keyTried = data.get("letter-try").trim().toLowerCase();
    if (keyTried.length > 1){
        return;
    }
    form.reset();

    function letterInKeyboard(nodeListKey, hasClassName, toAddClassName){
        for (let i = 0; i < nodeListKey.length; i++){
            if (nodeListKey[i].className === hasClassName+keyTried){
                nodeListKey[i].classList.add(toAddClassName);
            };
        };
    }
    if (alreadyTriedKeys.includes(keyTried)){
        console.log(keyTried+" has alredy been used")
    }else{
        if (word.includes(keyTried)){
            for (let i = 0; i < letterDisplayed.length; i++){
                if (keyTried === word[i]){
                    letterDisplayed[i].innerText = word[i];
                    count++;
                };
            };
            alreadyTriedKeys.push(keyTried);
            letterInKeyboard(keyLetter, "key ", "right-key");
        }else{
            letterInKeyboard(keyLetter, "key ", "wrong-key");
            alreadyTriedKeys.push(keyTried);
        };
    };
    console.log(alreadyTriedKeys);
    if (count >= 7){
        console.log("WIN");
    };
});






