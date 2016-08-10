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
    .when('/cinemaDetail/:cinemaId',{
      templateUrl : 'views/cinema-detail.html',
      controller : 'CinemaDetailController'
    })
    .otherwise({
      redirectTo: '/'
    })

  }]);

  // 电影controller,使用http 服务获取远程数据 
  app.controller('MovieController', function($scope, $http){

    $scope.movieArr = [];
    
    // 使用jsonp跨越访问远程接口
    $http.jsonp("http://101.201.115.46/code-test/api/ajs-movie-my/movie-my.php?callback=JSON_CALLBACK").success(function(response) {

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
    $http.jsonp("http://101.201.115.46/code-test/api/ajs-movie-my/detail-my.php?callback=JSON_CALLBACK&id="+$routeParams.movieId).success(function(data) {
 
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
    $http.jsonp("http://101.201.115.46/code-test/api/ajs-movie-my/cinema-my.php?callback=JSON_CALLBACK").success(function(response) {
        // 将影院所在区进行整理
        for(var item in response.data){
          var json = {'item' : item, 'data' : response.data[item] };
          $scope.cinemaData.push(json);
        }

       console.log($scope.cinemaData )

    });

  });

    // 影院详情controller 
  app.controller('CinemaDetailController', function($scope, $rootElement, $http,$routeParams, $location){

    $scope.cinemaDetailData = [];
    $scope.cinemaDetes = [];



    // 使用jsonp跨越访问远程接口
    $http.jsonp("http://101.201.115.46/code-test/api/ajs-movie-my/cinema-detail.php?callback=JSON_CALLBACK&cinemaid="+$routeParams.cinemaId).success(function(response) {
      $scope.id = response.data.movies[0].id;
      console.log($scope.id);
       // 使用jsonp跨越访问远程接口
      $http.jsonp("http://101.201.115.46/code-test/api/ajs-movie-my/cinema-detail.php?callback=JSON_CALLBACK&cinemaid="+$routeParams.cinemaId+'&movieid='+$scope.id).success(function(response) {
          $scope.cinemaDetailData = response.data;
        

          for(var item in response.data.DateShow){
            var json = {'item' : item, 'data' : response.data.DateShow[item] };
            $scope.cinemaDetes.push(json);
          }

          console.log($scope.cinemaDetes)

          // $scope.cinemaDetes = response.data.Dates;

      });

    });

  });



})();