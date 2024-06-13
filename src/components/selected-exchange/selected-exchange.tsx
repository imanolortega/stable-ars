"use client";
import { useEffect, useState } from "react";
import styles from "./selected-exchange.module.scss";
import CryptoCard from "../crypto-card/crypto-card";
import Image from "next/image";

export default function SelectedExchange({
  currencies,
  data,
}: {
  currencies: string[];
  data: any;
}) {
  const [selectedExchange, setSelectedExchange] = useState(data[0]?.name);
  const selectedExchangeData = data.find(
    (exchange: any) => exchange.name === selectedExchange
  );

  useEffect(() => {
    const storedExchange = localStorage.getItem("selectedExchange");
    if (
      storedExchange &&
      data.find((exchange: any) => exchange.name === storedExchange)
    ) {
      setSelectedExchange(storedExchange);
    }
  }, [data]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedExchange = e.target.value;
    setSelectedExchange(newSelectedExchange);
    localStorage.setItem("selectedExchange", newSelectedExchange);
  };

  return (
    <>
      <div className={styles["select-header"]}>
        <label className={styles["select-wrapper"]}>
          <select
            aria-label={selectedExchange}
            value={selectedExchange}
            onChange={handleSelectChange}
          >
            {data.map((exchange: any) => (
              <option
                className={styles["option"]}
                key={exchange.name}
                value={exchange.name}
              >
                {exchange.name}
              </option>
            ))}
          </select>
        </label>
        <a
          href={selectedExchangeData.url}
          target="_blank"
          rel="noopener"
          className={styles["buy-exchange"]}
        >
          <span>Comprar y vender en {selectedExchange} </span>
          <Image
            alt={selectedExchangeData.name}
            src={`/${selectedExchangeData.exchange}.webp`}
            height={20}
            width={20}
          />
        </a>
      </div>
      <div className={styles["center"]}>
        <div className={styles["grid"]}>
          {currencies.map((currency) => (
            <CryptoCard
              key={currency}
              currency={currency}
              ask={`${parseFloat(
                selectedExchangeData?.data[currency]?.ask
              ).toFixed(2)}`}
              bid={`${parseFloat(
                selectedExchangeData?.data[currency]?.bid
              ).toFixed(2)}`}
              spread={`${(
                parseFloat(selectedExchangeData?.data[currency]?.ask) -
                parseFloat(selectedExchangeData?.data[currency]?.bid)
              ).toFixed(2)}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
