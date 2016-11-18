'use strict';
app.controller('toDoCtrl', ['$scope', '$resource', 'taskRepository', function ($scope, $resource, taskRepository) {
    $scope.message = "Jake's To Do App!";
    $scope.numTasks = function () {
        var count = 0;
        angular.forEach($scope.tasks, function (task) {
            count++;
        });
        return count;
    }
    $scope.tasks = taskRepository.get();
    $scope.newTask = function (title, date) {
    
        var id = 0;
        $('td > button').each(function () {

            if (id < $(this).data('id')) {
                id = $(this).data('id');
            }
        });
        id++;
        var newTask = {
            id: id.toString(),
            title: title,
            date: date
        };
        taskRepository.save(newTask);
        $scope.tasks.push(newTask);
    };

    $scope.markComplete = function (task) {
        console.log(task.id);
        var param = { id: task.id }
        taskRepository.remove(param);
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
    };
}]);
