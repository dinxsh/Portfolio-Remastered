using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        public void Index()
        {
            Response.Redirect("/User/Home.aspx");
        }

        public void IsOnline(){
            try(){
                return "{status:500"
            }
            catch (Exception ex){
                return ex;
            }
            finally{
                return "status delivered";
            }
        }

        public void netspeed(){            
            return "netspeed"; 
        }
    }
}