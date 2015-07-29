angular.module('starter.controllers')
.controller('SettingsCtrl', function ($scope, $ionicPopup, $timeout, Settings) {
    $scope.settings = Settings.settings;

    $scope.showConfirmEraseAll = function () {
        $ionicPopup.confirm({
            title: 'Are you SURE!!!',
            template: 'This will ERASE EVERYTHING from your device. Are you sure you want to do that?'
        }).then(function (res) {
            if (res) {
                Settings.resetDatabase();
            } else {
                return;
            }
        });
    };

});