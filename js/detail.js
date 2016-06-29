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


  

  // // 评论表单控制器
  // app.controller('ReviewController', function(){
    
  //   this.review = {};
  
  //   // 添加评论方法，像当前数据中push 评论对象
  //   this.addReview = function(movie){
  //     movie.reviews.push(this.review);
  //     this.review = {}; //重置表单数据和预览数据为空
  //    }

  // });
   


})();