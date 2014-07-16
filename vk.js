VK.init(function() { 
  var req = new vk();
      req.users("search", {q: "Pavel Durov", fields: "city"})
       .filter({city: "Санкт-Петербург"}, null, {token: "title"}).res(function(){
        console.log( this.data.found )     
      })
      
  console.log( req )
  }, function() { 


}, vk.latest ); 
