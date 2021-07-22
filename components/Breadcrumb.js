const Breadcrumb = ({ urlSegments }) => {
    let url = "";
    let items = [];
    for (let i = 0; i < urlSegments.length - 1; i++) {
        if (urlSegments[i] == 'index') {
            continue;
        }
        url = url + '/' + urlSegments[i];
        items.push({
            url: url,
            text: urlSegments[i].split('-').map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(' ')
        })
    }
    return <div className="breadcrumb">
            <a href="/">Home</a><span>&gt;</span>
        {
            items.map(i => <span key={i.url}>
            <a href={i.url + '/index'}>{i.text}</a><span>&gt;</span></span>)
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