window.requestAnimFrame = (function(){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame || 
            function (callback) {
                return window.setTimeout(callback, 17);
            };
    })()
	
	var Main = {
        time: 0,
        images: [
            {}            
        ],
        logo: null,
        hue: 100,
		        body: document.getElementsByTagName('body')[0],
        Loader: {
            STOR: {
                readyCnt: 99
            },
            init: function() {
                Main.Loader.STOR.total = Main.Loader.STOR.readyCnt = Main.images.length;
                //setTimeout(function() {
					                  Main.Loader.load();
				                //}, 2000);
            },
            load: function() {
                a = Main.images[0];
                a.obj = new Image();
                a.obj.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAA3NCSVQICAjb4U/gAAAABlBMVEX///8AVVWJD98UAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA0LzA2LzEzT+v8VAAAApBJREFUWIXtlj1u3DAQhcUQMEumTBXmJvSRXLqKdLPoJtERVKoQlpH4MyRHfAtQMWAEyBTetT+TmjfzhtQw/FPxeoMs/USs/URu/UTt/UQ/+olx/cS6qZuMbu4mzi29RDgH2oCJdA60ARPlHGgDJto50AZMrHN1SV/jp3FnNIjyoMph8T+li7ExIhwFVSiYWWWy10RmQtsFM7d2izbPZEkkmnkkMjNiiVAZopkNEZITraQToKKmMpKgPS8Jz7xWJ60hQSTHpGde5FAjk6AsJz0zCSI5ZLIkiOSQZTWTkwfg2u00TpLJyUQwOcU4jXXSBbF10gUxddI3iQHPEbtaAVkFIvPw1iSTGIavbZJTqcmxF0VdHUzk0k/U2k900dzaiJiYvSK/EHnoTGxlvE0ishTn8ljZeDqqujbJ6YWVdpgy2U9zR6LKk+n8KuLvspQmfGHGNe5cVEr4R5ry5IqLpBettusaGfYpT66YnQz/8R7VFE6W4eNbqA0b2RyGjWwOzUY2h2Ijm6OqQRWCDXMRbJiLsPAuMvBm+1iCM/gr8uUGUZyMqdlX8rCB6ImTTSOyyEDMzMk0AHIkZv0+dmHkKKdpk8M3ypORO+jYXbQJBXoFekIEau0TIlEDT6fMTaCRi+OtiJY0F+E14cRoZRdOjKYiByd5hJNs4SQbOMmwBkFQC3hBoNgoaZ82sMjHEpxBJj9ukLcbhCUicrMvZItE7JwsFpFJhz9J1gzxiPfShZwv0vFkYq09r6ufbTIPw3f/TTOjnNfVS5PkeOaHdgs1mrA4Yq01Et6VAk4YzsAP0tIkBt6IGt6ICs3RmTaYIwFvt88nOOt75DckCpFdAHK87I6AzIMBZBp0m7zQK9n/+PT4AyhCcdQ3agdHAAAAAElFTkSuQmCC";
                a.obj.addEventListener('load', Main.Start);
            }
        },
        Init: function() {
            var setDimensions = function() {
                Main.w2 = Main.canv2.width = window.innerWidth
                Main.h2 = Main.canv2.height = ~~(Main.w2 * (240 / 480)); 
                if (Main.h2 >= window.innerHeight) {
                    Main.h2 = Main.canv2.height = window.innerHeight;
                    Main.w2 = Main.canv2.width = Main.canv2.width//~~(Main.h2 * 2);
                } else {
                    Main.w2 = Main.canv2.width = window.innerWidth;
                    Main.h2 = Main.canv2.height = ~~(Main.w2 / 2);
                }
                Main.canv2.style.marginTop =  ~~((window.innerHeight - Main.h2 ) /2) + "px";
            }
        
            Main.canv2 = document.getElementById('Canvas2'); //main
            Main.canv3 = document.getElementById('Canvas3');
            
            Main.ctx2 = Main.canv2.getContext('2d');
            Main.ctx3 = Main.canv3.getContext('2d');
            
            Main.w3 = Main.canv3.width = 640;
            Main.h3 = Main.canv3.height = 320;
             
            setDimensions();
            
            window.addEventListener('resize', function() {
                setDimensions();
            })
            
            Main.ctx2.webkitImageSmoothingEnabled = Main.ctx3.webkitImageSmoothingEnabled = false;
            
            Main.Loader.init();    
        },
        
        Start: function() {
            //Main.ctx3.strokeStyle = "#000";
            //Main.ctx3.lineWidth = 2;
            
			            Main.center.init()

            Main.Bg.init();
            Main.Paint();
			
            setInterval(function() {
              Main.hue = Main.hue + 0.1;
              Main.body.style.webkitFilter = 'hue-rotate(' + Main.hue + 'deg)';
            }, 20)

        },
        center: {
          grad: null,
          init: function() {
            Main.center.grad = Main.ctx3.createRadialGradient(240, 120, 0, Main.w3/4, Main.h3/4, 100);
            Main.center.grad.addColorStop(0, "rgba(0,0,0,1)");
            Main.center.grad.addColorStop(0.1, "rgba(0,0,0,1)");
            Main.center.grad.addColorStop(0.8, "rgba(0,0,0,0.1)");

            Main.center.grad.addColorStop(1, "rgba(0,0,0,0)");
          },
          draw: function() {
            Main.ctx3.globalAplha = 1;
            Main.ctx3.fillStyle = Main.center.grad;
            Main.ctx3.beginPath();
            Main.ctx3.arc(Main.w3 / 2, Main.h3 / 2, 375, 0, Math.PI*2, true); 
            Main.ctx3.closePath();
            Main.ctx3.fill();
          }
		        },
        Bg: {
            COUNT: 128,
            background: {r: 0, g: 48, b: 64, ls: 0, rad: 0 },
            table: [],
            imgTable: [],
            backgroundShift: function() {
                Main.Bg.background.ls = Math.sin(Main.Bg.background.rad) * 30 - 30;                
                Main.Bg.background.rad += 0.02;
                Main.Bg.cShift = Math.sin(Main.Bg.background.rad) * 50;
                setTimeout(Main.Bg.backgroundShift, 200);
            },
            init: function() {
                var i = Main.Bg.COUNT,
                    imagesCnt = Main.images.length;
                    
                for (i; i + 1; i--) {
                    Main.Bg.imgTable[i] = {
                        image: Main.images[0].obj, 
                        r: i % (2 * Math.PI),
                        s: -i + 40
                    };
                }
                
                setTimeout(function() {
                  Main.Bg.backgroundShift();
                }, 500);
            },
            
            main: function() {
				
                var i = Main.Bg.COUNT,
                    size = 0;
                    
                Main.ctx3.save();
                Main.ctx3.translate(240 ,120);
                
                for (i; i + 1 ; i--) {
                    Main.ctx3.save();
                    Main.ctx3.rotate(Main.Bg.imgTable[i].r);
                    size = Math.max(0, Main.Bg.imgTable[i].s * 1.4);
                    Main.ctx3.globalAlpha = size / 175                    
					
                    if (size > 0) Main.ctx3.drawImage(Main.Bg.imgTable[i].image, 0, 0, size, size);
                    
                    Main.ctx3.restore();                    
                }
                
                Main.ctx3.restore();
				                Main.center.draw();
                Main.Bg.move();
            },
            
            move: function() {
                var i = Main.Bg.COUNT;
                for (i; i + 1 ; i--) {
                    Main.Bg.imgTable[i].s = (Main.Bg.imgTable[i].s + Math.max(.14, Main.Bg.imgTable[i].s * 0.015)) ;
                    Main.Bg.imgTable[i].r += 0.014
                    Main.Bg.imgTable[i].r = Main.Bg.imgTable[i].r % 360;
                    if (Main.Bg.imgTable[i].s > 700) {
                    Main.Bg.imgTable[i].s = -i ;
                  }
                }
            }
        
        },
        
        Paint: function() {    
			        Main.ctx3.fillStyle = "rgba(" + ~~(Main.Bg.background.r + Main.Bg.background.ls) + "," 
                          + ~~(Main.Bg.background.g + Main.Bg.background.ls) + ","
                          + ~~(Main.Bg.background.b + Main.Bg.background.ls) + ", 1)";
                
            Main.ctx3.fillRect(0, 0, 640, 320);			
            Main.Bg.main();            
			            Main.ctx2.globalAlpha = 0.1;
            Main.ctx2.drawImage(Main.canv3, 0.5, 0.5,  Main.w2, Main.h2);
            window.requestAnimFrame(function() {Main.Paint(); });
        }
        
    }

    Main.Init();