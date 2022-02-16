using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoinTrader.Data
{
    public class CoinTraderSettings : ICoinTraderSettings
    {
        public string CoinTreePricesUrl { get; set; }
    }
}
