(function(){


  var app = angular.module('detail', []);


  // 电影controller,使用http 服务获取远程数据
  // $location依赖$rootElement 
  app.controller('DetailController', function($scope, $rootElement, $http, $location){

    $scope.detailData = [];
    console.log($location.search().id);
     // 使用jsonp跨越访问远程接口
    $http.jsonp("http://gyy.jastoo.net/api/detail.php?callback=JSON_CALLBACK&id="+$location.search().id).success(function(data) {
 
        $scope.detailData = data;
        console.log($scope.detailData);

    });
   
    });


  var reviews = [
          { 
            star:'5.0',
            body:'第二部纯粹把好端端的第一部构造给毁了。单论这一部，故事也未免过于冗长琐碎，警察蜀黍的回忆部分多余，最后摩根叔的深情表白也太过表面，主要是被骗这么多次还能相信说的话不？双胞胎的设定我还以为最后他们互换什么的给人的惊喜也不足，真是从头到尾想太多的一部啊失望摊手',
            author:'fade@163.com'
          },
          {
            star:'8.0',
            body:'不是以为我小公举最后会以世外高人的姿态出现拯救主角hold住全场，我早就退场了！',
            author:'json@163.com'
          }
  ]

  // 评论表单控制器
  app.controller('ReviewController', function(){
    this.reviews = reviews;
    this.review = {};
  
    // 添加评论方法，像当前数据中push 评论对象
    this.addReview = function(movie){
      reviews.push(this.review);
      this.review = {}; //重置表单数据和预览数据为空
     }

  });
   


})();