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
const form = document.querySelector("#form");

let isValid = false;

function emailValidate(form){
  let email = document.querySelector(form);
  let incorrectText = document.querySelector(".incorrectText");
  email.addEventListener('change',(event)=>{
    if(!email.validity.valid){
      email.classList.add("incorrect")
      incorrectText.style.display = "inline-block";
      isValid = false;
    }else{
      if(email.classList.contains("incorrect")){
        email.classList.remove("incorrect");
        incorrectText.style.display = "none";
      }
      isValid = true;
    }
  })
}
if(form){
  emailValidate('.mainForm');
}

$(document).on('submit','#form',function(e) {
  e.preventDefault();
  if(isValid){
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
          formContentPopup = document.querySelector(".connect__formBlockContent_popup");
          succesSend(formContentPopup);
        }else{
          if(formContent){
            succesSend(formContent)
          }
        }
        if(document.getElementById("form")){
          document.getElementById("form").reset();
          isValid = false;
        }
      })()
    })
  }
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

      let popupImg = document.createElement("img");
      popupImg.classList.add("news_img");
      popupImg.src = `${window.location.origin}/static/mainsite/img/${event.target.id}.png`


      popupContent.appendChild(popupImg);

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
function succesSend(formContent){
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
          <div class="connect__formBlockContent_popup">
            <h2 class=" block__title connect__title">Let’s create together</h2>
            <p class="block__text connect__subtitle">Send us a message</p>
            <form id="form" class="form" novalidate>
              {% csrf_token %}
              <input id="name" class="inputArea" placeholder="Name"  type="text" name="name">
              <input id="email" class="inputArea popupForm" placeholder="E-mail" type="email" name="email" required>
              <span class="incorrectText">Enter a valid email address (example@mail.com)</span>
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
emailValidate('.popupForm');

formBlock.addEventListener('click', (event)=>{
  if(event.target === formBlock){
    document.body.removeChild(formBlock);
    document.body.style.overflowY = "scroll";
  }
})
}
