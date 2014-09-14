$(function(){
   var delay = 100;
   var BASE_DOMAIN  = "http://vk.com/";
   // to emulate click
   var aElement = function() {
     var a = document.createElement("a");
         a.setAttribute("target", "_blank");
           document.getElementsByTagName("body")[0].appendChild( a );  
        return a;
    }.call()

   var App = Backbone.Model.extend({
    defaults : function() {
       return {
          "id" : ""           ,
          "title" : ""        ,
          "icon_75": ""       ,
          "description" : ""  ,
          "type" : ""        ,
          "screen_name" : ""
        }
      } ,
    initialize : function() {
      this.get("description") || this.set("description", "Empty");
      this.get("icon_75")     || this.set("icon_75", "none.png");
    }
   });

   var AppCollection = new (Backbone.Collection.extend({
     model: App
   }));

    AppCollection.on("add", function( $item ){
        var view = new AppView({model: $item});
        $( view.render().el ).appendTo("body")
       // .css({display: "none"})
       // .delay( delay += 300 )
       // .show( 1000 );
    });

   var AppView = Backbone.View.extend({
    
     className : "app-row",
     events    : {
       "click" : "goto"
     },
     template  :  _.template($('#item-template').html()),
     render    : function() {
       this.$el.html(this.template(this.model.toJSON()));
       return this; 
     },
     "goto"  : function() { 
       aElement.href = BASE_DOMAIN + this.model.get("screen_name");
       aElement.click()
     }

   });
    
   $.jsonp({ 
     url : "https://api.vk.com/method/apps.getCatalog?user_id=66748&v=5.24&sort=visitors", 
     callbackParameter: "callback"
   })
     .done(function( data ){
      //console.log( s.response.items )
        AppCollection.add( data.response.items )
    });
    
});
