using CoinTrader.Data;

namespace CoinTrader.Api.Services
{
    public interface ICointreeApiService
    {
        Task<CoinPriceData?> Get(CoinType coinType);
    }
}
