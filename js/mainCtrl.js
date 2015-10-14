var app = angular.module('quoteBook')

app.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {
    $scope.quoStuff = dataService.getData();
}])