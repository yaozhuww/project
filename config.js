app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/con"); 
    $stateProvider
    .state('con',{
        url:'/con',
        templateUrl:'./view/myApp.html',
        controller:'myApp'
    })
    .state('con.main',{
        url:'/main',
        templateUrl:'./view/main.html'
    })
    .state('con.article',{
        url:'/article',
        templateUrl:'./view/article.html',
        controller:'article'
    })
})