namespace CoinTrader.Shared
{
    public interface ICointreeApiService
    {
        Task<CoinPriceData?> Get(CoinType coinType);
    }
}