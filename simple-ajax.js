/*!
 * Simple Ajax Plugin v1.0
 * https://github.com/zhak55/simpleAjax
 *
 * Copyright 2013 Roman Zhak
 * Released under the MIT license
 */
 
(function(w) {
 var isOpera = Object.prototype.toString.call(w.opera) == '[object Opera]';
function _createRequest() {
  if(w.XMLHttpRequest === undefined) {
    w.XMLHttpRequest = function() {
       try { return new ActiveXObject("Msxml2.XMLHTTP.6.0");
	} catch( $_ ) {
	  try {
    return new ActiveXObject("Msxml2.XMLHTTP.3.0"); 
	} catch ( $__ ) { }
       }
      }
     }else {
        try { 
	  return new w.XMLHttpRequest(); 
	 } catch( $___ ) {} 
       }
     }; 
function getKey() { // if you need to provide a unique request
  var i;
  var key = '';
  for (i=0; i < 7; i++) {
  	key += Math.floor(Math.random() * 20).toString(16);
     }
    return key;
  }
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
ajax = {
  get   :   function(url, callback) {
    var $ = _createRequest(); 
      $.open("GET", url);
      $.onreadystatechange = function() {
		 if ($.readyState === 4 && $.status === 200) {
			var getType = $.getResponseHeader("Content-Type");
		if(getType.indexOf('xml') !== -1 && $.responseXML) {
           callback($.responseXML);
		}else if(getType === "application/json") {
		   callback(JSON.parse($.responseText));
		}else {
		   callback($.responseText);
		    }
		 }; 
	   }
	 $.send(null);
  },
  post  :  function(url, data, callback) {
	var _ =  _createRequest(); 
	 _.open("POST", url);
      _.onreadystatechange = function() {
		 if (_.readyState === 4 && _.status === 200) {
	        callback(true);
		 }
	  }
		 _.setRequestHeader('Content-Type', 
		              'application/x-www-form-urlencoded');
		 _.send(encodeData(data));
	  
    }
  }
})(window);
