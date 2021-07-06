using Microsoft.AspNetCore.Mvc;

namespace Saeed.NefcantoWeb.PublicPanel.Controllers
{
    public class DefaultController : Holism.Api.Controllers.DefaultController
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Resume()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Reload()
        {
            BreadcrumbHelper.FindBreadcrumbItems();
            BreadcrumbHelper.LoadTranslations();
            return RedirectToAction(nameof(Index));
        }

        public IActionResult Vue()
        {
            return View();
        }
    }
}
