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
    .otherwise({
      redirectTo: '/'
    })

  }]);
  // 电影controller,使用http 服务获取远程数据 
  app.controller('MovieController', function($scope, $http){

    $scope.movieArr = [];

    // 使用jsonp跨越访问远程接口
    $http.jsonp("http://gyy.jastoo.net/api/movie.php?callback=JSON_CALLBACK").success(function(response) {
 
        $scope.movieArr = response.subjects;
        console.log($scope.movieArr.length);

    });

  });



  // 电影controller,使用http 服务获取远程数据
  // $location依赖$rootElement 
app.controller('DetailController', function($scope, $rootElement, $http,$routeParams, $location){

    $scope.detailData = [];
   
     // 使用jsonp跨越访问远程接口
    $http.jsonp("http://gyy.jastoo.net/api/detail.php?callback=JSON_CALLBACK&id="+$routeParams.movieId).success(function(data) {
 
        $scope.detailData = data;
        console.log($scope.detailData);

    });
   
});


})();