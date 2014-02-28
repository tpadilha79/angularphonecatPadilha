'use strict';

/* Controllers */

function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}

function PhoneListController($scope) {
    $scope.hello = "Hello World!";
    $scope.items = [
        {"name": "Apple",
         "devices": {"name": "iPhone5"}},
        {"name": "Google",
         "devices": {"name": "Nexus4"}},
        {"name": "Microsoft", 
         "devices": {}}
    ];
}