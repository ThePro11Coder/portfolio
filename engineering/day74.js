jQuery(document).ready(function($) {
    if (window.location.pathname !== '/') { 
        window.onload = resizeHeader()
    }
    function resizeHeader() {
        window.addEventListener('scroll', function(){

            var distanceY = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

            nav = document.querySelector(".navbar")

            if (distanceY) {
              
                console.log('scrolled')
              
                nav.classList.add("smallerNav")
            } else {
              if (nav.classList.contains("smallerNav")) {
                
                console.log('back to top')  
                
                nav.classList.remove("smallerNav")
              }
            } 
        })
    } 

})