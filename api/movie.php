<?php
 header("Content-Type: text/html; charset=UTF-8");
  $str = $_GET['callback'];
 $url = 'http://api.douban.com/v2/movie/in_theaters';
 $content = file_get_contents($url);
 
 echo('angular.callbacks._0('. $content .')');

?>