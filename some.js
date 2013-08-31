(function( window, undefined ) {
	
   var 
        startUrl = null,
          document = window.document, 
          audioElement = document.createElement('audio'), 
          arraySupported = new Array(),
          playlist = {},
		  
        // supporting by your browser
        audioSupported = !!audioElement.canPlayType,
		
        // url must contain the following extentions 
        urlExtensions = /[\.](mp3|ogg|wav|aac)$/,
		
        // MIME types, audio/mpeg = mp3
        formats  =  [  'audio/mpeg; codecs="mp3"' , 'audio/ogg; codecs="vorbis"' , 'audio/wav; codecs="1"' , 'audio/mp4; codecs="mp4a.40.2' ],
		
       // define formats that browser supports
       isSupported = (function() {
         for( var i = 0; i < formats.length; i++) {
          if(audioElement.canPlayType(formats[i]) == "") continue;
            arraySupported.push(formats[i]); }
           return arraySupported; })()
	




})( window );
