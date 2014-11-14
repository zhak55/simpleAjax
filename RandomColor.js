var randColor = (function(){

  // private methods 

  function randomize( $value ) {
    return Math.floor( Math.random() * $value );
  };

  // private props 

  var rgb = new Array(3);

  // public methods  

  return function() {
  	for( var i = 0; i < rgb.length; i++ ) {
  	  rgb[i] = randomize(255).toString(16);
  	  if( rgb[i].length < 2 ) rgb[i] = "0" + rgb[i];	
  	};
  	return "#" + rgb.join("");
  }

}());

var color = randColor(); // to get random colour
