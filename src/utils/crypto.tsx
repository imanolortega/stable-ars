export async function getCryptoCurrencies() {
  const exchangeNameMapping: Record<string, string> = {
    belo: "Belo",
    buenbit: "BuenBit",
    bybit: "ByBit",
    fiwind: "FiWind",
    lemoncash: "Lemon Cash",
    letsbit: "LetsBit",
    ripio: "Ripio",
    satoshitango: "Satoshi Tango",
    tiendacrypto: "Tienda Crypto",
  };

  const exchanges = Object.keys(exchangeNameMapping);

  const stableCoins = ["dai", "usdc", "usdt"];

  const allStableCoins: Array<{
    exchange: string;
    name: string;
    data: Record<string, any>;
  }> = [];

  for (const exchange of exchanges) {
    const exchangeData: Record<string, any> = {};

    for (const coin of stableCoins) {
      const url = `https://criptoya.com/api/${exchange}/${coin}/ars/0.1`;
      const response = await fetch(url, { cache: "no-store" });
      const data = await response.json();
      exchangeData[coin] = data;
    }

    const name = exchangeNameMapping[exchange];

    allStableCoins.push({ exchange, name, data: exchangeData });
  }

  return allStableCoins;
}

interface ExchangeData {
  name: string;
  data: {
    [currency: string]: {
      ask: number;
      bid: number;
      time: number;
    };
  };
}

export function calculateAverages(data: any) {
  const stableCoins = ["dai", "usdc", "usdt"];
  const averages: Record<string, any> = {};

  for (const currency of stableCoins) {
    const askPrices: number[] = [];
    const bidPrices: number[] = [];
    const spreads: number[] = [];

    data.forEach((exchange: any) => {
      const data = exchange.data[currency];
      if (data) {
        askPrices.push(data.ask);
        bidPrices.push(data.bid);
        const spread = data.ask - data.bid;
        spreads.push(spread);
      }
    });

    const averageAskPrice =
      askPrices.reduce((total, price) => total + price, 0) / askPrices.length;
    const averageBidPrice =
      bidPrices.reduce((total, price) => total + price, 0) / bidPrices.length;
    const averageSpread =
      spreads.reduce((total, spread) => total + spread, 0) / spreads.length;

    averages[currency] = {
      averageAskPrice: parseFloat(averageAskPrice.toFixed(2)),
      averageBidPrice: parseFloat(averageBidPrice.toFixed(2)),
      averageSpread: parseFloat(averageSpread.toFixed(2)),
    };
  }

  return averages;
}

export const findBestAskPrice = (
  data: ExchangeData[],
  currency: string
): { exchange: string; value: number } | null => {
  let bestAskPrice = null;
  let bestAskValue = Infinity;

  data.forEach((exchange) => {
    if (exchange.data[currency]) {
      const exchangeData = exchange.data[currency];
      if (exchangeData.ask < bestAskValue) {
        bestAskValue = exchangeData.ask;
        bestAskPrice = {
          exchange: exchange.name,
          value: parseFloat(exchangeData.ask.toFixed(2)),
        };
      }
    }
  });

  return bestAskPrice;
};

export const findBestBidPrice = (
  data: ExchangeData[],
  currency: string
): { exchange: string; value: number } | null => {
  let bestBidPrice = null;
  let bestBidValue = 0;

  data.forEach((exchange) => {
    if (exchange.data[currency]) {
      const exchangeData = exchange.data[currency];
      if (exchangeData.bid > bestBidValue) {
        bestBidValue = exchangeData.bid;
        bestBidPrice = {
          exchange: exchange.name,
          value: parseFloat(exchangeData.bid.toFixed(2)),
        };
      }
    }
  });

  return bestBidPrice;
};

export const findLowestSpread = (
  data: ExchangeData[],
  currency: string
): { exchange: string; value: number } | null => {
  let lowestSpread = null;
  let lowestSpreadValue = Infinity;

  data.forEach((exchange) => {
    if (exchange.data[currency]) {
      const exchangeData = exchange.data[currency];
      const spread = exchangeData.ask - exchangeData.bid;
      if (spread < lowestSpreadValue) {
        lowestSpreadValue = spread;
        lowestSpread = {
          exchange: exchange.name,
          value: parseFloat(spread.toFixed(2)),
        };
      }
    }
  });

  return lowestSpread;
};
