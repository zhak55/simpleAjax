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
