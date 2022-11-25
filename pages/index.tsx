import Head from "next/head";
import Globe from "../src/components/Globe";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pandemic Visualization</h1>
        <div style={{ marginBottom: "30px" }} />
        {/* <span className={styles.description}>gio.js</span> */}
        {/* <Earth /> */}
        {/* <span className={styles.description}>react-globe.gl</span> */}
        <Globe />
      </main>
    </div>
  );
}
