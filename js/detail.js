(function(){


  var app = angular.module('movie', []);

  // 电影controller,使用http 服务获取远程数据 
  app.controller('MovieController', function($scope, $http){

    $scope.movieArr = [];
    // 使用jsonp跨越访问远程接口
    $http.jsonp("http://gyy.jastoo.net/api/movie.php?callback=JSON_CALLBACK").success(function(response) {

      $scope.movieArr = response.subjects;


    });

  });

  // 分类tab控制器
  app.controller('PanelController', function(){

      //tab初始值
      this.tab = 1;

      // tab选择tab，ng-click时调用
      this.selectTab = function(setTab){
       this.tab = setTab;
      }
       
      // 是否选中,ng-class调用
      this.isSelected = function(checkTab){
        return this.tab === checkTab;
      }

  });

  // 评论表单控制器
  app.controller('ReviewController', function(){
    
    this.review = {};
  
    // 添加评论方法，像当前数据中push 评论对象
    this.addReview = function(movie){
      movie.reviews.push(this.review);
      this.review = {}; //重置表单数据和预览数据为空
     }

  });
   


})();