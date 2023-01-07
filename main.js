const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function newWord(){
    let randomTab = [];
    for (let i = 0; i<7; i++){
        randomTab[i] = alphabet[(Math.floor(Math.random()*26))];
    }
    return randomTab;
}

let word = newWord();
let alreadyTriedKeys = [];
let count = 0;

const letterDisplayedContainer = document.querySelector("#letterDisplayedContainer");
const letterDisplayed = letterDisplayedContainer.querySelectorAll(".letterDisplayed");

const keysContainer = document.querySelector("#key-container");
const kbKey = keysContainer.querySelectorAll(".key");

function letterInKeyboard(nodeListKey, toAddClassName, keyTried){
    for (let i = 0; i < nodeListKey.length; i++){
        if (nodeListKey[i].innerText.toLowerCase() === keyTried){
            nodeListKey[i].classList.add(toAddClassName);
        };
    };
};

function isKeyInWord(keyTried){
    if(!alphabet.includes(keyTried)){
        window.alert("You must use one letter from the latin alphabet");
    };
    if (alreadyTriedKeys.includes(keyTried)){
        return;
    }else{
        if (word.includes(keyTried)){
            for (let i = 0; i < letterDisplayed.length; i++){
                if (keyTried === word[i]){
                    letterDisplayed[i].innerText = word[i];
                    letterDisplayed[i].classList.add("right-key");
                    count++;
                };
            };
            alreadyTriedKeys.push(keyTried);
            letterInKeyboard(kbKey, "right-key", keyTried);
        }else{
            letterInKeyboard(kbKey, "wrong-key", keyTried);
            alreadyTriedKeys.push(keyTried);
        };
        if (count >= 7){
            console.log("CONGRATULATIONS ! You found the word");
        };
    };
};

kbKey.forEach(key => key.addEventListener("click", (event) =>{
    let keyTried = event.currentTarget.innerText.toLowerCase();
    isKeyInWord(keyTried);
}));

document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    let keyTried = data.get("key-try").trim().toLowerCase();
    form.reset();
    isKeyInWord(keyTried);
});

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
            removeClass(letterDisplayed[i], "right-key");
        };
    };
    for (let i = 0; i < kbKey.length; i++){
        removeClass(kbKey[i],"wrong-key");
        removeClass(kbKey[i], "right-key");
    };
});