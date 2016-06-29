(function(){

   var movieArr = [
       {
                title  : '美国队长1',
                price : '32.5',
                poster : 'http://weiyinyue.music.sina.com.cn/movie_poster/181367_vertical.jpg',
                doctor : '安东尼·罗素 / 乔·罗素',
                country : '美国',
                language : '英语',
                pubtime : '1304375948024',
                btn : true,
                reviews: [
                    { 
                      star:'5.0',
                      body:'美国队长真帅！',
                      author:'fade@163.com'
                    },
                    {
                      star:'8.0',
                      body:'巴基太酷了',
                      author:'json@163.com'
                    }
                ],
                summary  : '美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。联盟内部因此分裂为两派：一方由史蒂夫· 罗杰斯领导，他主张维护成员自由，在免受政府干扰的情况下保护世界；另一方则追随托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰），他令人意外地决定支持政府的监管和责任制体系。神秘莫测的巴基（塞巴斯蒂安·斯坦 Sebastian Stan 饰）似乎成为内战的关键人物……'
       },
       {
                title  : '独立日2卷土重来',
                price : '22.5',
                poster : 'http://ww2.sinaimg.cn/large/006ggtO9jw1f55d6bwydaj308c0ciaal.jpg',
                doctor : '安东尼·罗素 / 乔·罗素',
                country : '美国',
                language : '英语',
                 pubtime : '2016.6.15',
                btn : false,
                reviews: [
                    {
                      star:'5.0',
                      body:'外星人TM傻',
                      author:'test@163.com'
                    },
                    {
                      star:'7.2',
                      body:'整个大西洋！',
                      author:'show@163.com'
                    }
                ],
                summary  : '美国队长史蒂夫·罗杰斯（克里斯·埃文斯 Chris Evans 饰）带领着全新组建的复仇者联盟，继续维护世界和平。然而，一次执行任务时联盟成员不小心造成大量平民伤亡，从而激发政治压力，政府决定通过一套监管系统来管理和领导复仇者联盟。联盟内部因此分裂为两派：一方由史蒂夫· 罗杰斯领导，他主张维护成员自由，在免受政府干扰的情况下保护世界；另一方则追随托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰），他令人意外地决定支持政府的监管和责任制体系。神秘莫测的巴基（塞巴斯蒂安·斯坦 Sebastian Stan 饰）似乎成为内战的关键人物……'
       }
   ]

  var app = angular.module('movie', []);

  // 电影controller
  app.controller('MovieController', function($scope){
    $scope.movieArr = movieArr;
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