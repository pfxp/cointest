namespace CoinTrader.Shared
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