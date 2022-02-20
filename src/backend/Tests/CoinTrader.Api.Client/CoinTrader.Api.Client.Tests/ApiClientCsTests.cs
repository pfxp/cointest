using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

namespace CoinTrader.Api.Client.Tests
{
    public class ApiClientCsTests
    {
        // TODO Make configurable
        private const string BASE_URL = "https://localhost:7134";

        [Fact]
        public async Task SetPreferredCoin()
        {
            HttpClient httpClient = new HttpClient();
            CoinTraderApiClient client = new CoinTraderApiClient(BASE_URL, httpClient);

            await client.PreferredCoinAsync(CoinType.ETH);
            CoinPriceData priceData2 = await client.PriceAsync();
            Assert.Equal(CoinType.ETH, priceData2.Buy);

            await client.PreferredCoinAsync(CoinType.XRP);
            CoinPriceData priceData3 = await client.PriceAsync();
            Assert.Equal(CoinType.XRP, priceData3.Buy);

            await client.PreferredCoinAsync(CoinType.BTC);
            CoinPriceData priceData4 = await client.PriceAsync();
            Assert.Equal(CoinType.BTC, priceData4.Buy);
        }
    }
}