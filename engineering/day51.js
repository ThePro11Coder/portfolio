var obj, x, y, prev_x, prev_y;

function drag(e) {
  obj = e.target;
  prev_x = x - obj.offsetLeft;
  prev_y = y - obj.offsetTop;
  obj.style.background = '#00ff00';
}

function move(e) {
  if (e.pageX) {
    x = e.pageX; 
    y = e.pageY; 
  }

  if(obj) {
    obj.style.left = (x - prev_x) + 'px';
    obj.style.top = (y - prev_y) + 'px';
  }
}

function drop() {
  obj.style.background = '';
  obj = false;
}

document.getElementById('ball').onmousedown = drag;
document.onmousemove = move;
document.onmouseup = drop;
