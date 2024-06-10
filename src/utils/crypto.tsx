export async function getCryptoCurrencies() {
  interface Exchange {
    name: string;
    url: string;
  }

  const exchangeNameMapping: Record<string, Exchange> = {
    belo: { name: "Belo", url: "https://www.belo.app/" },
    buenbit: { name: "BuenBit", url: "https://buenbit.com/" },
    bybit: { name: "ByBit", url: "https://www.bybit.com/" },
    fiwind: { name: "FiWind", url: "https://www.fiwind.io/" },
    lemoncash: { name: "Lemon Cash", url: "https://www.lemon.me/" },
    letsbit: { name: "LetsBit", url: "https://letsbit.io/" },
    ripio: { name: "Ripio", url: "https://www.ripio.com/" },
    satoshitango: {
      name: "Satoshi Tango",
      url: "https://www.satoshitango.com/",
    },
    tiendacrypto: { name: "Tienda Crypto", url: "https://tiendacrypto.com/" },
  };

  const exchanges = Object.keys(exchangeNameMapping);

  const stableCoins = ["dai", "usdc", "usdt"];

  const allStableCoins: Array<{
    exchange: string;
    name: string;
    url: string;
    data: Record<string, any>;
  }> = [];

  for (const exchange of exchanges) {
    const exchangeData: Record<string, any> = {};

    for (const coin of stableCoins) {
      const url = `https://criptoya.com/api/${exchange}/${coin}/ars/0.5`;
      try {
        const response = await fetch(url, {
          cache: "no-store",
        });
        if (response.ok) {
          const data = await response.json();
          exchangeData[coin] = data;
        } else {
          console.error(`Failed to fetch data for ${exchange} - ${coin}`);
        }
      } catch (err) {
        console.error(`Error fetching data for ${exchange} - ${coin}: ${err}`);
      }
    }

    const { name, url } = exchangeNameMapping[exchange];
    allStableCoins.push({ exchange, name, url, data: exchangeData });
  }

  return allStableCoins;
}

export async function getCryptoData() {
  try {
    const res = await fetch(`${process.env.API_URL}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
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

    data?.forEach((exchange: any) => {
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

  data?.forEach((exchange) => {
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

  data?.forEach((exchange) => {
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

  data?.forEach((exchange) => {
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
