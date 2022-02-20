using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

namespace CoinTrader.Shared.Tests
{
    public class CointreeApiServiceTests
    {
        [Fact]
        public async Task Fetch()
        {
            var httpClient = new HttpClient();
            var testItem = new CointreeApiService(httpClient);
            CoinPriceData? result = await testItem.Get(CoinType.BTC);
            Assert.NotNull(result);
        }
    }
}