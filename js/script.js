'use strict';

/* Accordeon */

let binfo = document.getElementsByClassName("company_block_btn");
let i;

for (i = 0; i < binfo.length; i++) {
    binfo[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* Accordeon end */

/* Lang block */

function sel() {
    let select=document.querySelector('.change-lang').value;
    switch (select) {
      case 'ru': 
      document.querySelector(".name").innerHTML=langArr.name.ru;
      break;
      case 'ua': 
      document.querySelector(".name").innerHTML=langArr.name.ua;
      break;
      case 'en': 
      document.querySelector(".name").innerHTML=langArr.name.en;
      break;
  }
}

document.querySelector(".change-lang").onchange=sel;

/* Lang block end */

/* Audio */

let aud=document.querySelector(".audio_set");
aud.volume=0.2;

let musoff=document.querySelector('.audio_btn');

musoff.addEventListener("click", function moff(){
  aud.volume=0.0;
})



/* Audio end*/

/* Modal window */

let outWin=document.querySelector(".btn_in");
outWin.onclick =()=> {
  document.querySelector(".modal_win").style.display="none";
}
 
/* modal window end */

/* Avatar */

let avatars=document.querySelectorAll(".avatar_img"),
  next=document.querySelector(".btn_right"),
  prev=document.querySelector(".btn_left");

let avatarIndex=1;

avatarMove(avatarIndex);

function avatarMove(n) {
  if (n>avatars.length) {
    avatarIndex=1;
  }
  if (n<1) {
    avatarIndex=avatars.length;
  }

  avatars.forEach((item) => item.style.display='none');

  avatars[avatarIndex-1].style.display='block';

  function avatarInd(n) {
    avatarMove(avatarIndex+=n);
  }

    prev.addEventListener('click', function(){
      avatarInd(-1);
    });

    next.addEventListener('click', function(){
      avatarInd(1);
    });
};


/* Avatar end */

