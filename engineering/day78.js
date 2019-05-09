$(function() {
	
	function resetCanvas(canvasSize) {
		$("#canvas").empty();
		var pixelSizePercent = (100/canvasSize)+"%";
		for ( var i = 0; i < canvasSize*canvasSize; i++ ) {
			$("<div></div>").addClass("pixel").css(
				{
					width : pixelSizePercent, 
					height : pixelSizePercent
				}).appendTo("#canvas");
		}
	}
	
	$("#toolbar input").on("change", function() {
		var size = $(this).val();
		resetCanvas(size);
	})
	
	$("#canvas").on("click", ".pixel", function() {
		var	currentTool = $("#toolbar .button[data-tool].selected").data("tool");
		var currentColor = $("#colorpicker div[data-color].selected").data("color");
		switch( currentTool ) {
			case "pencil": 
				$(this).css("background-color", currentColor);
				break;
			case "bucket":
				var color = $(this).css("background-color");
				$("#canvas .pixel").each(function() {
					if ($(this).css("background-color") === color) {
						$(this).css("background-color", currentColor);
					}
				});
				break;
			case "eraser":
				$(this).css("background-color", "white");
				break;
			default:
				console.log("unknown tool");
		}
		
		
	});
	
	$("#colorpicker").on("click", "div[data-color]", function() {
		$("#colorpicker div[data-color]").removeClass("selected");
		$(this).addClass("selected");
	});
 	
	$("#toolbar").on("click", ".button[data-tool]", function() {

		$("#toolbar .button[data-tool]").removeClass("selected");
		$(this).addClass("selected");
		
	});
	
	resetCanvas(8);
}); 