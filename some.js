(function( window, undefined ) {
	
   var 
        startUrl = null
          , document = window.document 
          , audioElement = document.createElement('audio') 
          , arraySupported = new Array()
          , playlist = {},
		  
		
        // supporting by your browser
        audioSupported = !!audioElement.canPlayType || undefined ,
		
        // url must contain the following extentions 
        urlExtensions = /[\.](mp3|ogg|wav|aac)$/,
		
        // MIME types, audio/mpeg = mp3
        formats  =  [  'audio/mpeg; codecs="mp3"' , 'audio/ogg; codecs="vorbis"' , 'audio/wav; codecs="1"' , 'audio/mp4; codecs="mp4a.40.2' ],
		
       // define formats that browser supports
       isSupported  =  (function() {
       try { 
         for( var i = 0; i < formats.length; i++) {
          if(audioElement.canPlayType(formats[i]) == "") continue;
            arraySupported.push(formats[i]); }
         } catch(e) {}
           return arraySupported; })(),

       // try to define the current browser
       browser  =  function() {
         var ua = navigator.userAgent.toLowerCase();
         var webkit  =  /(webkit)[ \/]([\w.]+)/
             , opera = /(opera)(?:.*version)?[ \/]([\w.]+)/
             , msie  = /(msie) ([\w.]+)/
             , mozilla = /(mozilla)(?:.*? rv:([\w.]+))?/
             , mobiles = /(ipad|iphone|ipod|android|blackberry|windows ce)/;
		   
        var matches = webkit.exec( ua ) || opera.exec( ua ) ||
                         msie.exec ( ua ) || mozilla.exec ( ua ) || mobiles.exec ( ua )
        || [];
               return { browser : matches[1] || "none", version : matches[2] || "0" };
        },
		
       // convert time into normal style
       convertedTime  =  function( time ) {  
        var seconds = 0, minutes = 0;
             seconds = Math.floor( time );   minutes = Math.floor( sec / 60 );
             minutes = minutes >= 10 ? minutes : '0' + minutes;    
        seconds = Math.floor( seconds % 60 );
        seconds = seconds >= 10 ? seconds : '0' + seconds;    
            return minutes + ':' + seconds; };
			
 var _smartPlayer = 
			
  { loadAudio  :  function( url ) {
     if( !urlExtensions.test( url )) newError('url');
      thisObject = smartPlayer;
       if(audioSupported && arraySupported.length >= 1)  {
         if(startUrl == null) {
           thisObject.defVolume = 0.7;
           thisObject.audioElement = new Audio( url );
           thisObject.audioElement.load();
           thisObject.audioElement.pause();
           startUrl = url;
       }else {
            thisObject.audioElement.src = url;
            thisObject.audioElement.load();
            thisObject.audioElement.pause();
		 };
       }else {
         if(!audioSupported) newError('not');
         if(arraySupported.length < 1) newError('codec');
	   };
	 },
   playAudio  :  function() {
	   this.audioElement.play(); 
  }	   
}

     // this function shows errors
     var newError = function( type ) {  
       switch ( type ) {
        case 'url' : 
           alert( 'Your url does not contain audio format extention.' );
           break;
        case 'not':
           alert( 'Your browser does not support HTML 5 Audio.' );
           break;
        case 'codec':
           alert( 'Unsupported codec.' );
           break;
       }
     }
		  
 window.smartPlayer = _smartPlayer;

})( window );
