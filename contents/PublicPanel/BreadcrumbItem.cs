using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Saeed.NefcantoWeb.PublicPanel
{
    public class BreadcrumbItem
    {
        public string Path { get; set; }

        public bool HasMenu { get; set; }

        public bool HasIndex { get; set; }
    }
}
