import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>غرفه نمایشگاهی فرشته آهنج</title>
        <meta
          name="description"
          content="غرفه ساز نمایشگاهی و طراجحی غرفه های نمایشگاهی با انواع خدمات غرفه  "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>سفارش غرفه نمایشگاه</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.flexCenter}>
          <h2 className={styles.subtitle}>طراحی غرفه نمایشگاه</h2>
          <h2 className={styles.subtitle}>ساخت غرفه نمایشگاه</h2>
        </div>
        <div className={styles.flexCenter}>
          <h3 className={styles.description}>
            جهت سفارش طراحی یا اجرای غرفه نمایشگاهی{" "}
          </h3>
          <a href="mailto:Fereshteahanj@gmail.com" className={styles.code}>
            Fereshteahanj@gmail.com
          </a>
          <a href="tel:09376541563" className={styles.code}>
            09376541563
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} تمامی حقوق محفوظ</span>
      </footer>
    </>
  );
}
