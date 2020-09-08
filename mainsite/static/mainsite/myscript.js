var images = document.querySelectorAll('#img-scale');
var darkscreen = document.querySelector('.darkscreen_off')
var scale = function(image,index){
  image.addEventListener('click',function(){
    // imgScale.classList.toggle('image-scale');
    console.log('click');
    darkscreen.classList.toggle('darkscreen_on');
    var element = document.createElement('img');
    element.classList.add('scale-img');
    if(darkscreen.childNodes[1]){
      console.log('child');
      darkscreen.childNodes[1].remove()
    }
    var path = `/static/mainsite/img/exp_image_${index+1}.jpg`
    element.setAttribute('src', path);
    darkscreen.append(element);
})
}

for (var i = 0; i < images.length; i++) {
  scale(images[i],i);
}
darkscreen.addEventListener('click',function(){
  console.log('click');
  darkscreen.classList.toggle('darkscreen_on');
  // darkscreen.removeChild(child)
})





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
