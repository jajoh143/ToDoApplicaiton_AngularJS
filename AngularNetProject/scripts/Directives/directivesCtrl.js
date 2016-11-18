'use strict';
app.controller('directivesCtrl', ['$scope', function($scope) {
    $scope.user = {
        name: 'Luke Skywalker',
        address: {
            street: "PO BOX 123",
            City: "Secret Rebel Base",
            Planet: "Earth"
        }
    }
}]);