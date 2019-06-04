const eos = new Date("August 12, 2019 12:00:00").getTime();

let timer = setInterval(function() {

  const today = new Date().getTime();

  const diff = eos - today;

  
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = `<span class="text--numbers">${days}</span>  Days`;
  document.getElementById('hours').innerHTML = `<span class="text--numbers">${hours}</span> Hours`;
  document.getElementById('minutes').innerHTML = `<span class="text--numbers">${minutes}</span> Minutes`;
  document.getElementById('seconds').innerHTML = `<span class="text--numbers">${seconds}</span> Seconds`;
  
  
  if(seconds === 1){
      document.getElementById('seconds').innerHTML = `<span class="text--numbers">${seconds}</span> Second`;
   if(minutes === 1){
  document.getElementById('minutes').innerHTML = `<span class="text--numbers">${minutes}</span> Minute`;
   }
   if(hours === 1){
       document.getElementById('hours').innerHTML = `<span class="text--numbers">${hours}</span> Hour`;
   }
   if(days === 1){
       document.getElementById('days').innerHTML = `<span class="text--numbers">${days}</span>  Day`;
   }
  }
})