let paint = "#fff";
let colors = document.querySelectorAll('.colors');
let block = document.querySelectorAll('.wrapper-blocks')

colors.forEach((el) => {
  el.addEventListener('click', () => {
    paint = getComputedStyle(el).backgroundColor;
  });
});

block.forEach((el) => {
  el.addEventListener('click', () => {
    el.style.backgroundColor = paint;
  });
});