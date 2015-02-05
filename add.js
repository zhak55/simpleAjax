// CSS :
// .cards {
//   opacity: 0;
//   float: left;
//   width: 100px;
//   height: 100px;
//   margin: 3px;
//   background-color: green;
// }


+function() {
  var $doc = document
      , i = 5
      , element
      , DELAY_M = 100
      , utils = function( $el ) {
         return {
           animate : function() {
             var  j = 0
               ,  intalId = setInterval(function() {
                    $el.style.opacity = (j += 0.1);
                     if( j.toFixed(1) >= 1 ) clearInterval( intalId );
             }, DELAY_M / 4 )
         },
        append : function() {
           $doc.body.appendChild( $el ) 
           return this;
        }
      }
    };

 while ( i-- ) {
  element = $doc.createElement("div");
  element.className = "cards"; 
   (function( $el ){
     setTimeout(function(){
        // add & animate 
        utils( $el )
         .append()
         .animate();
       }, i * DELAY_M );
     }( element ))
  };
}.call()
