angular.module('starter.controllers')
.controller('BelieversCtrl', function ($scope, $state, Believers) {
    $scope.believers = Believers.all();

    $scope.add = function (believer) {
        $scope.believer = Believers.emptyBeliever;
        $state.go('tab.believer-detail', -1);
    };

    $scope.remove = function (believer) {
        Believers.remove(believer);
    };
});