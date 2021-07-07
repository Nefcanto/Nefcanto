const Breadcrumb = ({ urlSegments }) => {
    let url = "";
    let items = [];
    for (let i = 0; i < urlSegments.length; i++) {
        url = url + '/' + urlSegments[i];
        items.push({
            url: url,
            text: urlSegments[i]
        })
    }
    return <div className="breadcrumb">
            <a href="/">home</a><span>&gt;</span>
        {
            items.map(i => <>
            <a href={i.url}>{i.text}</a><span>&gt;</span></>)
        }
    </div>
}

export default Breadcrumb;
/*
@using Holism.Framework;
@using System.Text.RegularExpressions;
@using Saeed.NefcantoWeb.PublicPanel;
@{
    var path = Context.Request.Path.Value.TrimEnd('/');
    var previousPath = "";
    var currentPath = path;
    var breadcrumbUrls = new Dictionary<string, string>();
    breadcrumbUrls.Add("home", "/");
    while (currentPath.IsSomething())
    {
        var nextSegment = Regex.Match(currentPath, "/[^/]*");
        if (!nextSegment.Success)
        {
            break;
        }
        previousPath += nextSegment.Value;
        breadcrumbUrls.Add(nextSegment.Value.Replace("/", ""), previousPath);
        currentPath = currentPath.Replace(nextSegment.Value, "");
    }
    breadcrumbUrls.Remove(breadcrumbUrls.Last().Key);
}

<div id="breadcrumb">
    @foreach (var url in breadcrumbUrls)
    {
        var breadcrumbItem = BreadcrumbHelper.GetItem(url.Value);
        <span class="breadcrumbItem">
            @if (breadcrumbItem != null && breadcrumbItem.HasIndex)
            {
                <a href="@url.Value">
                    @Html.Raw(BreadcrumbHelper.Translate(url.Key))
                </a>
            }
            else
            {
                <a>
                    @Html.Raw(BreadcrumbHelper.Translate(url.Key))
                </a>
            }
        </span>
        <span>
            &gt;
        </span>
    }
</div>

<script>
    $(function () {
        var returnLink = $('#returnLink');
        returnLink.click(function () {
            history.back();
        });
    });
</script>
*/