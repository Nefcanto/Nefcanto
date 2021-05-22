using Holism.Web;

namespace Saeed.NefcantoWeb.AdminPanel
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Startup.AddControllerSearchAssembly(typeof(Controllers.DefaultController).Assembly);
            Startup.AddViewSearchAssembly(typeof(Controllers.DefaultController).Assembly);
            Holism.AdminPanel.Config.ConfigureEverything();
            Holism.Web.Startup.ServiceRegistrars.Add(Holism.Identities.PublicApi.Config.AddCustomIdentityServices);
            Holism.Web.Startup.IdentityMiddlewareRegistrar = Holism.Identities.PublicApi.Config.ConfigureHttpPipeline;
            Holism.Identities.PublicApi.Config.Role = "Admin";
            Holism.Identities.PublicApi.Config.ConfigureEverything();
            Holism.IdentitiesWeb.AdminPanel.Config.ConfigureEverything();

            Data.QuranWeb.AdminPanel.Config.ConfigureEverything();
            Application.Run();
        }
    }
}
