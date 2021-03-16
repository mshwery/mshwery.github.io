import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Shwery – Software Engineering, JavaScript and design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! I'm Matt Shwery, a full-stack software engineer.
        </h1>

        <div className={styles.links}>
          <a className={styles.link} href="https://github.com/mshwery">GitHub</a>
          <a className={styles.link} href="https://twitter.com/mshwery">Twitter</a>
          <a className={styles.link} href="https://www.linkedin.com/in/mshwery/">LinkedIn</a>
        </div>
      </main>
    </div>
  )
}
