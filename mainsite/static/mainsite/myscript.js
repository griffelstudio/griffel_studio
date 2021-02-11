const header = document.querySelector(".header");
const copyText1 = document.querySelector("#copy-text1");
const copyText2 = document.querySelector("#copy-text2");
const playbtn = document.querySelector(".HowItWorks__play");
const videoPlayer = document.querySelector("#video");
const footerContent = document.querySelector(".footer__content");
const footer = document.querySelector(".footer");
const formContent = document.querySelector(".connect__formBlockContent");
const burgerMenu = document.querySelector(".burger");
const link = document.createElement('div');
const news = document.querySelectorAll(".news__item");
const newsContainer = document.querySelector(".news__items");


for(let i = 0; i < news.length; i++){
  news[i].addEventListener("click", (event)=>{
    if (event.target.textContent == 'Read more'){
      document.body.style.overflowY = "hidden";
      let fon = document.createElement("div");
      fon.classList.add("fon");
      document.body.prepend(fon);

      let popupBody = document.createElement("div");
      popupBody.classList.add("popup");
      setTimeout(() => {
        popupBody.classList.add("popupOpen");
      }, 50)

      document.body.appendChild(popupBody);


      let popupClose = document.createElement("div");
      popupClose.classList.add("popupClose");
      popupClose.innerHTML =`<div class="modal-close" for="modal">&#10005;</div>`;
      popupBody.appendChild(popupClose);

      popupClose.addEventListener("click",()=>{
        document.body.removeChild(popupBody);
        document.body.removeChild(fon);
        document.body.style.overflowY = "scroll";
        popupBody.classList.remove("popupOpen");
      })

      let popupContent = document.createElement("div");
      popupContent.classList.add("popupContent");
      popupBody.appendChild(popupContent);
      popupContent.style.overflowY = "scroll";





      let popupTitle = document.createElement("div");
      popupTitle.classList.add("block__title");
      popupTitle.classList.add("popupTitle");
      popupTitle.textContent = event.target.previousElementSibling.previousElementSibling.textContent;
      popupContent.appendChild(popupTitle);


      let popupText = document.createElement("div");
      popupText.classList.add("block__text32");
      popupText.classList.add("popupText");
      popupText.textContent = event.target.previousElementSibling.textContent;
      popupContent.appendChild(popupText);

      fon.addEventListener("click",()=>{
        document.body.removeChild(popupBody);
        document.body.removeChild(fon);
        document.body.style.overflowY = "scroll";
        popupBody.classList.remove("popupOpen");
      })

    }
  })
}



function burger(x) {
  x.classList.toggle("change");
  burgerMenu.classList.toggle("displayOff")
  document.body.classList.toggle("scrollOff")
}

window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > 150){
    header.style.backgroundColor = "rgb(255,255,255)"
    header.opacity = "0.6"
    header.style.boxShadow = "0px 4px 30px rgba(47, 47, 47, 0.1)";
  }
  else{
    header.style.backgroundColor = "transparent"
    header.opacity = "0"
    if (window.screen.width > 1000){
      header.style.boxShadow = "none";
    }
  }
})

function copyText(copyText) {
  let area = document.createElement("textarea");
  area.value = copyText.textContent;
  document.body.appendChild(area).select();
  document.execCommand("copy");
  area.remove();
}

function copyLink(link) {
  let area = document.createElement("textarea");
  area.value = link;
  document.body.appendChild(area).select();
  document.execCommand("copy");
  area.remove();
}
if(videoPlayer){
  videoPlayer.addEventListener("play",()=>{
  playbtn.classList.toggle("unvisiable");
  })
  videoPlayer.addEventListener("pause",()=>{
  playbtn.classList.toggle("unvisiable");
  })
}

window.addEventListener("load",()=>{
  if(window.location.pathname == "/"){
    footerContent.style.borderTop = 'none';
    footer.style.marginTop = '0';

  }
})
function succesSend(){
  formContent.style.alignSelf = "flex-start";
  formContent.style.justifyContent = "center"
  formContent.innerHTML = `
    <h2 class="block  block__title connect__title" style="color:#12A276;">Message sent successfully!</h2>
    <p class="connect__subtitle block__text">We will reply to you within one business day.</p>
  `;


}
