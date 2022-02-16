using CoinTrader.Data;

namespace CoinTrader.Api.Services
{
    public class UserPreferencesService : IUserPreferencesService
    {
        public CoinType PreferredCoin { get; private set; } = CoinType.BTC;

        public void SetPreferredCoin(CoinType coinType)
        {
            PreferredCoin = coinType;
        }

        public CoinType GetPreferredCoin()
        {
            return PreferredCoin;
        }
    }
}