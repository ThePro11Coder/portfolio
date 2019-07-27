var lBar = $(".load");
var bar = $("button span");
var button = $("button");

button.on("click", function(){
     lBar.addClass("loading");
     setTimeout(function(){
        lBar.removeClass("loading");
        button.addClass("complete");
     },500);
});

