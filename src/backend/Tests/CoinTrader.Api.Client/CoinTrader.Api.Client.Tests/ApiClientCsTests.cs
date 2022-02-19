using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

namespace CoinTrader.Api.Client.Tests
{
    public class ApiClientCsTests
    {
        private const string BASE_URL = "https://localhost:7134";

        [Fact]
        public async Task Client()
        {
            HttpClient httpClient = new HttpClient();
            CoinTraderApiClient client = new CoinTraderApiClient(BASE_URL, httpClient);
            CoinPriceData priceData = await client.PriceAsync();
            Assert.Equal(CoinType._0, priceData.Buy);

            await client.PreferredCoinAsync(CoinType._1);
            CoinPriceData priceData2 = await client.PriceAsync();
            Assert.Equal(CoinType._1, priceData2.Buy);
        }
    }
}