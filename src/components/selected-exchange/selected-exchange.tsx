"use client";
import React, { useEffect, useState } from "react";
import styles from "./selected-exchange.module.scss";
import CryptoCard from "../crypto-card/crypto-card";

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
      <label className={styles["select-wrapper"]}>
        <select
          className={styles["select-inner"]}
          value={selectedExchange}
          onChange={handleSelectChange}
        >
          {data.map((exchange: any) => (
            <option key={exchange.name} value={exchange.name}>
              {exchange.name}
            </option>
          ))}
        </select>
      </label>
      <div className={styles["center"]}>
        <div className={styles["grid"]}>
          {currencies.map((currency) => (
            <CryptoCard
              key={currency}
              currency={currency}
              ask={`Compra: $${parseFloat(
                selectedExchangeData?.data[currency].ask
              ).toFixed(2)}`}
              bid={`Venta: $${parseFloat(
                selectedExchangeData?.data[currency].bid
              ).toFixed(2)}`}
              spread={`Spread: $${(
                parseFloat(selectedExchangeData?.data[currency].ask) -
                parseFloat(selectedExchangeData?.data[currency].bid)
              ).toFixed(2)}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
