using Holism.AdminPanel;
using Holism.Web;
using Holism.Web.Controllers;

namespace Saeed.NefcantoWeb.AdminPanel.Controllers
{
    public class VerseNoteController : ListController
    {
        public override ListParameters ListParameters => new AdminListParameters
        {
            PagingAbbreviatedName = "نکته",
            ItemsCanBeAdded = true,
            ItemsCanBeDeleted = true,
            ItemsCanBeEdited = true
        };
    }
}
