using Holism.Api;

namespace Saeed.NefcantoWeb.PublicPanel
{
    public class Program
    {
        /*
         * quran => 2 hours
         * coding => 4 hours
         * migration => 1 hour
         * science => 2 hours
         */

        /*
         * last sections
         * transfer => sultanimmubin => path => quran and science
         * professor dave => calculus => 3 done
         */

        public static void Main(string[] args)
        {
            Startup.AddControllerSearchAssembly(typeof(Controllers.DefaultController).Assembly);
            // Startup.AddViewSearchAssembly(typeof(Controllers.DefaultController).Assembly);
            Startup.AddControllerSearchAssembly(typeof(Holism.Api.Controllers.GeneralController).Assembly);
            // Holism.Jquery.Config.ConfigureEverything();
            Application.Run();
        }
    }
}
