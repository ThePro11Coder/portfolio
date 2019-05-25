$(document).ready(function() {  
    var likes = $("#numlikes").html();
    var num = parseInt(likes, 10);
  
  $("#like").click(function(){
    $(".broken").css({
      display: 'none'
    });
    $("#numlikes").animate({
      opacity: '0.5',
    });
    num+=1;
     $("#numlikes").animate({
       opacity:'1'
    });
    $("#numlikes").text(num);
  });
  
  $("#reset").click(function(){
     $("#numlikes").animate({
      opacity: '0.5'
    });
    $(".broken").css({
      display: 'block'
    });
    num=0;
     $("#numlikes").animate({
      opacity: '1'
    });
    $("#numlikes").text(num);
  });
  
});