app.factory('taskRepository', function ($resource) {
    return {
        get: function () {
            return $resource('/api/tasks').query();
        },
        save: function (task) {
            return $resource('/api/tasks').save(task);
        },
        remove: function (task) {
            return $resource('/api/tasks/:id', { id: '@id' }).delete(task);
        }
    };
});