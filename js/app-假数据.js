(function(){

   var movieArr = [
       {
                title  : '惊天魔盗团2 ',
                price : '32.5',
                poster : 'http://img31.mtime.cn/mg/2016/06/15/104536.47060353_270X405X4.jpg',
                doctor : '朱浩伟',
                country : '美国',
                language : '英语',
                pubtime : '1304375948024',
                btn : true,
                reviews: [
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
                ],
                summary  : '故事发生在首部曲中四骑士用神奇魔术玩弄了FBI并且成为大众心目中英雄的一年之后。四骑士中的三个人J·丹尼尔·阿特拉斯（杰西·艾森伯格）、梅利特·麦克金尼(伍迪·哈里森)以及杰克·瓦尔德(戴夫·弗兰科）继续隐姓埋名，等待天眼(一个至高无上的魔术师秘密团体)的下一步指示。而他们在FBI中的线人迪伦·罗德（马克·鲁法洛饰）给骑士们下达了一项新任务，那就是让商界明星欧文·凯斯(本·拉姆)的真面目公之于众。凯斯的公司通过手机软件窃取公众影视获取暴利。这时，女魔术师鲁拉·梅找到了骑士团，要求加入，于是取代了已经退出的前成员Henley Reeves。'
       },
       {
                title  : '独立日2卷土重来',
                price : '22.5',
                poster : 'http://img31.mtime.cn/mt/2016/06/27/151000.90483930_270X360X4.jpg',
                doctor : '罗兰·艾默里奇',
                country : '美国',
                language : '英语',
                 pubtime : '2016.6.15',
                btn : false,
                reviews: [
                    {
                      star:'5.0',
                      body:'20年前是一个外星飞船遮住一个城区，现在是一个外星飞船遮住一面地球 20年前是一个中队的F18（我现在还不明白内陆为啥用F18而不是F15?)PK数不清的外星飞船，现在是一个中队的未来飞船(飞机看上去很多，人还是那么几个)PK数不清的外星飞船 反正开局就告诉你，输定了 20年前他们跑去51区找外星人的黑科技。现在他们跑去黑非洲找外星人的黑科技（结果找了个黑军阀，不知道咋的......',
                      author:'test@163.com'
                    },
                    {
                      star:'7.2',
                      body:'第一批看完，迫不及待想要喷，对！冷静冷静！ 首先这是我很喜欢的题材，okay，其次96年的作品给我很好的印象ps：现在才发现那种好印象大多来自史密斯。 寄予的期望值很大，自然期望越大可能失望就会越多。但是我真的要求不是太多，能给我看的很开心的感觉就行了，可是我看到的是什么呢…… 前20分钟无下限无羞耻的加载广告，还有baby居然...那么多镜头那么多台词！不是不喜欢.',
                      author:'show@163.com'
                    }
                ],
                summary  : '在经历过外星人大举入侵地球后，人类知道，这些入侵者有一天一定会再回來。人类运用先前外星人所遗留下來的科技文明，发展出一套強大的地球防御系统，然而，20年后，这些外星人却带着人类前所未见、更先进強大的武力再次入侵地球，带来更大的全球灾难，几位勇敢的年轻人，他们挺身而出，将再一次为人类生存而战斗。'
       }
   ]

  var app = angular.module('movie', []);

  // 电影controller,使用http 服务获取远程数据 
  app.controller('MovieController', function($scope, $http){

    $scope.movieArr = [];

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