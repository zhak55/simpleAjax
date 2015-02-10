
 // class - repeated sprites( e.g.: enemies )
 // id    - unique( e.g.: character  );
 
 // first - init new 2D html game 
 
window["$main"] = new HTMLGameEngine(function() {
  return {
     name   : "SuperMario"
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
         ])
      },
          image   : function( register ) {
            register({root: "../img", type: "png"}, [
              { name: "Mario", src: "mario" }
            ])
          }
        }
      }).startLoad(["image", "audio"]);

// get DOM utils
var dom = $main.acquire("DOM");
    // save this node
    dom("#preload", {cache: true})
$main
    .on("progress", function( progress ){
       dom().get("#preload").text("Loaded: " + progress * 100);
    })
    .on("fail", function( objects ) {
      // object that failed to preload
    })
    .on("success", init_2DGame )
    
    
    function init_2DGame() {
     
     
    };
    
