angular.module('starter.controllers')
.controller('OutingDetailCtrl', function ($scope, $stateParams, Outings) {
    $scope.outing = Outings.get($stateParams.outingId);
});