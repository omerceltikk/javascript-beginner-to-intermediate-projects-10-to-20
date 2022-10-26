let input= document.querySelector("#dictionary")
let firstSearch = document.querySelector(".word.head")
let searchHead = firstSearch.querySelector("h2")
let phonetics = firstSearch.querySelector("label")
let infoText = document.querySelector(".searcharea label")
let meaningArea = document.querySelector(".details label")
let exampleArea = document.querySelector(".example label")
let titleArea = document.querySelector(".title")
let synonyms = document.querySelector(".synonyms span")

function data(res,word){
    if(res.title){
        infoText.innerHTML=`Can't find the meaning of <span>"${word}"</span>, please try to search another word. `
        titleArea.style="display:none;"
    }else{
        titleArea.style="display:block;"
        console.log(res)
        searchHead.innerText = res[0].word;
        phonetics.innerHTML = `phonetic: ${res[0].phonetics[1].text ? res[0].phonetics[1].text : res[0].phonetic}`
        meaningArea.innerText= `${res[0].meanings[0].partOfSpeech}: ${res[0].meanings[0].definitions[0].definition}
        ${res[0].meanings[1].partOfSpeech}: ${res[0].meanings[1].definitions[0].definition}`
        if(res[0].meanings[1].definitions[0].example === undefined){
            exampleArea.innerText ="Can not found. We are working on it!"
            exampleArea.style="color:#8f8f8f; text-decoration:underline;"
        }else{
            exampleArea.innerText= res[0].meanings[1].definitions[0].example ? res[0].meanings[1].definitions[0].example : res[0].meanings[0].definitions[0].example 
            exampleArea.style="color:#000000; text-decoration:none;"
        }
        synonyms.innerHTML="";
        for (let i = 0; i < 5; i++) {
            if(res[0].meanings[0].synonyms[i] === undefined ){
                synonyms.innerHTML="Can not found. We are working on it!"
                synonyms.style.color="red"}
                else{let tag = `<span>${res[0].meanings[0].synonyms[i]},</span> `
                synonyms.insertAdjacentHTML("beforeend",tag)}
                synonyms.style="color:#8f8f8f; text-decoration:underline;"
        }
        infoText.innerHTML = `meaning of <span>"${word}"</span>`
    }
}


function searchFunc(word){
    infoText.innerHTML = `search the meaning of <span>"${word}"</span>`
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(res => data(res, word))
    
}


input.addEventListener("keyup", e=> {
    if(e.key === "Enter" && e.target.value){
        searchFunc(e.target.value);
    }
})
