namespace CoinTrader.Shared
{
    public interface IUserPreferencesService
    {
        public void SetPreferredCoin(CoinType coinType);

        public CoinType GetPreferredCoin();
    }
}