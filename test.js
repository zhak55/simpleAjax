 // can be deleted by using "delete" operator

  window['palette'] = (function(){

     // private props and methods

     var 
       delim       = {comma: ',', white: ' ', pointc: ",."}
       // characters for converter to HEX
     , characters  = '0123456789ABCDEF'
       // all colours which are defined in the library 
     , names   = 'red orange yellow green blue purple pink black white gray brown cardinal carmine carnelian auburn folly fuchsia'.split(delim.white)
       // Here is additive color model in which red, green, and blue light are added together in various ways
     , colours = '255,79,79 250,145,63 231,213,82 78,177,78 78,153,177'.split(delim.white)
     , obj = {}
     , i = 0
     , _is;

      // create object contaning all colours for public using 
     for( ; 
      i < colours.length; 
      i++ ) obj[names[i]] = colours[i];



    function rgbToHex(RGB) {
       return toHex(RGB[0]) + toHex(RGB[1]) + toHex(RGB[2]) 
     }
    function toHex(n) {
       n = parseInt(n, 10);
       if (isNaN(n)) return "00";
          n = Math.max(0, Math.min(n, 255));
      return characters.charAt((n - n % 16) / 16)
                     + characters.charAt(n % 16);
    }

// Merge object2 into object1

function extend(source, target) {
  for (var key in target) if (target.hasOwnProperty(key)) {
    source[key] = target[key]; }; return source;
  };

// show public methods

    return {
    
       get  :  function(name, option){

        // if parametrs is omitted it returns random colours from the list 
        if(!name) return this.rand();

        var options = extend({
          rgba: false, 
          alpha: 99,
          hex: false
            }, option);
        
        // Options:
        // {rgba: Boolean, alpha: Number}
        // or
        // {hex: Boolen}
        // without options it returns just rgb(Number, Number, Number )
        

        return options.hex 
         ? rgbToHex(obj[name].split(delim.comma)) 
         : "rgb" + ((options.rgba || "") && "a") + "(" + obj[name] + ((options.rgba || "") && (delim.pointc + options.alpha)) + ");";     
       },

       rand : function(){
        // returns random colour from the array 
        return this.get(names[ Math.floor(Math.random() * names.length) ]);
       },

       toHex : function() {
         // "255, 255, 255" as String 
         // or
         // this.toHex(255, 255, 255) as arguments
         // or
         // as String: "rgb(255, 255, 255)"
       },

       is : function() {
        // if your browser support RGBA it returns true
        var elem = document.createElement("script")
        // 
          , rgba = 'rgba(0, 0, 0, 0.5)';

        try {

         elem.style.color = rgba;

        } catch(e) { return false; }

        return true;
       }
    };
 

   }());
