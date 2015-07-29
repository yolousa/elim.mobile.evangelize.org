angular.module('starter.controllers')
.controller('BelieverDetailCtrl', function ($scope, $state, $stateParams, Believers, States, Countries) {
    $scope.countries = Countries.all();

    var onGeolocationSet = function () {
        alert('Evangelized at ');
    };

    var onGeolocationSuccess = function (position) {
        $scope.believer.location = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            accuracy: position.coords.accuracy,
            fullAddress: ''
        };

        console.log('Evangelized on : ' +
          $scope.believer.location.longitude + ', ' +
          $scope.believer.location.latitude);
    };

    $scope.setLocation = function () {
        navigator.geolocation.getCurrentPosition(onGeolocationSuccess, function () {
            console.log('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
        });
    };

    if ($stateParams.believerId != '') {
        $scope.believer = Believers.get($stateParams.believerId);
    }
    else {
        $scope.believer = Believers.createEmptyBeliever();
        $scope.setLocation();
    };

    $scope.undo = function () {
        console.log('undo pressed...');
    };

    /* Reacts to a click event and commits changes to a database */
    $scope.update = function () {
        var believer = $scope.believer;

        Believers.commit(believer);
        $state.go('tab.believers');
    };

    var country = $scope.believer == null || $scope.believer === undefined || $scope.believer.country == null || $scope.believer.country === undefined ? 'US' : $scope.believer.country;
    $scope.states = States.all(country);
});