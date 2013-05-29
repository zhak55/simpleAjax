/*!
 * Simple Ajax Plugin v1.0
 * https://github.com/zhak55/simpleAjax
 *
 * Copyright 2013 Roman Zhak
 * Released under the MIT license
 */
 
var ajax = {
  _createRequest  :  function() {
	 try { 
	   return new window.XMLHttpRequest(); 
	   } catch( e ) {} },
  get   :   function(url, callback) {
    var $_ = this._createRequest();
      $_.open("GET", url);
      $_.onreadystatechange = function() {
		 if ($_.readyState == 4 && $_.status == 200) {
           callback($_.responseText);
		 }
       }
	$_.send(null);
  },
  post  :  function(url, data, callback) {
	  
	  
  }
}


