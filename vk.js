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

;
(function(global, $) {

    var makeRequest = function(method, params) {
        if (!VK.api) throw new Error("VK API is unavailable now");
        var deferred = Q.defer();
        VK.api(method, params || {}, callback);

        function callback(data) {
            if (data.response) deferred.resolve(data.response);
            else deferred.reject(new Error(data.error));
        };
        return deferred.promise;
    };

    // backbone model 

    var $vkDocuments = Backbone.Model.extend({
        defaults: function() {
            return {
                did: '',
                title: 'empty',
                size: '',
                ext: 'none',
                url: ''
            }
        }
    });

    // backbone collection 

    var $docs = new(Backbone.Collection.extend({
        model: $vkDocuments,
        initialize: function() {
            makeRequest('docs.get').then(function(res) {
                $docs.add(res.shift() && res);
            })
        }
    }));

    // backbone doc view 

    var $docsView = Backbone.View.extend({
        tagName: "li",
        className: 'item-doc',
        initialize: function() {
            this.model.bind('destroy', this.remove, this);
        },
        events: {
            "dblclick": "clear"
        },
        template: _.template($('#item-template').html()),
        render: function() {
            this.$el.addClass(this.model.get('ext'))
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        clear: function() {
            var self = this;
            if (confirm('Are you sure you want to delete: ' + this.model.get('title'))) makeRequest("docs.delete", {
                owner_id: this.model.get('owner_id'),
                doc_id: this.model.get('did')
            }).then(function(data) {
                self.model.destroy();
            }, function(err) {
                alert(err)
            })
        }
    });

    // backbone global view 

    var $AppView = Backbone.View.extend({

        el: $("#vkApp"),
        initialize: function() {

            $docs.bind('add', this.fill, this);
            this.to = this.$el.children(".docs");

        },

        fill: function(doc) {
            var view = new $docsView({
                model: doc
            })
            this.to.append(view.render().el);
        }
    });

    new $AppView;



}(window, jQuery));
