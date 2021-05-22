using Holism.Web;

namespace Saeed.NefcantoWeb.VueAdminPanel
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Startup.AddControllerSearchAssembly(typeof(Controllers.DefaultController).Assembly);
            Startup.AddViewSearchAssembly(typeof(Controllers.DefaultController).Assembly);
            Startup.AddControllerSearchAssembly(typeof(Holism.Mvc.GeneralController).Assembly);
            Holism.Vue.Config.ConfigureEverything();
            Holism.VuePanel.Config.ConfigureEverything();
            Startup.ServiceRegistrars.Add(Holism.Identities.PublicApi.Config.AddCustomIdentityServices);
            Startup.IdentityMiddlewareRegistrar = Holism.Identities.PublicApi.Config.ConfigureHttpPipeline;
            Application.Run();
        }
    }
}
