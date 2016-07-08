<?php
 header("Content-Type: text/html; charset=UTF-8");
  $str = $_GET['callback'];
 $url = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000';
 $content = file_get_contents($url);
 
 echo($str.'('. $content .')');

?>