
 // class - repeated sprites( e.g.: enemies )
 // id    - unique( e.g.: character  );
 
 // first - init new 2D html game 
 
HTMLGameEngine(function() {
 return {
  scene  : "Mario", // the main scene id
  width  : 700,
  height : 500,
   audio  : function( register ) {
    register({root : "../music"} , 
    [
      { 
          name: "background", 
          src: "bg.mp3"
      } , { 
          name: "jumping", 
          src: "jump.mp3"
      } , { 
          name: "runnig", 
          src : "run.mp3"
       }
     ]);
   },
  image   : function( register ) {
    register({root: "../img", type: "png"}, [
      { name: "Mario", src: "mario" }
     ])
    }
  }
}).startLoad(["image", "audio"]).
     notify(function( progress ){
      console.log("Loaded: " + progress * 100)
    })
    .fail(function(object){
      // object that failed to preload
    })
    .done( init_2DGame );
    
    
    function init_2DGame() {
     
     
    };
    
