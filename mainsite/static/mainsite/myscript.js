const header = document.querySelector(".header");
const copyText1 = document.querySelector("#copy-text1");
const copyText2 = document.querySelector("#copy-text2");
const playbtn = document.querySelector(".HowItWorks__play");
const video = document.querySelector("#video");
const footerContent = document.querySelector(".footer__content");
const footer = document.querySelector(".footer");
const formContent = document.querySelector(".connect__formBlockContent");

window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > 150){
    header.style.backgroundColor = "rgb(255,255,255,0.8)"
    header.opacity = "0.6"
  }
  else{
    header.style.backgroundColor = "transparent"
    header.opacity = "0"
  }
})

function copyText(copyText) {
  let area = document.createElement("textarea");
  area.value = copyText.textContent;
  document.body.appendChild(area).select();
  document.execCommand("copy");
  area.remove();
}
if(video){
  video.addEventListener("click",()=>{
  playbtn.classList.toggle("unvisiable")
  })
}

window.addEventListener("load",()=>{
  if(window.location.pathname == "/"){
    footerContent.style.borderTop = 'none';
    footer.style.marginTop = '0';

  }
})
function succesSend(){
  // document.querySelector(".connect__formBlock").style.alignItems = "flex-start";
  formContent.style.alignSelf = "flex-start";
  formContent.style.justifyContent = "center"
  formContent.innerHTML = `
    <h2 class=" block__title" style="color:#12A276; margin-top:12rem;">Message sent successfully!</h2>
    <p class="connect__subtitle">We will reply to you within one business day.</p>
  `;

}


// const images = document.querySelectorAll('.img-normal');
// const unscale = document.querySelectorAll('#img-unscale');
// const arrow = document.querySelector('.arrowbox');
// const videoCover = document.querySelector('.videoCover');
// const player = document.querySelector('.player');
// const video = document.querySelector("#video");
// const links = document.querySelectorAll('.activelink');
// const linkarrow = document.querySelector('#linkArrow');
// const copyText1 = document.querySelector("#copy-text1");
// const copyText2 = document.querySelector("#copy-text2");
// const end = document.querySelector('.end');
// const fotoBox = document.querySelector(".foto-box");
// const arrowLeft = document.querySelector(".arrowLeft");
// const arrowRight = document.querySelector(".arrowRight");
// const teamBlock = document.querySelector(".team");
// let activeLink = document.querySelector('.active-link');
// let dscreen = document.createElement('div');
//
// dscreen.classList.add('darkscreen_on');
//
// function copyText(copyText) {
//   let area = document.createElement("textarea");
//   area.value = copyText.textContent;
//   document.body.appendChild(area).select();
//   document.execCommand("copy");
//   area.remove();
// }
//
// if(screen.availWidth > 767){
//   if(videoCover){
//       videoCover.addEventListener('mouseover',function(){
//         player.style.display = 'block';
//         document.querySelector('main').appendChild(dscreen);
//         videoCover.style.display = 'none';
//         if(dscreen){
//           dscreen.addEventListener('click',function(){
//             dscreen.remove();
//             player.classList.remove('player');
//             player.classList.add('squeeze');
//           })
//           document.addEventListener('keydown', function(event) {
//             if (event.code == 'Escape'){
//               dscreen.remove();
//               player.classList.remove('player');
//               player.classList.add('squeeze');
//             }
//           })
//         }
//       })
//   }
// }else{
//   if(videoCover){
//     videoCover.addEventListener('mouseover',function(){
//       player.style.display = 'block';
//       player.classList.add('squeeze');
//       videoCover.style.display = 'none';
//     })
//   }
// }
//
//   let scale = function(image,index){
//     image.addEventListener('click',function(){
//       document.querySelector('main').appendChild(dscreen);
//       images[index].classList.add('scale-img');
//     })
// }
//
// if(screen.availWidth > 767){
//   for (var i = 0; i < images.length; i++) {
//     scale(images[i],i);
//   }
// }
// if(dscreen){
//   dscreen.addEventListener('click',function(){
//     dscreen.remove();
//     for (var i = 0; i < images.length; i++) {
//       images[i].classList.remove('scale-img');
//     }
//   })
// }
//
// if(arrow){
//   arrow.addEventListener('click',function(){
//   if (window.pageYOffset > 2000){
//     window.scroll(0, 0);
//   }
//   else{
//     window.scrollBy(0, window.innerHeight);
//   }
//   })
//   window.onscroll = function () {
//     if (window.pageYOffset > 2000){
//       arrow.style.transform = "rotate(180deg)";
//       arrow.style.transition = '1s';
//     }
//     else if (window.pageYOffset == 0) {
//       arrow.style.transform = "rotate(0deg)";
//       arrow.style.transition = '1s';
//     }
//   }
// }
//
// let moveArrow = function(link){
//   link.addEventListener('mouseover', function(){
//     linkarrow.style.left = 1 + 'vw';
//     linkarrow.style.transition = '0.5s';
//     linkarrow.style.top = link.getBoundingClientRect().top - 65 + 'px'
//   })
//
//   link.addEventListener('mouseout', function(){
//       linkarrow.style.left = -10 + '%';
//       linkarrow.style.transition = '0.5s';
//   })
// }
// for (var i = 0; i < links.length; i++) {
//   moveArrow(links[i]);
// }
// function getnoneActev(){
//   activeLink.classList.remove('active-link');
// }
//
// const team = [
//   ['Alexander Mikhasenak','Chief executive officer','/static/mainsite/img/mih.jpg'],
//   ['Kiryl Ambrazheichyk','Chief technical director','/static/mainsite/img/kirya.jpg'],
//   ['Alexander Volodin','Chief informational officer','/static/mainsite/img/volod.jpg'],
//   ['Maryna Karaban','Promotion specialist ','/static/mainsite/img/maryna.jpg'],
// ]
// function createTeam(team){
//   let conteiner;
//   let foto;
//   let name;
//   for(let i = 0; i < 3;i++){
//     conteiner =  document.createElement('div');
//     conteiner.classList.add(`foto-conteiner`);
//     conteiner.textContent = team[i][1]
//     foto = document.createElement('div');
//     foto.classList.add(`foto`);
//     foto.style.backgroundImage = `url(${team[i][2]})`;
//     foto.style.backgroundSize = `cover`;
//     foto.style.backgroundPosition = `center`;
//     name =  document.createElement('div');
//     name.inrerHTML = `${team[i][0]}`
//     name.textContent = team[i][0];
//     conteiner.prepend(name);
//     conteiner.prepend(foto);
//     fotoBox.append(conteiner)
//   }
// }
//
//
// if(teamBlock){
//   createTeam(team);
//   arrowLeft.addEventListener('click',()=>{
//     team[team.length-1] = team.shift();
//     fotoBox.innerHTML = '';
//     createTeam(team)
//   })
//   arrowRight.addEventListener('click',()=>{
//     team.unshift(team.pop())
//     fotoBox.innerHTML = '';
//     createTeam(team)
//   })
// }
