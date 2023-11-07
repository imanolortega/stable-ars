"use client";
import React, { useState } from "react";
import styles from "../../app/page.module.scss";
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

  return (
    <>
      <select
        style={{
          padding: "0.3rem",
          background: "transparent",
          borderRadius: "0.3rem",
        }}
        value={selectedExchange}
        onChange={(e) => setSelectedExchange(e.target.value)}
      >
        {data.map((exchange: any) => (
          <option key={exchange.name} value={exchange.name}>
            {exchange.name}
          </option>
        ))}
      </select>
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
