using CoinTrader.Api.Services;
using CoinTrader.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Coin.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TradingController : ControllerBase
    {
        private readonly ILogger<TradingController> _logger;
        private readonly IUserPreferencesService _userPreferencesService;
        private readonly ICoinTraderSettings _coinTraderSettings;
        private readonly ICointreeApiService _cointreeApiService;

        public TradingController(ILogger<TradingController> logger,
            IUserPreferencesService userPreferencesService,
            IOptions<CoinTraderSettings> coinTraderSettings,
            ICointreeApiService cointreeApiService)
        {
            _logger = logger;
            _userPreferencesService = userPreferencesService;
            _coinTraderSettings = coinTraderSettings.Value;
            _cointreeApiService = cointreeApiService;
        }

        // TODO Handle errors Peter!
        [HttpGet("price")]
        public async Task<CoinPriceData?> GetPrice()
        {
            return await _cointreeApiService.Get(_userPreferencesService.GetPreferredCoin());
        }

        [HttpPost("preferred-coin/{coinType}")]
        public ActionResult SetPreferredCoin(CoinType coinType)
        {
            _userPreferencesService.SetPreferredCoin(coinType);
            return Ok($"Preferred coin set to {coinType}.");
        }
    }
}