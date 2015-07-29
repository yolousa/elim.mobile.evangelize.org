angular.module('starter.controllers', ['ngCordova', 'starter.services'])

.controller('DashCtrl', function ($scope, Database) {
    $scope.isInitialized = Database.isInitialized;
    
    Database.query("select * from Believers", []).then(function () {
        return true;
    });
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, Database) {
    $scope.chat = Chats.get($stateParams.chatId);


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
