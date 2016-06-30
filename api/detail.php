<?php
 header("Content-Type: text/html; charset=UTF-8");
  $str = $_GET['callback'];
  $id = $_GET['id'];
 $url = $url = 'https://api.douban.com/v2/movie/subject/'.$id;
 $content = file_get_contents($url);
 
 echo('angular.callbacks._0('. $content .')');

?>