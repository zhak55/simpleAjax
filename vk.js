VK.init(function() { 
  var req = new vk();
      req.users("search", {q: "Pavel Durov", fields: "city"})
       .filter({city: "Санкт-Петербург"}, null, {token: "title"}).res(function(){
       // you get the filtered data 
        console.log( this.data.found )     
      })
      
  }, function() { 

// if something wrong in API

}, vk.latest ); 
