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
                "Chewbacca",
                "Rey",
                "Finn (FN2187)",
                "Han Solo",
                "Leia Organa",
                "Luke Skywalker",
                "Poe Dameron",
                "Kylo Ren",
                "Supreme Commander Snoke",
                "R2-D2",
                "BB8",
                "C-3PO",
                "Maz Kanata",
                "Captain Phasma",
                "General Hux",
                "Lor San Tekka",
            });
        }
    }
}
