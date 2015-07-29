angular.module('starter.services')
.factory('Believers', function ($cordovaSQLite, Database) {
    var INSERT_SQL = 'INSERT INTO Believer(id, firstName, lastName, phoneNr, email, address, aptoNr, city, zip, state, country, comments, isMale, age, face, isEvangelist, longitude, latitude, accuracy, fullAddress, recordedBy) ' +
                     'values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var DELETE_SQL = 'DELETE Believer WHERE id = ?';
    var UPDATE_SQL = 'UPDATE Believer SET firstName = ?, lastName = ?, phoneNr = ?, email = ?, address = ?, aptoNr = ?, city = ?, zip = ?, state = ?, country = ?, comments = ?, isMale = ?, age = ?, face = ?, isEvangelist = ?, longitude = ?, latitude = ?, accuracy = ?, fullAddress = ? WHERE id = ?';
    var GET_ALL_SQL = 'SELECT id, firstName, lastName, phoneNr, email, address, aptoNr, city, zip, state, country, comments, isMale, age, face, isEvangelist, longitude, latitude, accuracy, fullAddress, recordedBy FROM Believer';

    var self = this;

    // Some testing data
    var sample =
    [{
        id: 0,
        firstName: 'Ben',
        lastName: 'Sparrow',
        phoneNr: '305-555-2255',
        email: 'bsparrow@flyingdutchman.com',
        address: '757 South Blvd. St.',
        aptoNr: null,
        city: 'Sun City',
        zip: '33186',
        state: 'FL',
        country: 'US',
        comments: 'Ben asked for prayers for his cousin, he thinks he is Johny Dep!',
        isMale: true,
        age: 54,
        reminders: null,
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
        fullName: 'Sparrow, Ben'
    }, {
        id: 1,
        firstName: 'Max',
        lastName: 'Lynx',
        phoneNr: '786-555-3256',
        email: 'max.lynx@yahoo.com',
        address: '50120 SW 33 St.',
        aptoNr: null,
        city: 'Miami',
        zip: '33033',
        state: 'FL',
        country: 'US',
        comments: 'Max used to be very fast but now is no more... Depresion has ensued and he needs lots of prayers',
        gender: 'F',
        age: null,
        reminders: null,
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
        fullName: 'Lynx, Max'
    }, {
        id: 2,
        firstName: 'Andrew',
        lastName: 'Jostlin',
        phoneNr: '305-555-2255',
        email: 'andrew_j@msn.net',
        address: '757 Some Road St.',
        aptoNr: null,
        city: 'Homestead',
        zip: '33132',
        state: 'FL',
        country: 'US',
        comments: '',
        gender: 'M',
        age: 23,
        reminders: null,
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg',
        fullName: 'Jostlin, Andrew'
    }, {
        id: 3,
        firstName: 'Adam',
        lastName: 'Bradleyson',
        phoneNr: '305-555-7225',
        email: 'ab1678@msn.net',
        address: '56700 North of A1A',
        aptoNr: '12',
        city: 'Homestead',
        zip: '33003',
        state: 'FL',
        country: 'US',
        comments: '',
        gender: 'M',
        age: 42,
        reminders: [
          { on: new Date('06/26/2015'), msg: "Call and ask about his mom's health" }
        ],
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
        fullName: 'Bradleyson, Adam'
    }, {
        id: 4,
        firstName: 'Donna',
        lastName: 'Ford',
        phoneNr: '417-555-4219',
        email: 'd_ford1232@msn.net',
        address: '757 Washington Blvd.',
        aptoNr: null,
        city: 'Homestead',
        zip: '33132',
        state: 'FL',
        country: 'US',
        comments: '',
        gender: 'F',
        age: 76,
        reminders: [
          { on: new Date(), msg: "Donna's birthday" },
          { on: new Date('06/28/2015'), msg: "Call and ask about doctor's appointment" }
        ],
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg',
        fullName: 'Ford, Donna'
    }];

    var believers = null;

    function Believer(id, firstName, lastName, phoneNr, email, address, aptoNr, city, zip, state, country, comments, isMale, age, face, isEvangelist, longitude, latitude, accuracy, fullAddress, recordedBy) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNr = phoneNr;
        this.email = email;
        this.address = address;
        this.aptoNr = aptoNr;
        this.city = city;
        this.zip = zip;
        this.state = state;
        this.country = country;
        this.comments = comments;
        this.isMale = isMale;
        this.age = age;
        this.face = face;
        this.isEvangelist = isEvangelist;
        this.location = {
            longitude: longitude,
            latitude: latitude,
            accuracy: accuracy,
            fullAddress: fullAddress
        };
        this.recordedBy = recordedBy;
        this.fullName = firstName + ', ' + lastName;
    };

    // Returns all believers in local storage
    self.getAllBelievers = function () {
        believers = [];

        return Database.query(GET_ALL_SQL)
            .then(function (result) {
                for (var i = 0; i < result.rows.length; i++) {
                    var currRow = result.rows.item(i);
                    var currBeliever = new Believer(
                        currRow.id, currRow.firstName, currRow.lastName,
                        currRow.phoneNr, currRow.email, currRow.address,
                        currRow.aptoNr, currRow.city, currRow.zip,
                        currRow.state, currRow.country, currRow.comments,
                        currRow.isMale, currRow.age, currRow.face, currRow.isEvangelist,
                        {
                            longitude: currRow.longitude,
                            latitude: currRow.latitude,
                            accuracy: currRow.accuracy,
                            fullAddress: currRow.fullAddress
                        },
                        currRow.recordedBy);

                    believers.push(currBeliever);

                    currBeliever = null;
                }

                return believers;
            }, function () {
                return believers;
            });
    };

    function updateBeliever(believer) {
        // TODO: Add synchronization functionality
        var parameters = [believer.firstName, believer.lastName, believer.phoneNr, believer.email, believer.address, believer.aptoNr, believer.city, believer.zip, believer.state, believer.country, believer.comments, believer.isMale, believer.age, believer.face, believer.isEvangelist, believer.location.longitude, believer.location.latitude, believer.location.accuracy, believer.fullAddress, believer.id];
        return Database.query(UPDATE_SQL, parameters);
    };

    function insertBeliever(believer) {
        var parameters = [believer.id, believer.firstName, believer.lastName, believer.phoneNr, believer.email, believer.address, believer.aptoNr, believer.city, believer.zip, believer.state, believer.country, believer.comments, believer.isMale, believer.age, believer.face, believer.isEvangelist, believer.location.longitude, believer.location.latitude, believer.location.accuracy, believer.fullAddress, believer.recordedBy];
        return Database.query(INSERT_SQL, parameters)
            .then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
    };

    function deleteBeliever(believerId) {
        var parameters = [believer.id];
        return Database.query(DELETE_SQL, parameters);
    };

    self.all = function () {
        return believers == null ? self.getAllBelievers() : believers;
    };

    self.createEmptyBeliever = function () {
        return new Believer(-1, null, null, null, null, null, null, 'Miami', null, 'FL', 'US', null, null, null, null, null, 'New Believer');
    };

    self.remove = function (believer) {
        believers.splice(believers.indexOf(believer), 1);
    };

    self.getLastId = function () {
        var lastValue = -1;
        for (var i = 0; i < believers.length; i++) {
            if (believers[i].id > lastValue) {
                lastValue = believers[i].id;
            }
        }

        return lastValue;
    };

    self.commit = function (believer) {
        if (believer.id < 0) {
            believer.id = ((this.getLastId()) + 1);
            believers.push(believer);

            insertBeliever(believer);
        }
        else {
            updateBeliever(believer);
        };
    };

    self.get = function (believerId) {
        for (var i = 0; i < believers.length; i++) {
            if (believers[i].id === parseInt(believerId)) {
                return believers[i];
            }
        }
        return null;
    };

    self.all();

    return self;
});