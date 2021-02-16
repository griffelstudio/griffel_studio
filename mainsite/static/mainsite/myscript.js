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

$(document).on('submit','#form',function(e) {
  console.log('message start')
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: "/form",
    data:{
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val(),
      csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
    },
    succes:  (function(){
      if($('.formBlock').length === 1){
        let formBlock = document.querySelector(".formBlock");
        console.log(formBlock.childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerHTML=`
          <h2 class="block  block__title connect__title" style="color:#12A276;">Message sent successfully!</h2>
          <p class="connect__subtitle block__text">We will reply to you within one business day.</p>
          `)
      }else{
        if(formContent){
          succesSend()
        }
      }
      if(document.getElementById("form")){
        document.getElementById("form").reset();
      }
    })()
  })
})

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

function copyLink(element) {
  let area = document.createElement("textarea");
  let path = window.location.href;
  if(path.indexOf('#') !== -1){
    path = path.substring(0, path.indexOf('#'))
  }
  area.value = `${path}#${element.getAttribute('data-id')}`;
  console.log(area.value);
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

function createFormPopup(){

  let formBlock = document.createElement("div");
  formBlock.classList.add("formBlock");
  formBlock.innerHTML = `
    <section id="get-connected" class="connect">
      <div class="popupClose" for="modal">&#10005;</div>
      <div class="connect__bg">
        <div class="connect__formBlock">
          <div class="connect__formBlockContent">
            <h2 class=" block__title connect__title">Let’s create together</h2>
            <p class="block__text connect__subtitle">Send us a message</p>
            <form id="form" class="form">
              {% csrf_token %}
              <input id="name" class="inputArea" placeholder="Name"  type="text" name="name">
              <input id="email" class="inputArea" placeholder="E-mail" type="email" name="email" required>
              <textarea id="message" class="inputBox" placeholder="Describe your task" name="message"  rows="4" cols="80"></textarea>
              <button  class="button button__form" type="submit">Send</button>
            </form>
          </div>
        </div>
        <div class="connect__img">
        </div>
      </div>
    </section>
  `
formBlock.style.color = "transparent";
document.body.style.overflowY = "hidden";
setTimeout(()=>{
  let popupClose = document.querySelector('.popupClose');
  popupClose.addEventListener("click",()=>{
    document.body.removeChild(formBlock);
    document.body.style.overflowY = "scroll";
  })
},200)

document.body.prepend(formBlock );

formBlock.addEventListener('click', (event)=>{
  if(event.target === formBlock){
    document.body.removeChild(formBlock);
    document.body.style.overflowY = "scroll";
  }
})
}

$('#email').on('input invalid', function() {
    this.setCustomValidity('')
    if (this.validity.valueMissing) {
      this.setCustomValidity("Нет значения")
    }
    if (this.validity.typeMismatch) {
      this.setCustomValidity("Не соответствует типу")
    }
    if (this.validity.patternMismatch) {
      this.setCustomValidity("Не соответствует паттерну")
    }
})
