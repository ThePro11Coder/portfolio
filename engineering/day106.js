var mesure = '&nbsp;pupils';
var input = document.getElementById('input');
var graph = document.getElementById('graph');
var data = [
  ['Pear','6'],
  ['Orange','11'],
  ['Appple','13']
];

rendr();
rendrInput();

function rendr(){
  graph.innerHTML = '';
  for(var i = 0; i < data.length; i++){
    graph.innerHTML += '<tr><th class="label"></th><td><span class="bar">&nbsp;</span></td></tr>'
  }
  var lines = graph.querySelectorAll("tr");
  for(var i = 0; i < lines.length; i++){
    lines[i].querySelectorAll('.label')[0].innerHTML = data[i][0]; 
    lines[i].querySelectorAll('.bar')[0].style.width = data[i][1] + '%'; 
    lines[i].querySelectorAll('.bar')[0].innerHTML = data[i][1] + mesure; 
  }
}

function rendrInput(){
  input.innerHTML = '';
  for(var i = 0; i < data.length; i++){
    input.innerHTML += '<tr><th><input oninput="data['+ i +'][0] = this.value; rendr();" class="name" type="text" placeholder="name" /></th><td><input class="percent" oninput="data['+ i +'][1] = this.value; rendr();" type="number" min="1" max="100" />&nbsp;</td></tr>'
  }
  var lines = input.querySelectorAll("tr");
  for(var i = 0; i < lines.length; i++){
    lines[i].querySelectorAll('.name')[0].value = data[i][0]; 
    lines[i].querySelectorAll('.percent')[0].value = data[i][1]; 
  }
}

function add(){
  data.push(['new item', Math.floor((Math.random() * 90) + 10)]);
  rendrInput();
  rendr();
}

function remove(){
  data.pop();
  rendrInput();
  rendr();
}

function cmesure(self){
  mesure = self.value;
  rendr();
}