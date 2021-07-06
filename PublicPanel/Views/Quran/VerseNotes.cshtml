@*
@using Data.Quran.DataAccess.Models;
@using Data.Quran.DataAccess.Models.Views;
@using Saeed.Quran.DataAccess.Models;
@{
    Layout = "Layout";
    var chapters = ViewBag.Chapters as List<Chapter>;
    var chapter = ViewBag.Chapter as Chapter;
    var verse = ViewBag.Verse as VerseView;
    var notes = ViewBag.Notes as List<VerseNote>;
    ViewBag.Title = $"نکات سوره {chapter.Title} (سوره {chapter.Number}) آیه {verse.Number}";
}

<partial name="Breadcrumb" />

<label for="chapters">سوره</label>
<select id="chapters" value="@chapter.Number">
    @foreach (var item in chapters)
    {
        var text = $"{@item.Title} - {@item.Number}";
        if (item.Number == chapter.Number)
        {
            <option value="@item.Number" data-lastVerseNumber="@item.LastVerseNumber" selected="selected">@Html.Raw(text)</option>
        }
        else
        {
            <option value="@item.Number" data-lastVerseNumber="@item.LastVerseNumber">@Html.Raw(text)</option>
        }
    }
</select>

<label for="verses">آیه</label>
<select id="verses">
    @for (int i = 1; i <= chapter.LastVerseNumber; i++)
    {
        if (verse.Number == i)
        {
            <option value="@i" selected="selected">@i</option>
        }
        else
        {
            <option value="@i">@i</option>
        }
    }
</select>

<h1>نکات آیه <a href="https://quran.com/@chapter.Number/@verse.Number" target="_blank">@verse.Number</a> سوره <a href="https://quran.com/@chapter.Number" target="_blank">@Html.Raw(chapter.Title)</a> (سوره @chapter.Number)</h1>

<p style="font-size: 200%;">
    @Html.Raw(verse.ModernText)
</p>

<ul>
    @foreach (var note in notes)
    {
        <li>
            @if (note.Note.StartsWith("http"))
            {
                <a href="@note.Note" target="_blank">@Html.Raw(note.Note)</a>
            }
            else
            {
                @:@Html.Raw(note.Note)
            }
        </li>
    }
</ul>

<hr />

<p>تحلیل زبان شناختی در <a href="https://corpus.quran.com/wordbyword.jsp?chapter=@chapter.Number&verse=@verse.Number" target="_blank">corpuse.quran.com</a></p>

@section Scripts {
    <script>
        $(function () {
            var chapters = $('#chapters');
            var verses = $('#verses');
            chapters.change(function () {
                goToNote(1);
                return;
                verses.empty();
                var lastVerseNumber = chapters.find(':selected').attr('data-lastVerseNumber') * 1;
                for (var i = 1; i <= lastVerseNumber; i++) {
                    $('<option/>')
                        .val(i)
                        .text(i)
                        .appendTo(verses);
                }
            });
            verses.change(function () {
                goToNote(verses.val());
            });
            goToNote = function (verse) {
                var url = '/quran/verseNotes?chapter=' + chapters.val() + '&verse=' + verse;
                document.location = url;
            };
        });

    </script>
}
*@