app.controller('article',['$scope','$rootScope','$state','consoleServer',function($scope,$rootScope,$state,consoleServer){
    $scope.go = function(){
        // alert($rootScope.title)
        // $state.go('con')
        consoleServer.console('这是一个服务')
    }
}])