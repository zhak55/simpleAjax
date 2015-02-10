
 // class - repeated sprites( e.g.: enemies )
 // id    - unique( e.g.: character  );
 
 // first - init new 2D html game 
 
HTMLGameEngine(function() {
 return {
  scene  : "Mario", // the main scene id
  width  : 700,
  height : 500,
  audio  : function( register ) {
    register({src : "../music"} , 
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
   
  }
 }
});
