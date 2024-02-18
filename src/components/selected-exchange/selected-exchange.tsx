"use client";
import { useEffect, useState } from "react";
import styles from "./selected-exchange.module.scss";
import CryptoCard from "../crypto-card/crypto-card";
import { Select } from "@chakra-ui/react";

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
        <Select
          aria-label={selectedExchange}
          value={selectedExchange}
          onChange={handleSelectChange}
          variant="outline"
        >
          {data.map((exchange: any) => (
            <option key={exchange.name} value={exchange.name}>
              {exchange.name}
            </option>
          ))}
        </Select>
      </label>
      <div className={styles["center"]}>
        <div className={styles["grid"]}>
          {currencies.map((currency) => (
            <CryptoCard
              key={currency}
              currency={currency}
              ask={`${parseFloat(
                selectedExchangeData?.data[currency].ask
              ).toFixed(2)}`}
              bid={`${parseFloat(
                selectedExchangeData?.data[currency].bid
              ).toFixed(2)}`}
              spread={`${(
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
