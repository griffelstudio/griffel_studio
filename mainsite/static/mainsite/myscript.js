var images = document.querySelectorAll('#img-scale');
var unscale = document.querySelectorAll('#img-unscale');
var arrow = document.querySelector('.arrowbox');
var videoCover = document.querySelector('.videoCover');
var player = document.querySelector('.player');
var video = document.querySelector("#video");
var links = document.querySelectorAll('.link');
var linkarrow = document.querySelector('#linkArrow');
var copyText1 = document.querySelector("#copy-text1");
var copyText2 = document.querySelector("#copy-text2");
var end = document.querySelector('.end');

var dscreen = document.createElement('div');
dscreen.classList.add('darkscreen_on');

function copyText(copyText) {
  let area = document.createElement("textarea");
  area.value = copyText.textContent;
  document.body.appendChild(area).select();
  document.execCommand("copy");
  area.remove();
}

if(videoCover){
    videoCover.addEventListener('mouseover',function(){
      player.style.display = 'block';
      document.querySelector('main').appendChild(dscreen);
      if(dscreen){
        dscreen.addEventListener('click',function(){
          dscreen.remove();
          player.classList.remove('player');
          player.classList.add('squeeze');
        })
        document.addEventListener('keydown', function(event) {
          if (event.code == 'Escape'){
            dscreen.remove();
            player.classList.remove('player');
            player.classList.add('squeeze');
          }
        })
      }
    })
}

var scale = function(image,index){
  image.addEventListener('mouseover',function(){
    document.querySelector('main').appendChild(dscreen);
    unscale[index].classList.toggle('scale-img');
  })
}
var unscaleimg = function(image,index){
  image.addEventListener('mouseout',function(){
    document.querySelector('main').appendChild(dscreen);
    unscale[index].classList.toggle('scale-img');
})
}
for (var i = 0; i < images.length; i++) {
  scale(images[i],i);
}

if(dscreen){
  dscreen.addEventListener('click',function(){
    dscreen.remove();
    for (var i = 0; i < images.length; i++) {
      unscale[i].classList.remove('scale-img');
    }
  })
}

if(arrow){

  arrow.addEventListener('click',function(){
  if (window.pageYOffset > 2000){
    window.scroll(0, 0);
  }
  else{
    window.scrollBy(0, window.innerHeight);
  }
  })
  window.onscroll = function () {
    if (window.pageYOffset > 2000){
      arrow.style.transform = "rotate(180deg)";
      arrow.style.transition = '1s';
    }
    else if (window.pageYOffset == 0) {
      arrow.style.transform = "rotate(0deg)";
      arrow.style.transition = '1s';
    }
  }
}

var moveArrow = function(link){
  link.addEventListener('mouseover', function(){
    // console.log('mouse');
    linkarrow.style.left = 1 + '%';
    linkarrow.style.transition = '0.5s';
    linkarrow.style.top = link.getBoundingClientRect().top - 70 + 'px'
  })
  link.addEventListener('mouseout', function(){
    console.log('mouse');
    linkarrow.style.left = -5 + '%';
      linkarrow.style.transition = '0.5s';
  })
}
for (var i = 0; i < links.length; i++) {
  moveArrow(links[i]);
}








// darkscreen.addEventListener('mouseover',function(){
//   darkscreen.classList.toggle('darkscreen_on');
// for (var i = 0; i < images.length; i++) {
//   unscale[i].classList.remove('scale-img');}
// })




// const popupLinks = document.querySelectorAll(".popup-link");
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");
// let unlock = true;
// const timeout = 800;
//
// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++){
//      const popupLink = popupLinks[index];
//      popupLink.addEventListener("click", function (e) {
//        const popupName = popupLink.getAttribute(’href').replace(, '');
//        const curentPopup = document.getElementByld(popupName);
//        popupOpen(curentPopup); e.preventDefault();
//      });
//    }
// }


// let a = document.querySelector('.contentBx');
// let b = document.querySelector('.imgBx');
// let toggle = document.querySelector('.toggle');
// let nav_toggle_off = document.querySelector('.nav_toggle_off');
// // let nav = document.querySelector('.nav');
// let services = document.querySelector('.services')
// let brand = document.querySelector('.brand')
// // let serviceBx = document.querySelectorAll('.serviceBx')



// -------

// let links = document.querySelectorAll('.link');
// let linkArrow = document.getElementById('linkArrow');
// let link_f = document.querySelector('.link:first-child');
//
// var getHover = function(link){
//     link.addEventListener('click',function(){
//         linkArrow.style.top = link.style.top;
//         console.log(linkArrow.style.top);
//     })
// }
//
// for(i = 0; i < links.length;i++){
//     getHover(links[i]);
// }

// ----------


// window.onscroll = function () {
//   if (window.pageYOffset > 1000 && window.pageYOffset<2500) {
//     a.classList.add('contentBxScrol');
//     b.classList.add('imgBxScrol');
//   } else {
//     a.classList.remove('contentBxScrol');
//     b.classList.remove('imgBxScrol');
//   }
//   if (window.pageYOffset >200 && window.pageYOffset<1700) {

//     services.classList.add('servicesScrol');
//   } else {
//     services.classList.remove('servicesScrol')
//   }
//   if (window.pageYOffset >3300 && window.pageYOffset<3800) {
//     brand.classList.add('brandScrol');
//     // brand:nth-child(2).classList.add('brandScrol');
//     // brand:nth-child(3).classList.add('brandScrol');
//     // brand:nth-child(4).classList.add('brandScrol');
//   } else {
//     brand.classList.remove('brandScrol');
//     // brand:nth-child(2).classList.remove('brandScrol');
//     // brand:nth-child(3).classList.remove('brandScrol');
//     // brand:nth-child(4).classList.remove('brandScrol');
//   }

// };

// toggle.onclick = function () {

//   nav_toggle_off.classList.toggle('nav_toggle_on');
//   toggle.classList.toggle('toggle_x');
//   // nav.classList.toggle('nav_toggle_on');
// };

//   // for (let element of serviceBx){
//   //   element.onclick = function (){
//   //   element.classList.toggle('serviceBxTouch');
//   //   }
//   // }
//   // serviceBx.onclick = function () {

//     // serviceBx.classList.toggle('serviceBx:hover');
//     // nav.classList.toggle('nav_toggle_on');
//   // };
