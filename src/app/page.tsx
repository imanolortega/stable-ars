import styles from './page.module.css';
import moment from 'moment';
import { getCryptoCurrencies } from '@/utils/crypto';
import CryptoCard from './crypto-card/crypto-card';

export default async function Home() {
  const data = await getCryptoCurrencies();

  return (
    <main className={styles.main}>
      {data.map((exchange) => (
        <section key={exchange.name}>
          <div className={styles.header}>
            <h2>{exchange.name}</h2>
          </div>
          <div className={styles.center}>
            <div className={styles.grid}>
              {Object.entries(exchange.data).map(([currency, exchangeData]) => (
                <CryptoCard key={currency} currency={currency} exchangeData={exchangeData} />
              ))}
            </div>
          </div>
          <div className={styles.footer}>
            <p>Última actualización: {moment.unix(exchange.data.usdc.time).format('DD/MM/YYYY, HH:mm')}</p>
          </div>
        </section>
      ))}
    </main>
  );
}
