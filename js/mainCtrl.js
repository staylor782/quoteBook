var app = angular.module('quoteBook')

app.controller('mainCtrl', function($scope, dataService) {
    $scope.quoStuff = dataService.getData();
    $scope.filterQuote = '';
    $scope.userQuoteTxt = '';
    $scope.userQuoteAuth = '';
})