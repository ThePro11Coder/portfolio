var form = document.querySelector('#formID');

function submitForm() {
  form.style.animationFillMode = "forwards";
  form.style.animationName = "slideUp";
  setTimeout(function(){
      form.style.animationName = "pop-in";
  },1000);

}