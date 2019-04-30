var doc = document;
doc.addEventListener("DOMContentLoaded", function(ev){
	var selectedText = '';	
	var changeStyle = function(cmd,arg){
		if(selectedText.rangeCount && selectedText.getRangeAt){
			range = selectedText.getRangeAt(0);
		}	
		doc.designMode = "on";
		if(range){
			selectedText.removeAllRanges();
			selectedText.addRange(range);
		}
		doc.execCommand(cmd, false, arg);
		doc.designMode = "off";
	}
	doc.getElementById('content').addEventListener("mouseup", function(){
		selectedText = doc.getSelection();	
	});
	doc.getElementById('bold').addEventListener("click",function(){
		changeStyle('bold', null);
	});
	doc.getElementById('italic').addEventListener("click",function(){
		changeStyle('italic', null);
	});
	doc.getElementById('underline').addEventListener('click',function(){
		changeStyle('underline', null)
	});
	doc.getElementById('strickthrough').addEventListener('click', function(){
		changeStyle('strikeThrough', null);
	});
	doc.getElementById('upload').addEventListener('click', function(){
		var url = prompt("Enter the url of Image you want to insert");
		changeStyle('insertImage', url);
	});
	doc.getElementById('content').addEventListener('keyup',function(ev){
		if(ev.keyCode == 8){
			console.log(doc.getSelection().anchorNode.parentNode.nodeName);
		}		
	});

});