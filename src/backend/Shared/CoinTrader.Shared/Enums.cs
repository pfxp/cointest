using System.ComponentModel.DataAnnotations;

namespace CoinTrader.Shared
{
    public enum CoinType
    {
        [Display(Name = "Bitcoin")]
        BTC,

        [Display(Name = "Ethereum")]
        ETH,

        [Display(Name = "XRP Ledger")]
        XRP
    }
}