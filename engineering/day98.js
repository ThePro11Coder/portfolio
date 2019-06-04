let raptors = document.querySelector('#raptors');
let goldengate = document.querySelector('#goldengate');
let heart_one = document.querySelector('.heart_one');
let heart_two = document.querySelector('.heart_two');
let raptor_score = 0;
 var rap = document.querySelector('.rap');
 var warrior = document.querySelector('.warrior');
var r;
var w;
let warrior_score = 0;
function heartOption() {
  if(heart_one.style.display == 'none') {
    heart_one.style.display = 'block';
       raptor_score += 1;
       r = String(raptor_score);
       rap.style.width = r + '%';
  } else {
    heart_one.style.display = 'none';
    
  }
  console.log(raptor_score);
}

function heartOption_Two() {
  if(heart_two.style.display == 'none') {
    heart_two.style.display = 'block';
      warrior_score += 1;
       w = String(warrior_score);
       warrior.style.width = w + '%';

  } else {
    heart_two.style.display = 'none';
    
  }
  console.log(warrior_score);
}





goldengate.addEventListener('click',heartOption);
raptors.addEventListener('click',heartOption_Two);