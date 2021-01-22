import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src="https://24.media.tumblr.com/tumblr_md2qy86zYp1qmwn4mo1_500.gif"
          className={styles.pokeball}
        />

        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-1.png"
          className={styles.logo}
        />
        <a href="/all">
          <button className={styles.button}>Acessar</button>
        </a>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
