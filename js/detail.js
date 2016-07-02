(function(){


  var app = angular.module('detail', []);


  // 电影controller,使用http 服务获取远程数据
  // $location依赖$rootElement 
  app.controller('DetailController', function($scope, $rootElement, $http, $location){

    $scope.detailData = [];
    $scope.reviewData = [];
    console.log($location.search().id);
     // 使用jsonp跨越访问远程接口
    $http.jsonp("http://gyy.jastoo.net/api/detail-my.php?callback=JSON_CALLBACK&id="+$location.search().id).success(function(data) {
 
        $scope.detailData = data.data.MovieDetailModel;
        $scope.reviewData = data.data.CommentResponseModel.cmts;
        console.log(data.data);
        console.log($scope.reviewData[0].nickName);

    });

    $scope.review = {};
  
    // 添加评论方法，像当前数据中push 评论对象
    $scope.addReview = function(movie){
     
      $scope.reviewData.push(movie);
      console.log($scope.reviewData);
      $scope.review = {}; //重置表单数据和预览数据为空
     }

   
  });


})();