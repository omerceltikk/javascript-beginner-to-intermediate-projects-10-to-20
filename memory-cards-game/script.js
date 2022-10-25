let imageSelector = document.querySelectorAll(".back-view img")
let cardDOM = document.querySelectorAll(".card")
let firstCard, secondCard;
let disableDeck = false;
matchedCards = 0;

let flipBack = (e) => {
    let card = e.target;
    if (card !== firstCard && !disableDeck){
        card.classList.add("transform");
        if(!firstCard){
        return firstCard = card;
        }
        secondCard = card;
        disableDeck = true;
        let firstCardUrl = firstCard.querySelector("img").src
        let secondCardUrl= secondCard.querySelector("img").src
        matched(firstCardUrl,secondCardUrl); 
    } 
}
function matched(img1,img2){
    if(img1 === img2){
        matchedCards++;
        if(matchedCards == 8){
            return shuffleCard()
        }
       firstCard.removeEventListener("click",flipBack);
       secondCard.removeEventListener("click",flipBack);
       firstCard = secondCard = "";
       return disableDeck = false; 
    }
     setTimeout(()=>{
            firstCard.classList.add("shake");
            secondCard.classList.add("shake");
    },400)
    setTimeout(()=>{
    firstCard.classList.remove("transform", "shake");
    secondCard.classList.remove("transform", "shake");
    firstCard = secondCard = "";
    disableDeck = false;
    },1500)           
}
function shuffleCard(){
    matchedCards == 0;
    firstCard = secondCard = "";
    let imageArray = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    let arr = imageArray.sort(() => Math.random() > 0.5 ? 1 : -1)
    
    cardDOM.forEach((e,index) => {
        setTimeout(() => {
            e.classList.remove("transform");
        }, 2000); 
        let imageURL = e.querySelector("img")
        console.log(arr[index])
        imageURL.src=`/img/summer-icon-(${arr[index]}).png`
        e.addEventListener("click",flipBack)
        return;
    })
}
shuffleCard();

cardDOM.forEach(e => {
    e.addEventListener("click",flipBack)
    return;
})


