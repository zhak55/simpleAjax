function encodeUrl ( urlFlow ) { 
 if ( !urlFlow || 
   Object.prototype.toString.call(urlFlow) !== '[object Object]' ) 
   throw new Error('Wrong type or absense of parametrs'); 
 	 
  var array = [];
 
 for ( var name in urlFlow )  {
   if(!urlFlow.hasOwnProperty(name) ||
        typeof urlFlow[name] === 'function' ) continue;
   array.push( encodeURIComponent ( name ) + "=" + encodeURIComponent(
            urlFlow[name].toString()));  
   };
    return array.join("&").replace(/%20/g, "+");	     
};


console.log(encodeUrl({name:'John', age: 13, from: 'New York', eq: '1=2'}));
