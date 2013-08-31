(function( window, undefined ) {
	
   var 
        startUrl = null,
          document = window.document, 
          audioElement = document.createElement('audio'), 
          arraySupported = new Array(),
		  
		
        // supporting by your browser
        audioSupported = !!audioElement.canPlayType,
		
        // url must contain the following extentions 
        urlExtensions = /[\.](mp3|ogg|wav|aac)$/,
		
        // MIME types, audio/mpeg = mp3
        MIME = [ 'audio/mpeg' , 'audio/ogg' , 'audio/wav' ],
		
       // define formats that browser supports
       isSupported = function() {
         for( var i = 0; i < MIME.length; i++) {
          if(audioElement.canPlayType(MIME[i]) == "") continue;
            arraySupported.push(MIME[i]); }
           return arraySupported; }
		
		
		
		
	
	
	
	
	
	
	
})( window );
