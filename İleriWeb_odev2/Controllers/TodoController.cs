using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace İleriWeb_odev2.Controllers
{
    public class TodoController : Controller
    {
        // GET: Todo
        public ActionResult Todo()
        {
            ViewBag.ilkGorev = "Uyan";
            ViewBag.ikinciGorev = "Geri uyuma";
            ViewBag.ucuncuGorev = "Okula git";
            ViewBag.dorduncuGorev = "Hayatı sorgula";

            return View("Todo");
        }
    }
}