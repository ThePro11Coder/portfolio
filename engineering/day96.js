var CanvasStress = function(canvas, letter) {
  this.init = function(canvas, letter) {
    var self = this;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="rgba(0,0,0,.5)";
    var t = window.setInterval(function() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      self.addStress(ctx, 3);
    }, 1000/10); 
  }
  
  this.addStress = function(ctx, layers) {
    
    for (var i = 0; i < layers; i++) {
      ctx.font="Bold "+ Math.round((80 + Math.random() * 5 - 10)).toString() +"px Helvetica"
      ctx.fillText(letter, Math.random() * 5, canvas.height + (Math.random() * 10 - 25));
    }
    
  }
  
  this.init(canvas, letter);
}

$('.stress .letter').each(function(e) {
  $(this).find('canvas').attr('width', $(this).width()).attr('height', $(this).height())
  var canvasStress = new CanvasStress($(this).find('canvas')[0], $(this).text());
});