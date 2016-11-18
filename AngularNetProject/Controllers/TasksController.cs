using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net;
using System.Web.Http;
using AngularNetProject.Models;
using System.Linq;

namespace AngularNetProject.Controllers
{
    [RoutePrefix("api/tasks")]
    public class TasksController : ApiController
    {
        private TaskEntities db = new TaskEntities();

        [HttpGet]
        public HttpResponseMessage findAll()
        {
            var serializedData = JsonConvert.SerializeObject(db.Tasks.ToList());
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(serializedData);
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return response;
        }

        [HttpGet]
        [Route("{id}")]
        public HttpResponseMessage find(string id)
        {
            var serializedData = JsonConvert.SerializeObject(db.Tasks.Find(id));
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(serializedData);
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return response;
        }

        [HttpPost]
        public void create(Task task)
        {
            db.Tasks.Add(task);
            db.SaveChanges();
        }

        [HttpPut]
        public void update(Task task)
        {
            db.Entry<Task>(task).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
        }

        [HttpDelete]
        [Route("{id}")]
        public void delete(string id)
        {
            db.Tasks.Remove(db.Tasks.Find(id));
            db.SaveChanges();
        }
    }
}
