@*
@using Data.Quran.DataAccess.Models;
@using Data.Quran.DataAccess.Models.Views;
@using Saeed.Quran.DataAccess.Models;
@{
    Layout = "Layout";
    var chapters = ViewBag.Chapters as List<Chapter>;
    var chapter = ViewBag.Chapter as Chapter;
    var verses = ViewBag.Verses as List<VerseView>;
    ViewBag.Title = $"سوره {chapter.Title} (سوره {chapter.Number})";
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

<input type="checkbox" id="versePerLine" />
<label for="versePerLine">هر آیه تو یه خط؟</label>

<hr />

<h1>سوره <a href="https://quran.com/@chapter.Number" target="_blank">@chapter.Title</a> (سوره @chapter.Number)</h1>

<div id="chapterContainer">
    @foreach (var verse in verses)
    {
        <span class="verse"><a href="https://quran.com/@chapter.Number/@verse.Number" target="_blank">@verse.Number</a> - @verse.ModernText </span>
    }
</div>

@section Scripts {
    <script>
        $(function () {
            var chapterContainer = $('#chapterContainer');
            var chapters = $('#chapters');
            var versePerLine = $('#versePerLine');
            var initialStyle = app.cookie.read('versePerLine');
            if (initialStyle === 'true') {
                versePerLine.attr('checked', initialStyle);
                chapterContainer.addClass('versePerLine');
            }
            versePerLine.change(function () {
                var value = versePerLine.is(':checked');
                app.cookie.create('versePerLine', value);
                if (value === true) {
                    chapterContainer.addClass('versePerLine');
                }
                else {
                    chapterContainer.removeClass('versePerLine');
                }
            });
            chapters.change(function () {
                var url = '/quran/chapter?chapter=' + chapters.val();
                document.location = url;
            });
        });
    </script>
}

<style>
    .verse {
        display: inline-block;
        padding: 7px 5px;
        font-size: 150%;
        line-height: 150%;
    }

    #chapterContainer.versePerLine .verse {
        display: block;
    }
</style>
*@