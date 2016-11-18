using AngularNetProject.Models;

namespace AngularNetProject.Models
{
    public class TaskFactory
    {
        public TaskVm[] GetTaskVms()
        {
            var tasks = new[]
            {
                new TaskVm { Item = "Test Item 1", Date = "10/10/1995" },
                new TaskVm { Item = "Test Item 2", Date = "10/10/1996" },
                new TaskVm { Item = "Test Item 3", Date = "10/10/1997" },
                new TaskVm { Item = "Test Item 4", Date = "10/10/1998" }
            };
            return tasks;
        }
    }
}