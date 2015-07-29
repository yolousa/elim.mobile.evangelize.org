angular.module('starter.services')
.factory('Settings', function ($http, Database, Crypto) {
    var self = this;

    var defaultSettings = {
        phoneNr: '9545555555',
        synchUrl: 'http://localhost:1234/',
        installId: '8E73A5E4-733B-4724-AD97-085483C58DB2',
        firstName: 'Yoel',
        lastName: 'Martinez',
        email: 'yolousa@hotmail.com',
        ministry: 1
    };

    var GET_SETTINGS_SQL = 'SELECT phoneNr, synchUrl, installId, firstName, lastName, email, ministry  FROM Settings';
    var UPDATE_SETTINGS_TO_DEFAULT_SQL = "UPDATE Settings SET synchUrl = '" + defaultSettings.synchUrl + "'";
    var INSERT_SETTINGS_SQL = "INSERT INTO Settings(phoneNr, synchUrl, installId, firstName, lastName, email, ministry) VALUES (?, ?, ?, ?, ?, ?, ?)";
    var DELETE_SETTINGS_SQL = "DELETE Settings";
    var SET_DEVICE_INFO_URL = 'setDeviceInfoAction';

    /// returns null when value is set to undefined
    function getNullWhenNotSet(val) {
        return (val === undefined ? null : val);
    };

    self.getSettings = function () {
        return Database.query(GET_SETTINGS_SQL, [])
            .then(function (result) {
                /// Loading or defaulting to settings
                if (result.rows.length > 0) {
                    var row = result.rows.item(0);

                    self.settings = {
                        phoneNr: row.phoneNr,
                        synchUrl: row.synchUrl,
                        installId: row.installId,
                        firstName: row.firstName,
                        lastName: row.lastName,
                        email: row.email,
                        ministry: row.ministry
                    };
                    return self.settings;
                }
                else {
                    /// If nothing has been set resort to default
                    self.settings = defaultSettings;
                    return self.settings;
                };
            }, function (err) {
                self.settings = defaultSettings;
                return self.settings;
            });
    };
    
    function getDeviceInfo() {
        // For app execution and debugging
        if (window.cordova) {
            return {
                name: device.name,
                cordova: device.cordova,
                platform: device.platform,
                uuid: device.uuid,
                model: device.model,
                version: device.version,
                oldHash: null,
                newHash: null
            };
        }

        // For browser debugging
        return {
            name: 'Browser',
            cordova: 'Ionic Serve',
            platform: '1.0',
            uuid: '8E73A5E4-733B-4724-A697-085483C58DB2',
            model: '1.0',
            version: '1.0',
            oldHash: null,
            newHash: null
        };
    };

    /// Pushes new device info to server this is used when initializing a new device to get existing data
    self.setDeviceRegistrationInfo = function (phoneNr, pwd, newPwd) {
        var deviceInfo = getDeviceInfo();
        var result;

        deviceInfo.oldHash = sel.encrypt(phoneNr, pwd);
        deviceInfo.newHash = sel.encrypt(phoneNr, (newPwd == '' || newPwd == null || newPwd === undefined ? pwd : newPwd));

        $http({
            url: self.settings.synchUrl + SET_DEVICE_INFO_URL,
            method: 'GET',
            params: deviceInfo
        }).then(
        function (data) {
            result = {
                isSuccess: true,
                err: null
            };
        },
        function (err) {
            result = {
                isSuccess: false,
                err : err
            }
        });

        return result;
    };

    self.synchronizeDatabase = function () {

    };

    /// Stores settings in local database
    self.setSettings = function () {

    };

    /// Resets the database by dropping user tables like believers, etc.
    self.resetDatabase = function () {
        Database.dropUserTables(true, true);
        Database.initializeDatabase();

        Database.query(INSERT_SETTINGS_SQL, [self.settings.phoneNr, self.settings.synchUrl, self.settings.installId, self.settings.firstName, self.settings.lastName, self.settings.email, self.settings.ministry]);
    };

    self.restoreDefaultSettings = function () {
        Database.query(UPDATE_SETTINGS_TO_DEFAULT_SQL, []);

        self.settings.url = defaultSettings.synchUrl;

        return self.settings;
    };

    return self;
});