using CoinTrader.Data;

namespace CoinTrader.Api.Services
{
    public interface IUserPreferencesService
    {
        public void SetPreferredCoin(CoinType coinType);
        public CoinType GetPreferredCoin();
    }
}
