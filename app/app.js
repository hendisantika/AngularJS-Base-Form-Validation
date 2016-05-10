var app = angular.module('szalekApp', []);
 
app.controller('FormController', function ($scope) {
 
    $scope.user = {};
 
    $scope.update = function () {
        if ($scope.myform.$valid) {
            console.log("Saved: ");
            console.log($scope.user);
        } else {
            console.log("Problem with: ");
            console.log($scope.user);
        }
    };
});