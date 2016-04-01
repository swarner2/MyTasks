

angular.module('myApp',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'home.html'
    })
}])
.controller('homeController', ['$scope', function($scope){
	$scope.message = "home message";
}])
.controller('testController', ['$scope', function($scope){
	$scope.foo = "lakdfj;lakfjal;dkfj";
}])