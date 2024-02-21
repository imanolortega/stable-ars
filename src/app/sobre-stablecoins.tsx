import { blankSpace, formatTimestampToDateTime } from "@/utils/common";
import { calculateAverages, getCryptoData } from "@/utils/crypto";
import { Inter } from "next/font/google";
import HomeSections from "@/components/home-sections/home-sections";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await getCryptoData();
  const currencies = ["dai", "usdc", "usdt"];
  const average = await calculateAverages(data);
  const lastUpdate = await formatTimestampToDateTime(data[0].data.dai.time);

  return (
    <>
      <main className={`${styles["main"]} ${inter.className}`}></main>
    </>
  );
}
