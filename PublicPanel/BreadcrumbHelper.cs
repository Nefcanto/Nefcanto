using Holism.Framework;
using Humanizer;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Saeed.NefcantoWeb.PublicPanel
{
    public class BreadcrumbHelper
    {
        static Dictionary<string, string> pathSegmentTranslations = new Dictionary<string, string>();
        static Dictionary<string, BreadcrumbItem> breadcrumbItems = new Dictionary<string, BreadcrumbItem>();

        static BreadcrumbHelper()
        {
            LoadTranslations();
            FindBreadcrumbItems();
        }

        public static void LoadTranslations()
        {
            pathSegmentTranslations = new Dictionary<string, string>();
            var fileName = "PathSegmentTranslations.json";
            var filePath = Path.Combine(AppContext.BaseDirectory, fileName);
            if (Config.IsDeveloping)
            {
                filePath = Path.Combine(AppContext.BaseDirectory, "..", fileName);
            }
            var json = File.ReadAllText(filePath).JsonDeserialize<JArray>();
            foreach (var item in json)
            {
                pathSegmentTranslations.Add(item["key"].ToString(), item["value"].ToString());
            }
        }

        public static void FindBreadcrumbItems()
        {
            breadcrumbItems = new Dictionary<string, BreadcrumbItem>();
            var viewsFolder = Path.Combine(AppContext.BaseDirectory, "Views");
            if (Config.IsDeveloping)
            {
                viewsFolder = Path.Combine(AppContext.BaseDirectory, "..", "Views");
            }
            var folders = Directory.GetDirectories(viewsFolder, "*.*", SearchOption.AllDirectories);
            breadcrumbItems.Add("/", new BreadcrumbItem
            {
                Path = "/",
                HasIndex = true,
                HasMenu = true,
            });
            foreach (var folder in folders)
            {
                var key = folder.Replace(viewsFolder, "").Replace("\\", "/");
                if (breadcrumbItems.ContainsKey(key))
                {
                    continue;
                }
                var breadcrumbItem = new BreadcrumbItem();
                breadcrumbItem.Path = key.Replace("\\", "/");
                if (File.Exists(Path.Combine(folder, "Menu.cshtml")))
                {
                    breadcrumbItem.HasMenu = true;
                }
                if (File.Exists(Path.Combine(folder, "Index.cshtml")))
                {
                    breadcrumbItem.HasIndex = true;
                }
                breadcrumbItems.Add(key, breadcrumbItem);
            }
        }

        public static BreadcrumbItem GetItem(string path)
        {
            var pathSegments = path.Split('/');
            var pascalizedPathSegments = pathSegments.Select(i => i.Titleize().Pascalize()).ToList();
            var normalizedPath = string.Join('/', pascalizedPathSegments);
            if (breadcrumbItems.ContainsKey(normalizedPath))
            {
                return breadcrumbItems[normalizedPath];
            }
            return null;
        }

        public static string Translate(string pathSegment)
        {
            if (pathSegmentTranslations.ContainsKey(pathSegment))
            {
                return pathSegmentTranslations[pathSegment];
            }
            File.AppendAllLines(Path.Combine(AppContext.BaseDirectory, "NonTranslatedBreadcrumPathSegments.txt"), new List<string> { pathSegment });
            return pathSegment;
        }
    }
}
