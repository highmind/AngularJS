(function(){

  var app = angular.module('movie', ['ngRoute']);

  // 路由设置
  app.config(['$routeProvider', function($routeProvider,$locationProvider){
    
    $routeProvider.when('/', {
      templateUrl :'views/home.html',
      controller : 'MovieController'
    })
    .when('/detail/:movieId', {
      templateUrl : 'views/detail.html',
      controller : 'DetailController'
    })
    .when('/cinema/', {
      templateUrl : 'views/cinema.html',
      controller : 'CinemaController'
    })
    .otherwise({
      redirectTo: '/'
    })

  }]);

  // 电影controller,使用http 服务获取远程数据 
  app.controller('MovieController', function($scope, $http){

    $scope.movieArr = [];
    
    // 使用jsonp跨越访问远程接口
    $http.jsonp("http://gyy.jastoo.net/api/movie-my.php?callback=JSON_CALLBACK").success(function(response) {

        $scope.movieArr = response.data.movies;
        console.log($scope.movieArr.length);

    });

  });

  // 电影详情controller
  app.controller('DetailController', function($scope, $rootElement, $http,$routeParams, $location){

    $scope.detailData = [];
    $scope.reviewData = [];
    // console.log($routeParams.movieId);
     // 使用jsonp跨越访问远程接口
    $http.jsonp("http://gyy.jastoo.net/api/detail-my.php?callback=JSON_CALLBACK&id="+$routeParams.movieId).success(function(data) {
 
        $scope.detailData = data.data.MovieDetailModel;
        $scope.reviewData = data.data.CommentResponseModel.cmts;
        // console.log(data.data);
        // console.log($scope.reviewData[0].nickName);

    });

    $scope.review = {};
  
    // 添加评论方法，像当前数据中push 评论对象
    $scope.addReview = function(movie){
      $scope.reviewData.push(movie);
      // console.log($scope.reviewData);
      $scope.review = {}; //重置表单数据和预览数据为空
     }

   
  });



  // 影院controller 
  app.controller('CinemaController', function($scope, $http){

    $scope.cinemaData = [];

    // 使用jsonp跨越访问远程接口
    $http.jsonp("http://gyy.jastoo.net/api/cinema-my.php?callback=JSON_CALLBACK").success(function(response) {
        // 将影院所在区进行整理
        for(var item in response.data){
          var json = {'item' : item, 'data' : response.data[item] };
          $scope.cinemaData.push(json);
        }

       console.log($scope.cinemaData )

    });

  });



})();