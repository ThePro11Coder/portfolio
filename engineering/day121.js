function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length < 6) hex += hex.slice(0);
  return hex.match(/.{2}/g).map(val => parseInt(val, 16));
}

function rgbToHex(rgb) {
  console.log(rgb);
  return rgb.reduce((acc,val) => acc + (0 + val.toString(16)).slice(-2), '#');
}

function validateInput(inputValue) {
  const resultDiv = document.getElementById('result');
  
  if (inputValue.includes('#') && inputValue.length <= 7) {
    resultDiv.innerHTML = `<h3>rgb(${hexToRgb(inputValue)})</h3>`;
  } else {
    inputValue = inputValue.replace(/(rgb)|\(|\)/g, '')
                           .split(',')
                           .map(val => Number(val));
    
    resultDiv.innerHTML = `<h3>${rgbToHex(inputValue)}</h3>`;
  }
}

document.getElementById('convert-form').onsubmit = function(event) {
  event.preventDefault();
  validateInput(document.getElementById('convert-input').value);
}
