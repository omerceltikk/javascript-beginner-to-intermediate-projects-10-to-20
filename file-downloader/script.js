let input = document.querySelector("input")
let btn= document.querySelector("button")

function downloadUrl(e){
    e.preventDefault();
    fetchFile(input.value);
}
btn.addEventListener("click",downloadUrl)

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let createUrl = URL.createObjectURL(file)
        let createElement = document.createElement("a")
        createElement.href=createUrl;
        createElement.download=url.replace(/[<>:"/\|?*]/,"");
        document.body.appendChild(createElement);
        createElement.click();
        createElement.remove();
    }).catch(()=> {
        alert("failed to download file")
    })
}