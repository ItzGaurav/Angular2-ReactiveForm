using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProductWebServiceApi.Controllers
{
    public class ProductController : ApiController
    {

        public IEnumerable<Product> Get()
        {
            using (APMEntities entity = new APMEntities())
            {
                return entity.Products.ToList();
            }
        }

        public Product Get(int id)
        {
            using (APMEntities entity = new APMEntities())
            {
                return entity.Products.FirstOrDefault(x=>x.productID== id);
            }
        } 
    }
}
