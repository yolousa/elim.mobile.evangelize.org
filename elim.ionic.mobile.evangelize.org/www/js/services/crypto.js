angular.module('starter.services')
.factory('Crypto', function () {
    var self = this;

    self.encrypt = function (string, pwd) {
        return CryptoJS.RC4Drop.encrypt(string, pwd, { drop: 3072 / 4 });
    };

    self.dencrypt = function (string, pwd) {
        return CryptoJS.RC4Drop.decrypt(string, pwd, { drop: 3072 / 4 });
    };

    self.hash = function (string) {
        return CryptoJS.SHA3(string);
    };

    return self;
});