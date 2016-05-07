using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace MyWebApp.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class CharactersController : Controller
    {
        [HttpGet]
        [Produces(typeof(string[]))]
        public IActionResult Get()
        {
            return Json(new[] {
                "Gollum",
                "Gandalf",
                "Legolas",
                "Aragorn",
                "Frodo Baggins",
                "Bilbo Baggins",
                "Saruman",
                "Gimli",
                "Galadriel"
            });
        }
    }
}
