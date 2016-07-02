<?php
 header("Content-Type: text/html; charset=UTF-8");
  $str = $_GET['callback'];
  $id = $_GET['id'];

 $url = 'http://m.maoyan.com/movie/'.$id.'.json';
 $content = file_get_contents($url);
 
 echo('angular.callbacks._0('. $content .')');

?>