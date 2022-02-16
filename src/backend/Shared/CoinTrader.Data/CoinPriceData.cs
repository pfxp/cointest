﻿namespace CoinTrader.Data
{
    public class CoinPriceData
    {
        public CoinType Buy { get; set; }
        public decimal Ask { get; set; }
        public decimal Bid { get; set; }
        public decimal Rate { get; set; }
        public decimal SpotRate { get; set; }
        public DateTime TimestampUtc { get; set; }
    }
}