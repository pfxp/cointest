using CoinTrader.Api.Services;
using CoinTrader.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Coin.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TradingController : ControllerBase
    {
        private readonly ILogger<TradingController> _logger;
        private readonly IUserPreferencesService _userPreferencesService;
        private readonly ICoinTraderSettings _coinTraderSettings;

        public TradingController(ILogger<TradingController> logger,
            IUserPreferencesService userPreferencesService,
            IOptions<CoinTraderSettings> coinTraderSettings)
        {
            _logger = logger;
            _userPreferencesService = userPreferencesService;
            _coinTraderSettings = coinTraderSettings.Value;
        }

        [HttpGet("price")]
        public ActionResult<CoinPriceData> GetPrice()
        {
            return new CoinPriceData
            {
                Ask = 61839.005295564M,
                Bid = 60466.24414116M,
                Buy = _userPreferencesService.GetPreferredCoin(),
                Rate = 0.00001617M,
                SpotRate = 61152.624718362M,
                TimestampUtc = DateTime.UtcNow
            };
        }

        [HttpPost("preferred-coin/{coinType}")]
        public ActionResult SetPreferredCoin(CoinType coinType)
        {
            _userPreferencesService.SetPreferredCoin(coinType);
            return Ok($"Preferred coin set to {coinType}.");
        }
    }
}