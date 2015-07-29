angular.module('starter.services')
.factory('States', function () {
    var stateList = [
           { stateCode: "AL", stateName: "Alabama", country: "US" }, { stateCode: "AK", stateName: "Alaska", country: "US" }
          , { stateCode: "AZ", stateName: "Arizona", country: "US" }, { stateCode: "AR", stateName: "Arkansas", country: "US" }
          , { stateCode: "CA", stateName: "California", country: "US" }, { stateCode: "CO", stateName: "Colorado", country: "US" }
          , { stateCode: "CT", stateName: "Connecticut", country: "US" }, { stateCode: "DE", stateName: "Delaware", country: "US" }
          , { stateCode: "FL", stateName: "Florida", country: "US" }, { stateCode: "GA", stateName: "Georgia", country: "US" }
          , { stateCode: "HI", stateName: "Hawaii", country: "US" }, { stateCode: "ID", stateName: "Idaho", country: "US" }
          , { stateCode: "IL", stateName: "Illinois", country: "US" }, { stateCode: "IN", stateName: "Indiana", country: "US" }
          , { stateCode: "IA", stateName: "Iowa", country: "US" }, { stateCode: "KS", stateName: "Kansas", country: "US" }
          , { stateCode: "KY", stateName: "Kentucky", country: "US" }, { stateCode: "LA", stateName: "Louisiana", country: "US" }
          , { stateCode: "ME", stateName: "Maine", country: "US" }, { stateCode: "MD", stateName: "Maryland", country: "US" }
          , { stateCode: "MA", stateName: "Massachusetts", country: "US" }, { stateCode: "MI", stateName: "Michigan", country: "US" }
          , { stateCode: "MN", stateName: "Minnesota", country: "US" }, { stateCode: "MS", stateName: "Mississippi", country: "US" }
          , { stateCode: "MO", stateName: "Missouri", country: "US" }, { stateCode: "MT", stateName: "Montana", country: "US" }
          , { stateCode: "NE", stateName: "Nebraska", country: "US" }, { stateCode: "NV", stateName: "Nevada", country: "US" }
          , { stateCode: "NH", stateName: "New Hampshire", country: "US" }, { stateCode: "NJ", stateName: "New Jersey", country: "US" }
          , { stateCode: "NM", stateName: "New Mexico", country: "US" }, { stateCode: "NY", stateName: "New York", country: "US" }
          , { stateCode: "NC", stateName: "North Carolina", country: "US" }, { stateCode: "ND", stateName: "North Dakota", country: "US" }
          , { stateCode: "OH", stateName: "Ohio", country: "US" }, { stateCode: "OK", stateName: "Oklahoma", country: "US" }
          , { stateCode: "OR", stateName: "Oregon", country: "US" }, { stateCode: "PA", stateName: "Pennsylvania", country: "US" }
          , { stateCode: "RI", stateName: "Rhode Island", country: "US" }, { stateCode: "SC", stateName: "South Carolina", country: "US" }
          , { stateCode: "SD", stateName: "South Dakota", country: "US" }, { stateCode: "TN", stateName: "Tennessee", country: "US" }
          , { stateCode: "TX", stateName: "Texas", country: "US" }, { stateCode: "UT", stateName: "Utah", country: "US" }
          , { stateCode: "VT", stateName: "Vermont", country: "US" }, { stateCode: "VA", stateName: "Virginia", country: "US" }
          , { stateCode: "WA", stateName: "Washington", country: "US" }, { stateCode: "WV", stateName: "West Virginia", country: "US" }
          , { stateCode: "WI", stateName: "Wisconsin", country: "US" }, { stateCode: "WY", stateName: "Wyoming", country: "US" }
    ];

    return {
        /*TODO: Filter by country using $filter with dependency injection */
        all: function (country) {
            return stateList;
        }
    };
});