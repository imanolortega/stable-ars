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
      const response = await fetch(url, {
        next: { revalidate: 60 },
      });
      const data = await response.json();
      exchangeData[coin] = data;
    }

    const name = exchangeNameMapping[exchange];

    allStableCoins.push({ exchange, name, data: exchangeData });
  }

  return allStableCoins;
}
