let container = document.querySelector(".container")
let input = document.querySelector(".section input");
let generateBtn = document.querySelector(".btn")
let qrImg = document.querySelector(".codeArea img")

function qrProgress(value){
    
}

generateBtn.addEventListener("click", ()=> {    
    let qrInput =input.value;
    if(!qrInput) return;
    generateBtn.innerText ="Loading"
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrInput}`;
    qrImg.addEventListener("load",()=>{
        container.classList.add("active")
    })
})

input.addEventListener("keyup",()=>{
    if(!input.value){
        container.classList.remove("active")
    }
})
