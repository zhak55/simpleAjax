let sTemplate = (str, obj) => {
 if(!Array.isArray(obj)) obj = [ obj ];
  let parsed = '', index = 0, length = obj.length
   ,  regexp = /\{\{([a-z]+)\}\}/ig;
 // parse all items in array
 for( ; index < length; index++ ) {
  let interim = obj[ index ];
  parsed += str.replace( regexp , (get, p1) => {
    p1 = p1.trim();
    return interim[ p1 ];
  })
 }
 return parsed;
}

 var template = sTemplate('<div class="data">{{name}}</div>', [{name: 'Roman'}, {name: 'Dan'}, {name: 'John'}]); 
 
 $('body').append(template)
