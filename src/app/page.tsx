import { calculateAverages, getCryptoData } from "@/utils/crypto";
import HomeSections from "@/components/home-sections/home-sections";

export default async function Home() {
  const data = await getCryptoData();
  const currencies = ["dai", "usdc", "usdt"];
  const average = await calculateAverages(data);

  return <HomeSections average={average} currencies={currencies} data={data} />;
}
