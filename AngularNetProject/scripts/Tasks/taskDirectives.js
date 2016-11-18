app.directive('taskList', function () {
    return {
        restrict: 'E',
        templateUrl: "/scripts/Tasks/Templates/taskList.html",
        controller: 'toDoCtrl'
    }
});