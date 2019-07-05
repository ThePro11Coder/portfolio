$(function() {
			// Note the screen size.
			var screenSize = {
				height : $(document).height(),
				width : $(document).width()
			};
			
			// Generate random bubbles on screen.
			for (var i = 0; i < 500; i++) {
				// Random location and size.
				var size = Math.random() * 40 + 20,
					left = screenSize.width * Math.random(),
					top = screenSize.height * Math.random();
				
				// Add the bubble to the page.
				var bubble = $("<div>", {
					"class" : "Bubble",
					css : {
						left : left,
						top : top,
						height : size,
						width : size,
						margin : "-" + (size / 2) + "px"
					}
				}).appendTo(document.body).get(0);
				
				// Record this bubble's info into the element itself for easier access.
				bubble.radius = size / 2;
			}
			
			// Retain the bubbles in memory as a jQuery object, for quicker access.
			var bubbles = $(".Bubble");
			
			// User's cursor bubble.
			var userBubble = $("<div>", {
				id : "UserBubble",
				css : {
					left : -100,
					top : -100
				}
			}).appendTo(document.body);
			
			// Note the user bubble's size.
			var userBubbleRadius = userBubble.width() / 2;
			
			// Page mouse move function...
			$(document).mousemove(function(event) {
				// Move the user bubble.
				userBubble.css({
					left : event.clientX,
					top : event.clientY
				});
				
				// Check each bubble to see if it's overlapped by the user bubble.
				bubbles.each(function() {
					var pos = $(this).offset();
					
					// Calculate distance between the user bubble and this bubble.
					var distance = Math.sqrt(Math.pow(pos.left + this.radius - event.clientX, 2) +
						Math.pow(pos.top + this.radius - event.clientY, 2)),
						
						overlap = userBubbleRadius + this.radius - distance;
					
					// If the bubbles overlap...
					if (overlap > 0) {
						var xMovement = (pos.left - event.clientX) * distance / 20,
							yMovement = (pos.top - event.clientY) * distance / 20;
						
						$(this).stop().animate({
							left : (xMovement > 0 ? "+" : "-") + "=" + (xMovement > 0 ? xMovement : -xMovement),
							top : (yMovement > 0 ? "+" : "-") + "=" + (yMovement > 0 ? yMovement : -yMovement)
						}, 500);
					}
				});
			});
		});
