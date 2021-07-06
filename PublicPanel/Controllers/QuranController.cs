using Data.Quran.Business;
using Holism.Framework;
using Holism.Framework.Extensions;
using Holism.Mvc;
using Microsoft.AspNetCore.Mvc;
using Saeed.Quran.Business;
using System.Linq;

namespace Saeed.NefcantoWeb.PublicPanel.Controllers
{
    public class QuranController : GeneralController
    {
        public IActionResult Chapter()
        {
            var chapter = Request.Query["chapter"].FirstOrDefault();
            if (chapter == null)
            {
                return NotFound();
            }
            if (!chapter.IsNumeric())
            {
                return NotFound();
            }
            if (!new ChapterBusiness().Exists(chapter.ToInt()))
            {
                return NotFound();
            }
            ViewBag.ChapterNumber = chapter.ToInt();
            ViewBag.Chapter = new ChapterBusiness().Get(chapter.ToInt());
            ViewBag.Chapters = new ChapterBusiness().GetAll();
            ViewBag.Verses = new VerseBusiness().GetVerses(chapter.ToInt());
            return View();
        }

        public IActionResult ChapterNotes()
        {
            var chapter = Request.Query["chapter"].FirstOrDefault();
            if (chapter == null)
            {
                return NotFound();
            }
            if (!chapter.IsNumeric())
            {
                return NotFound();
            }
            if (!new ChapterBusiness().Exists(chapter.ToInt()))
            {
                return NotFound();
            }
            ViewBag.ChapterNumber = chapter.ToInt();
            ViewBag.Chapter = new ChapterBusiness().Get(chapter.ToInt());
            ViewBag.Chapters = new ChapterBusiness().GetAll();
            ViewBag.Notes = new ChapterNoteBusiness().GetNotes(chapter.ToInt());
            return View();
        }

        public IActionResult VerseNotes()
        {
            var chapter = Request.Query["chapter"].FirstOrDefault();
            var verse = Request.Query["verse"].FirstOrDefault();
            if (chapter == null || verse == null)
            {
                return NotFound();
            }
            if (!chapter.IsNumeric() || !verse.IsNumeric())
            {
                return NotFound();
            }
            if (!new VerseBusiness().Exists(chapter.ToInt(), verse.ToInt()))
            {
                return NotFound();
            }
            ViewBag.ChapterNumber = chapter.ToInt();
            ViewBag.VerseNumber = verse.ToInt();
            ViewBag.Chapter = new ChapterBusiness().Get(chapter.ToInt());
            ViewBag.Verse = new VerseBusiness().Get(chapter.ToInt(), verse.ToInt());
            ViewBag.Chapters = new ChapterBusiness().GetAll();
            ViewBag.Notes = new VerseNoteBusiness().GetNotes(chapter.ToInt(), verse.ToInt());
            return View();
        }

        public IActionResult Notes()
        {
            var id = Request.Query["id"].FirstOrDefault();
            if (id == null)
            {
                id = "1";
            }
            if (!id.IsNumeric())
            {
                return NotFound();
            }
            if (!new QuranNoteBusiness().Exists(id.ToInt()))
            {
                return NotFound();
            }
            ViewBag.Note = new QuranNoteBusiness().Get(id.ToInt());
            ViewBag.Notes = new QuranNoteBusiness().GetAll();
            return View();
        }

        public IActionResult Words()
        {
            var words = new Jzp.Language.Business.WordBusiness().GetList(ListOptions.Create());
            ViewBag.Words = words;
            return View();
        }

        public IActionResult PersoanalMuhkamat()
        {
            return View();
        }
    }
}