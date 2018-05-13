app.controller('article',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
    $scope.go = function(){
        alert($rootScope.title)
        // $state.go('con')
    }
}])