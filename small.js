     ;(function(global){

       var Utils = {};
           Utils.extend =  function ( defaults, options ) {
             defaults = defaults || {};
             for(var key in options ) if(options.hasOwnProperty(key)) {
               defaults[key] = options[key];
             }
             return defaults;
           };
           Utils.each = function(object, callback, context) {
             var keys   = Object.keys( object )
               , length = keys["length"]
               , index  = length - 1
               , temp;
    
             while( length-- ) callback
              .call( context || this, index - length, object[(temp = keys[length])], temp );
           }

           Utils.el = function(name) {
             this.$d  = document;
             this.$el = typeof name == 'string' ? this.$d.createElement(name) : name;
           }

           Utils.extend(Utils.el.prototype, {
             style : function(styles) {
                Utils.extend(this.$el.style, styles);
                return this;
             },
             get   : function() { return this.$el },
             props : function(props) {
                Utils.extend(this.$el, props);
                return this;
             },
             append : function(el) {
              if(el instanceof Utils.el) el = el.get();
              this.$el.appendChild(el);
              return this;
             },
             on    : function(type, handler) {
               this.$el.addEventListener(type, handler);
               return this;
             },
             attr  : function(name) {
               return this.$el.getAttribute(name);
             }
           });

           Utils.byId = function(id) {
             return document.getElementById(id);
           }
      
       function smallGallery() {

         this.$width  = false;
         this.$height = false;
         this.$target = false;
         this.$photos = false;
         this.$name   = '';

       } 

       Utils.each(['width', 'height', 'target', 'photos', 'name'], 
        function(index, name){
         smallGallery.prototype[name] = function() {
           var value = arguments[0];
           if(name == 'width' || name == 'height' || name == 'target' || name == 'name') {this['$' + name] = value;}
           else {
             if(!this.$photos) this.$photos = [];
             if(Array.isArray(value)) return this.$photos.push.apply(this.$photos, value) && this;
             if(arguments.length > 1) this.$photos.push.apply(this.$photos, Array.prototype.slice.call(arguments));
             else this.$photos.push(value);
           }
          return this;
         }
       });

       smallGallery.prototype.appendTo = function(target) {
         this.$target = target || this.$target;
         if(!this.$target) throw new Error('You need to specify the DOM element.')
         if(this.$target == 'body') {document.body.appendChild(this.dom());}
         else {
           var $el = new Utils.el(Utils.byId(this.$target));
               $el.append(this.dom());
         }
         return this;
       }

       smallGallery.prototype.dom = function() {
         var $el = this.$el = new Utils.el('div');
             $el.style({
               width : this.$width  + 'px', 
               height: this.$height + 'px',
               backgroundImage : 'url(' + this.$photos[0] + ')'
             })
                .props({
                  className: 'bars'
                });

         var count  = this.$photos.length;
         var barsW  = this.$width / count;

         var j      = 0;
          for( ; j < count; j++) {
            var bar = new Utils.el('div');
                bar.style({
                   width   : barsW + 'px', 
                   height  : this.$height + 'px',
                   display : 'inline-block',
                   position: 'relative'
                 })
                  .props({id: this.$photos[j] })
                  .on('mouseover', function($ev) {
                    var target = new Utils.el($ev.target);
                        $el.style({
                          backgroundImage : 'url(' + target.attr('id') + ')'
                        })
                     })
                    .append((new Utils.el('div')).props({className: 'bars-item'}).style({width: barsW / 1.5 + 'px'}))

                $el.append(bar);
          }
         return $el.get();
       }

       global.SG = smallGallery;

     }(window));
