using Newtonsoft.Json;

namespace CoinTrader.Shared
{
    public class CointreeApiService : ICointreeApiService
    {
        private const string DEFAULT_BASE_ADDRESS = "https://trade.cointree.com/api/prices/aud";
        private HttpClient _httpClient;

        public CointreeApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<CoinPriceData?> Get(CoinType coinType)
        {
            var baseAddress = _httpClient.BaseAddress?.ToString() ?? DEFAULT_BASE_ADDRESS;
            var response = await _httpClient.GetAsync($"{baseAddress}/{coinType}");
            var contentAsString = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<CoinPriceData>(contentAsString);
        }
    }
}