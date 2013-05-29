/*!
 * Simple Ajax Plugin v1.0
 * https://github.com/
 *
 * Copyright 2013 Roman Zhak
 * Released under the MIT license
 */
 
 var ajax = {
  get   :   function(url,callback) {
        var request = new XMLHttpRequest();
        request.open("GET", url);
            request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
               callback(request.responseText);
             }
          }
            request.send(null);
       }
   }
 
