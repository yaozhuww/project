app.controller('myApp',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
    $scope.name='ww'
    $scope.age = '30'
    $rootScope.title = '这是一个angularjs程序'
    $scope.getName = function(){
        $state.go('con.article')
    }
}])