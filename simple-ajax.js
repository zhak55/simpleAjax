/*!
 * Simple Ajax Plugin v1.0
 * https://github.com/zhak55/simpleAjax
 *
 * Copyright 2013 Roman Zhak
 * Released under the MIT license
 */
 
function _createRequest() {
  if(window.XMLHttpRequest === undefined) {
    window.XMLHttpRequest = function() {
       try { return new ActiveXObject("Msxml2.XMLHTTP.6.0");
	} catch( $_ ) {
	  try {
    return new ActiveXObject("Msxml2.XMLHTTP.3.0"); 
	} catch ( $__ ) { }
       }
      }
     }else {
        try { 
	  return new window.XMLHttpRequest(); 
	 } catch( $___ ) {} 
       }
     }; 
function encodeData(data) {
  if(!data) return '';
  var mass = [];
   for(var name in data) {
                if(!data.hasOwnProperty(name)) continue;
                if(typeof data[name] === 'function') continue;
    var value = data[name].toString();
    name = encodeURIComponent(name.replace("%20", "+"));
    value = encodeURIComponent(value.replace("%20", "+"));
     mass.push(name + "=" + value);
   }
return mass.join('&'); 
  };	 
var ajax = {
  get   :   function(url, callback) {
    var $ = _createRequest(); 
      $.open("GET", url);
      $.onreadystatechange = function() {
        if ($.readyState === 4 && $.status === 200) {
          callback($.responseText);
         }; 
       }
    $.send(null);
  },
  post  :  function(url, data, callback) {
	  
	  
  }
}


