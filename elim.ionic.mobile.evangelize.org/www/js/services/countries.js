angular.module('starter.services')
.factory('Countries', function () {
    var countryList = [
           { contryCode: 'AF', countryName: "Afghanistan" }, { contryCode: 'AX', countryName: "Åland Islands" }, { contryCode: 'AL', countryName: "Albania" }
          , { contryCode: 'DZ', countryName: "Algeria" }, { contryCode: 'AS', countryName: "American Samoa" }, { contryCode: 'AD', countryName: "Andorra" }
          , { contryCode: 'AO', countryName: "Angola" }, { contryCode: 'AI', countryName: "Anguilla" }, { contryCode: 'AQ', countryName: "Antarctica" }
          , { contryCode: 'AG', countryName: "Antigua and Barbuda" }, { contryCode: 'AR', countryName: "Argentina" }, { contryCode: 'AM', countryName: "Armenia" }
          , { contryCode: 'AW', countryName: "Aruba" }, { contryCode: 'AU', countryName: "Australia" }, { contryCode: 'AT', countryName: "Austria" }
          , { contryCode: 'AZ', countryName: "Azerbaijan" }, { contryCode: 'BS', countryName: "Bahamas" }, { contryCode: 'BH', countryName: "Bahrain" }
          , { contryCode: 'BD', countryName: "Bangladesh" }, { contryCode: 'BB', countryName: "Barbados" }, { contryCode: 'BY', countryName: "Belarus" }
          , { contryCode: 'BE', countryName: "Belgium" }, { contryCode: 'BZ', countryName: "Belize" }, { contryCode: 'BJ', countryName: "Benin" }
          , { contryCode: 'BM', countryName: "Bermuda" }, { contryCode: 'BT', countryName: "Bhutan" }, { contryCode: 'BO', countryName: "Bolivia" }
          , { contryCode: 'BA', countryName: "Bosnia and Herzegovina" }, { contryCode: 'BW', countryName: "Botswana" }, { contryCode: 'BV', countryName: "Bouvet Island" }
          , { contryCode: 'BR', countryName: "Brazil" }, { contryCode: 'IO', countryName: "British Indian Ocean Territory" }, { contryCode: 'BN', countryName: "Brunei Darussalam" }
          , { contryCode: 'BG', countryName: "Bulgaria" }, { contryCode: 'BF', countryName: "Burkina Faso" }, { contryCode: 'BI', countryName: "Burundi" }
          , { contryCode: 'KH', countryName: "Cambodia" }, { contryCode: 'CM', countryName: "Cameroon" }, { contryCode: 'CA', countryName: "Canada" }
          , { contryCode: 'CV', countryName: "Cape Verde" }, { contryCode: 'BQ', countryName: "Caribbean Netherlands " }, { contryCode: 'KY', countryName: "Cayman Islands" }
          , { contryCode: 'CF', countryName: "Central African Republic" }, { contryCode: 'TD', countryName: "Chad" }, { contryCode: 'CL', countryName: "Chile" }
          , { contryCode: 'CN', countryName: "China" }, { contryCode: 'CX', countryName: "Christmas Island" }, { contryCode: 'CC', countryName: "Cocos (Keeling) Islands" }
          , { contryCode: 'CO', countryName: "Colombia" }, { contryCode: 'KM', countryName: "Comoros" }, { contryCode: 'CG', countryName: "Congo" }
          , { contryCode: 'CD', countryName: "Congo, Democratic Republic of" }, { contryCode: 'CK', countryName: "Cook Islands" }, { contryCode: 'CR', countryName: "Costa Rica" }
          , { contryCode: 'CI', countryName: "Côte d'Ivoire" }, { contryCode: 'HR', countryName: "Croatia" }, { contryCode: 'CU', countryName: "Cuba" }
          , { contryCode: 'CW', countryName: "Curaçao" }, { contryCode: 'CY', countryName: "Cyprus" }, { contryCode: 'CZ', countryName: "Czech Republic" }
          , { contryCode: 'DK', countryName: "Denmark" }, { contryCode: 'DJ', countryName: "Djibouti" }, { contryCode: 'DM', countryName: "Dominica" }
          , { contryCode: 'DO', countryName: "Dominican Republic" }, { contryCode: 'EC', countryName: "Ecuador" }, { contryCode: 'EG', countryName: "Egypt" }
          , { contryCode: 'SV', countryName: "El Salvador" }, { contryCode: 'GQ', countryName: "Equatorial Guinea" }, { contryCode: 'ER', countryName: "Eritrea" }
          , { contryCode: 'EE', countryName: "Estonia" }, { contryCode: 'ET', countryName: "Ethiopia" }, { contryCode: 'FK', countryName: "Falkland Islands" }
          , { contryCode: 'FO', countryName: "Faroe Islands" }, { contryCode: 'FJ', countryName: "Fiji" }, { contryCode: 'FI', countryName: "Finland" }
          , { contryCode: 'FR', countryName: "France" }, { contryCode: 'GF', countryName: "French Guiana" }, { contryCode: 'PF', countryName: "French Polynesia" }
          , { contryCode: 'TF', countryName: "French Southern Territories" }, { contryCode: 'GA', countryName: "Gabon" }, { contryCode: 'GM', countryName: "Gambia" }
          , { contryCode: 'GE', countryName: "Georgia" }, { contryCode: 'DE', countryName: "Germany" }, { contryCode: 'GH', countryName: "Ghana" }
          , { contryCode: 'GI', countryName: "Gibraltar" }, { contryCode: 'GR', countryName: "Greece" }, { contryCode: 'GL', countryName: "Greenland" }
          , { contryCode: 'GD', countryName: "Grenada" }, { contryCode: 'GP', countryName: "Guadeloupe" }, { contryCode: 'GU', countryName: "Guam" }
          , { contryCode: 'GT', countryName: "Guatemala" }, { contryCode: 'GG', countryName: "Guernsey" }, { contryCode: 'GN', countryName: "Guinea" }
          , { contryCode: 'GW', countryName: "Guinea-Bissau" }, { contryCode: 'GY', countryName: "Guyana" }, { contryCode: 'HT', countryName: "Haiti" }
          , { contryCode: 'HM', countryName: "Heard and McDonald Islands" }, { contryCode: 'HN', countryName: "Honduras" }, { contryCode: 'HK', countryName: "Hong Kong" }
          , { contryCode: 'HU', countryName: "Hungary" }, { contryCode: 'IS', countryName: "Iceland" }, { contryCode: 'IN', countryName: "India" }
          , { contryCode: 'ID', countryName: "Indonesia" }, { contryCode: 'IR', countryName: "Iran" }, { contryCode: 'IQ', countryName: "Iraq" }
          , { contryCode: 'IE', countryName: "Ireland" }, { contryCode: 'IM', countryName: "Isle of Man" }, { contryCode: 'IL', countryName: "Israel" }
          , { contryCode: 'IT', countryName: "Italy" }, { contryCode: 'JM', countryName: "Jamaica" }, { contryCode: 'JP', countryName: "Japan" }
          , { contryCode: 'JE', countryName: "Jersey" }, { contryCode: 'JO', countryName: "Jordan" }, { contryCode: 'KZ', countryName: "Kazakhstan" }
          , { contryCode: 'KE', countryName: "Kenya" }, { contryCode: 'KI', countryName: "Kiribati" }, { contryCode: 'KW', countryName: "Kuwait" }
          , { contryCode: 'KG', countryName: "Kyrgyzstan" }, { contryCode: 'LA', countryName: "Lao People's Democratic Republic" }, { contryCode: 'LV', countryName: "Latvia" }
          , { contryCode: 'LB', countryName: "Lebanon" }, { contryCode: 'LS', countryName: "Lesotho" }, { contryCode: 'LR', countryName: "Liberia" }
          , { contryCode: 'LY', countryName: "Libya" }, { contryCode: 'LI', countryName: "Liechtenstein" }, { contryCode: 'LT', countryName: "Lithuania" }
          , { contryCode: 'LU', countryName: "Luxembourg" }, { contryCode: 'MO', countryName: "Macau" }, { contryCode: 'MK', countryName: "Macedonia" }
          , { contryCode: 'MG', countryName: "Madagascar" }, { contryCode: 'MW', countryName: "Malawi" }, { contryCode: 'MY', countryName: "Malaysia" }
          , { contryCode: 'MV', countryName: "Maldives" }, { contryCode: 'ML', countryName: "Mali" }, { contryCode: 'MT', countryName: "Malta" }
          , { contryCode: 'MH', countryName: "Marshall Islands" }, { contryCode: 'MQ', countryName: "Martinique" }, { contryCode: 'MR', countryName: "Mauritania" }
          , { contryCode: 'MU', countryName: "Mauritius" }, { contryCode: 'YT', countryName: "Mayotte" }, { contryCode: 'MX', countryName: "Mexico" }
          , { contryCode: 'FM', countryName: "Micronesia, Federated States of" }, { contryCode: 'MD', countryName: "Moldova" }, { contryCode: 'MC', countryName: "Monaco" }
          , { contryCode: 'MN', countryName: "Mongolia" }, { contryCode: 'ME', countryName: "Montenegro" }, { contryCode: 'MS', countryName: "Montserrat" }
          , { contryCode: 'MA', countryName: "Morocco" }, { contryCode: 'MZ', countryName: "Mozambique" }, { contryCode: 'MM', countryName: "Myanmar" }
          , { contryCode: 'NA', countryName: "Namibia" }, { contryCode: 'NR', countryName: "Nauru" }, { contryCode: 'NP', countryName: "Nepal" }
          , { contryCode: 'NC', countryName: "New Caledonia" }, { contryCode: 'NZ', countryName: "New Zealand" }, { contryCode: 'NI', countryName: "Nicaragua" }
          , { contryCode: 'NE', countryName: "Niger" }, { contryCode: 'NG', countryName: "Nigeria" }, { contryCode: 'NU', countryName: "Niue" }
          , { contryCode: 'NF', countryName: "Norfolk Island" }, { contryCode: 'KP', countryName: "North Korea" }, { contryCode: 'MP', countryName: "Northern Mariana Islands" }
          , { contryCode: 'NO', countryName: "Norway" }, { contryCode: 'OM', countryName: "Oman" }, { contryCode: 'PK', countryName: "Pakistan" }
          , { contryCode: 'PW', countryName: "Palau" }, { contryCode: 'PS', countryName: "Palestine, State of" }, { contryCode: 'PA', countryName: "Panama" }
          , { contryCode: 'PG', countryName: "Papua New Guinea" }, { contryCode: 'PY', countryName: "Paraguay" }, { contryCode: 'PE', countryName: "Peru" }
          , { contryCode: 'PH', countryName: "Philippines" }, { contryCode: 'PN', countryName: "Pitcairn" }, { contryCode: 'PL', countryName: "Poland" }
          , { contryCode: 'PT', countryName: "Portugal" }, { contryCode: 'PR', countryName: "Puerto Rico" }, { contryCode: 'QA', countryName: "Qatar" }
          , { contryCode: 'RE', countryName: "Réunion" }, { contryCode: 'RO', countryName: "Romania" }, { contryCode: 'RU', countryName: "Russian Federation" }
          , { contryCode: 'RW', countryName: "Rwanda" }, { contryCode: 'BL', countryName: "Saint Barthélemy" }, { contryCode: 'SH', countryName: "Saint Helena" }
          , { contryCode: 'KN', countryName: "Saint Kitts and Nevis" }, { contryCode: 'LC', countryName: "Saint Lucia" }, { contryCode: 'VC', countryName: "Saint Vincent and the Grenadines" }
          , { contryCode: 'MF', countryName: "Saint-Martin (France)" }, { contryCode: 'WS', countryName: "Samoa" }, { contryCode: 'SM', countryName: "San Marino" }
          , { contryCode: 'ST', countryName: "Sao Tome and Principe" }, { contryCode: 'SA', countryName: "Saudi Arabia" }, { contryCode: 'SN', countryName: "Senegal" }
          , { contryCode: 'RS', countryName: "Serbia" }, { contryCode: 'SC', countryName: "Seychelles" }, { contryCode: 'SL', countryName: "Sierra Leone" }
          , { contryCode: 'SG', countryName: "Singapore" }, { contryCode: 'SX', countryName: "Sint Maarten (Dutch part)" }, { contryCode: 'SK', countryName: "Slovakia" }
          , { contryCode: 'SI', countryName: "Slovenia" }, { contryCode: 'SB', countryName: "Solomon Islands" }, { contryCode: 'SO', countryName: "Somalia" }
          , { contryCode: 'ZA', countryName: "South Africa" }, { contryCode: 'GS', countryName: "South Georgia and the South Sandwich Islands" }, { contryCode: 'KR', countryName: "South Korea" }
          , { contryCode: 'SS', countryName: "South Sudan" }, { contryCode: 'ES', countryName: "Spain" }, { contryCode: 'LK', countryName: "Sri Lanka" }
          , { contryCode: 'PM', countryName: "St. Pierre and Miquelon" }, { contryCode: 'SD', countryName: "Sudan" }, { contryCode: 'SR', countryName: "Suriname" }
          , { contryCode: 'SJ', countryName: "Svalbard and Jan Mayen Islands" }, { contryCode: 'SZ', countryName: "Swaziland" }, { contryCode: 'SE', countryName: "Sweden" }
          , { contryCode: 'CH', countryName: "Switzerland" }, { contryCode: 'SY', countryName: "Syria" }, { contryCode: 'TW', countryName: "Taiwan" }
          , { contryCode: 'TJ', countryName: "Tajikistan" }, { contryCode: 'TZ', countryName: "Tanzania" }, { contryCode: 'TH', countryName: "Thailand" }
          , { contryCode: 'NL', countryName: "The Netherlands" }, { contryCode: 'TL', countryName: "Timor-Leste" }, { contryCode: 'TG', countryName: "Togo" }
          , { contryCode: 'TK', countryName: "Tokelau" }, { contryCode: 'TO', countryName: "Tonga" }, { contryCode: 'TT', countryName: "Trinidad and Tobago" }
          , { contryCode: 'TN', countryName: "Tunisia" }, { contryCode: 'TR', countryName: "Turkey" }, { contryCode: 'TM', countryName: "Turkmenistan" }
          , { contryCode: 'TC', countryName: "Turks and Caicos Islands" }, { contryCode: 'TV', countryName: "Tuvalu" }, { contryCode: 'UG', countryName: "Uganda" }
          , { contryCode: 'UA', countryName: "Ukraine" }, { contryCode: 'AE', countryName: "United Arab Emirates" }, { contryCode: 'GB', countryName: "United Kingdom" }
          , { contryCode: 'US', countryName: "United States" }, { contryCode: 'UM', countryName: "United States Minor Outlying Islands" }, { contryCode: 'UY', countryName: "Uruguay" }
          , { contryCode: 'UZ', countryName: "Uzbekistan" }, { contryCode: 'VU', countryName: "Vanuatu" }, { contryCode: 'VA', countryName: "Vatican" }
          , { contryCode: 'VE', countryName: "Venezuela" }, { contryCode: 'VN', countryName: "Vietnam" }, { contryCode: 'VG', countryName: "Virgin Islands (British)" }
          , { contryCode: 'VI', countryName: "Virgin Islands (U.S.)" }, { contryCode: 'WF', countryName: "Wallis and Futuna Islands" }, { contryCode: 'EH', countryName: "Western Sahara" }
          , { contryCode: 'YE', countryName: "Yemen" }, { contryCode: 'ZM', countryName: "Zambia" }, { contryCode: 'ZW', countryName: "Zimbabwe" }
    ];
    return {
        all: function () {
            return countryList;
        }
    };
});