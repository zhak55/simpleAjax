VK.init(function() { 
  var req = new vk();
      req.users("search", {q: "Pavel Durov", fields: "city"})
       .filter({city: "Санкт-Петербург"}, null, {token: "title"}).res(function( data ){
       // you get the filtered data
        console.log( this.data.found )     
      });
      
// Add handlers 

vk.on({"LocationChanged":  completed, "Scroll" : scroll, "WindowFocus": focus});

// Remove handlers 

vk.off({"LocationChanged":  completed, "Scroll" : scl, "WindowFocus": focus});
 
 
  }, function() { 

// if something wrong in API

}, vk.latest ); 

(function(){
 this["ev"] = {};
 var store  = {};


    ev.on = function( type , fn ) {
      !store[type] && (store[type] = []);
       store[type].push( fn );
    };
 
   ev.trigger = function( type , args ) {
    for( var i = 0; i < store[type].length; i++) {
     if( typeof store[type][i] === 'function' ){
       store[type][i].apply( this , args || [] );
     } else {
       throw new Error("Event is not defined");
         }
       }
    };
}());

ev.on("go", function( a ) {
    console.log( a );
});
ev.on("done", function( a ) {
    console.log( a );
});
ev.trigger("go", ["Cool"]);
ev.trigger("done", ["Nice"]);
