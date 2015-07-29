angular.module('starter.services', [])
.factory('Database', function ($cordovaSQLite, $q, $ionicPlatform) {
    var self = this;
    var db = null;
    self.isInitialized = false;

    function undefinedToNull(parameters) {
        for (var i = 0; i < parameters.length; i++) {
            parameters[i] = (parameters[i] === undefined ? null : parameters[i]);
        };

        return parameters;
    };

    self.dropUserTables = function (dropSettings, dropBeliever) {
        if (dropBeliever) {
            self.query("DROP TABLE Believer");
        };

        if (dropSettings) {
            self.query("DROP TABLE Settings");
        };
    };

    // Handle query's and potential errors
    self.query = function (query, parameters) {
        parameters = undefinedToNull(parameters || []);
        var q = $q.defer();

        $ionicPlatform.ready(function () {
            $cordovaSQLite.execute(db, query, parameters)
              .then(function (result) {
                  q.resolve(result);
              }, function (error) {
                  console.warn('I found an error');
                  console.warn(error);
                  q.reject(error);
              });
        });
        return q.promise;
    }

    // Proces a result set
    self.getAll = function (result) {
        var output = [];

        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }
        return output;
    }

    // Proces a single result
    self.getById = function (result) {
        var output = null;
        output = angular.copy(result.rows.item(0));
        return output;
    }

    self.initializeDatabase = function () {
        // Creating the database object
        //if (window.cordova) {
        //    // App syntax
        //    db = $cordovaSQLite.openDB("myapp.db");
        //} else {
            // Ionic serve syntax
            db = window.openDatabase("myapp.db", "1.0", "My app", -1);
        //};

        var believerInitializer = self.query("CREATE TABLE IF NOT EXISTS Believer(id INTEGER PRIMARY KEY, " +
							"firstName TEXT,	lastName TEXT,		phoneNr TEXT,		email TEXT,			address TEXT," +
							"aptoNr TEXT,		city TEXT,			zip TEXT,			state TEXT,			country TEXT," +
							"comments TEXT,		isMale INTEGER,		age INTEGER,		face TEXT,			isEvangelist BOOL," +
							"longitude REAL,	latitude NUMERIC,	accuracy REAL,		fullAddress TEXT,	recordedBy TEXT)");
        
        var settingsInitializer = self.query("CREATE TABLE IF NOT EXISTS Settings(phoneNr TEXT, synchUrl TEXT, installId TEXT, firstName TEXT, lastName TEXT, email TEXT, ministry INTEGER)");

        return $q.all([believerInitializer, settingsInitializer]).then(function () {
            self.isInitialized = true;
            return {                
                isBelieverInitialized : true,
                isSettingsInitialized : true
            };
        }, function () {
            self.isInitialized = false;
            return {
                isBelieverInitialized: false,
                isSettingsInitialized: false
            };
        });
    };

    return self;
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
