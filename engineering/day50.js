var inc = 1;

function _(id){
    return document.getElementById(id);
}
function reset(v){
  document.body.innerHTML = '';
  inc = 1;
}

function clearnode(node){
  setTimeout(function(){
     _(node).parentNode.removeChild(_(node));
  }, 1000*2);
}

setInterval(function(){
  if (inc < 999999999999999) inc++;
  else reset(inc);
  var div = document.createElement('div');
  let temp = Math.floor((Math.random() * 7) + 1 );
  div.id = 'paper'+inc;
  div.style.webkitAnimationDuration = (Math.random()*1+1.5)+'s, 0.5s';
  div.style.height = eval(7*1+Math.floor((Math.random() * 7) + 1 )-2)+'px';
  div.style.width = div.style.height;
  div.className = 'paper paper'+temp;
  div.style.left = Math.floor((Math.random() * 100) + 1)+'%';
  document.body.append(div);
  clearnode(div.id);
}, 10);