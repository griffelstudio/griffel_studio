const images = document.querySelectorAll('.img-normal');
const unscale = document.querySelectorAll('#img-unscale');
const arrow = document.querySelector('.arrowbox');
const videoCover = document.querySelector('.videoCover');
const player = document.querySelector('.player');
const video = document.querySelector("#video");
const links = document.querySelectorAll('.link');
const linkarrow = document.querySelector('#linkArrow');
const copyText1 = document.querySelector("#copy-text1");
const copyText2 = document.querySelector("#copy-text2");
const end = document.querySelector('.end');
let activeLink = document.querySelector('.active-link');

let dscreen = document.createElement('div');
dscreen.classList.add('darkscreen_on');

function copyText(copyText) {
  let area = document.createElement("textarea");
  area.value = copyText.textContent;
  document.body.appendChild(area).select();
  document.execCommand("copy");
  area.remove();
}

if(screen.availWidth > 767){
  if(videoCover){
      videoCover.addEventListener('mouseover',function(){
        player.style.display = 'block';
        document.querySelector('main').appendChild(dscreen);
        videoCover.style.display = 'none';
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
}else{
  if(videoCover){
    videoCover.addEventListener('mouseover',function(){
      player.style.display = 'block';
      player.classList.add('squeeze');
      videoCover.style.display = 'none';
    })
  }
}

  let scale = function(image,index){
    image.addEventListener('mouseover',function(){
      document.querySelector('main').appendChild(dscreen);
      images[index].classList.add('scale-img');
    })
}

if(screen.availWidth > 767){
  for (var i = 0; i < images.length; i++) {
    scale(images[i],i);
  }
}
if(dscreen){
  dscreen.addEventListener('click',function(){
    dscreen.remove();
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('scale-img');
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

let moveArrow = function(link){
  link.addEventListener('mouseover', function(){
    linkarrow.style.left = 1 + 'vw';
    linkarrow.style.transition = '0.5s';
    linkarrow.style.top = link.getBoundingClientRect().top - 65 + 'px'
  })
  link.addEventListener('mouseout', function(){
      linkarrow.style.left = -10 + '%';
      linkarrow.style.transition = '0.5s';
  })
}
for (var i = 0; i < links.length; i++) {
  moveArrow(links[i]);
}
function getnoneActev(){
  activeLink.classList.remove('active-link');
}
