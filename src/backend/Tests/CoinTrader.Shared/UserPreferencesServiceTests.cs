using Xunit;

namespace CoinTrader.Shared.Tests
{
    public class UserPreferencesServiceTests
    {
        [Fact]
        public void DefaultValue()
        {
            UserPreferencesService testItem = new UserPreferencesService();
            Assert.Equal(CoinType.BTC, testItem.GetPreferredCoin());
        }

        [Fact]
        public void SettingValue()
        {
            UserPreferencesService testItem = new UserPreferencesService();
            Assert.Equal(CoinType.BTC, testItem.GetPreferredCoin());

            testItem.SetPreferredCoin(CoinType.BTC);
            Assert.Equal(CoinType.BTC, testItem.GetPreferredCoin());

            testItem.SetPreferredCoin(CoinType.ETH);
            Assert.Equal(CoinType.ETH, testItem.GetPreferredCoin());

            testItem.SetPreferredCoin(CoinType.XRP);
            Assert.Equal(CoinType.XRP, testItem.GetPreferredCoin());
        }
    }
}