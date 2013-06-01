// Simple example in PHP for 
// ajax.post('test.php', { name: 'Roman', age: 19 }, function(r) {
// if(r) {
//    alert(r); }
// }):
<?php

 $name = $_REQUEST['name'];
 $age = $_REQUEST['age'];
 
   	 if(!file_exists("data.txt")) {
		 	$file = fopen("data.txt", "a+");
	          fwrite($file, $name . ' ' . $age);
	  	      fclose($file);
		 }
 ?>
