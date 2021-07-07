@*
@using Data.Quran.DataAccess.Models;
@using Data.Quran.DataAccess.Models.Views;
@using Saeed.Quran.DataAccess.Models;
@{
    Layout = "Layout";
    var chapters = ViewBag.Chapters as List<Chapter>;
    var chapter = ViewBag.Chapter as Chapter;
    var notes = ViewBag.Notes as List<ChapterNote>;
    ViewBag.Title = $"نکات سوره {chapter.Title} (سوره {chapter.Number})";
}

<partial name="Breadcrumb" />

<label for="chapters">سوره</label>
<select id="chapters" value="@chapter.Number">
    @foreach (var item in chapters)
    {
        var text = $"{@item.Title} - {@item.Number}";
        if (item.Number == chapter.Number)
        {
            <option value="@item.Number" data-lastVerseNumber="@item.LastVerseNumber" selected="selected">@text</option>
        }
        else
        {
            <option value="@item.Number" data-lastVerseNumber="@item.LastVerseNumber">@text</option>
        }
    }
</select>

<h1>نکات سوره @chapter.Title (سوره @chapter.Number)</h1>

<ul>
    @foreach (var note in notes)
    {
        <li>@note.Note</li>
    }
</ul>

@section Scripts {
    <script>
        $(function () {
            var chapters = $('#chapters');
            chapters.change(function () {
                var url = '/quran/chapterNotes?chapter=' + chapters.val();
                document.location = url;
            });
        });
    </script>
}
*@