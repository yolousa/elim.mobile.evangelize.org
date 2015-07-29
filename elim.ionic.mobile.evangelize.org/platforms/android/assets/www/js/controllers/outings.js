angular.module('starter.controllers')
.controller('OutingsCtrl', function ($scope, Outings) {
    $scope.outings = Outings.all();
    $scope.remove = function (outing) {
        Outings.remove(outing);
    }
});