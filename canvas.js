 var gD = {
      data: [100, 0, 21, 1, 24, 32, 12, 43, 12, 97, 52, 12, 12, 4, 121, 43, 33, 300, 4, 2 , 2, 47, 8],
      day:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ],
      month: 'July',
      maxMin: function() {
        var valMax = 1, valMin = 1;
          for(var i = 0; i < this.data.length; i++) {
            if (this.data[i] > valMax) 
                     valMax = this.data[i]
            if (this.data[i] < valMin) 
                     valMin = this.data[i] }
            return [valMax, valMin];
  	  },
          makeSort: function() {
           var dataUp = this.data, f;
            for(var i = 0; i < dataUp.length; i++) {
              for(var j = 0; j < dataUp.length - 1; j++) {
                if(dataUp[j]  > dataUp[j + 1]) {
                    f = dataUp[j];
                    dataUp[j] = dataUp[j + 1]
                    dataUp[j + 1] = f
                   }
                  }
                 }
                 return dataUp;				 
		  },
        extend: function(target, source) {
			  if (source == null)
                   return target;
            for(var key in source) 
                 target[key] = source[key];
    		   return target;
                }		  
              }		 
 //var ua = navigator.userAgent.toLowerCase();
 //const displacement = 100;
 var g = gD.maxMin()[0] / 6;
 var addExtra = Math.abs(45 / g ).toFixed(5);
 window.addEventListener("load", eventWindowLoaded, false);
 
 function eventWindowLoaded() {
 	canvasGo();
 }
 function isCanvas() {
   	  return !!document.createElement('canvas').getContext;
 }
 function canvasGo() {
  	      if (!isCanvas()) {
  	 		    return;
  	 }
 var theCanvas = document.getElementById('gocanvas')
     , context = theCanvas.getContext('2d');
 
 function screenMaker() { 
	   context.fillStyle = "#000000";
	   context.fillRect(0, 0, 800, 350);
	   
	   context.strokeStyle = 'rgba(255, 0, 0, 0.5)';
	   context.strokeRect(1, 1, 798, 398);
	   context.fillStyle = '#CCC';
	   context.font = "29px Arial";
	   context.fillText(gD.month + ': income', 365, 57);
	   

		context.beginPath();
		context.lineWidth = 3;
		context.moveTo(130, 320 - gD.data[0] * addExtra);
		context.lineJoin = 'round';
		
		var b = 0; 
          for(var i = 0; i < gD.data.length; i++) {
			b += 29;
			context.lineTo( b + 100, -gD.data[i] * addExtra + 320);   
		}
		context.stroke();
		b = 0;

	context.beginPath();
	context.strokeStyle  = '#23a3d3';
	context.fillStyle = '#23a3d3'; 	
	 context.font = "11px Arial";
		 for(var i = 0; i < gD.data.length; i++) {
			b += 29;	
			context.lineWidth = 1;
			context.moveTo(b + 100, -gD.data[i] * addExtra + 320);
			context.lineTo(b + 100, 330);
			
			context.fillText( gD.day[i] , i < 9 ? b - 3 + 100 : b - 6 + 100 , 343);	   
		}
	context.stroke();
		 
		 b = 0;
		    for(var i = 0; i < gD.data.length; i++) {
			 	b += 29;
                context.beginPath();
                context.moveTo(b + 100, 210);
                context.fillStyle = 'rgba(255, 0, 0, 0.5)'; 
                context.arc(b + 100, -gD.data[i] * addExtra + 320, 5, 0, 2 * Math.PI, true);
                context.fill();
                   context.beginPath();
                   context.moveTo(b + 100, 210);
                   context.fillStyle = '#000000'; 
                   context.arc(b + 100, -gD.data[i] * addExtra + 320, 3, 0, 2 * Math.PI, true);
                   context.fill();

			}
			// flip data vertically 
			
	 context.beginPath();
	    context.fillStyle = '#23a3d3';
		context.strokeStyle  = '#ccc';
		 
	   var c = 0, v = 0;
	    for(var i = 0; i < 7; i++) {
			c += 47;
			v += g;
			context.moveTo( 70, 40);
	        context.fillText( (gD.maxMin()[0] - v + g).toFixed(0), 25, 5 + c ) 
	   }
	  
	   context.stroke();
	   
	   context.beginPath();
	   context.lineWidth = 1;
	   context.strokeStyle  = '#ccc';
	   context.globalAlpha = 0.2;
	   c = 0;
	   		for( i = 0; i < 7; i++) {
				c += 47;
	   			context.moveTo( 50, c);
	   			context.lineTo (800, c);
	   }
	    context.stroke();
			
			
	}

		screenMaker(); } 
