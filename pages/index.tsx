import Head from 'next/head'
import Link from '../components/Link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Shwery – Software Engineering, JavaScript and design</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! I'm Matt Shwery, a full-stack software engineer.
        </h1>

        <div className={styles.links}>
          <Link className={styles.link} href="https://github.com/mshwery">GitHub</Link>
          <Link className={styles.link} href="https://twitter.com/mshwery">Twitter</Link>
          <Link className={styles.link} href="https://www.linkedin.com/in/mshwery/">LinkedIn</Link>
          <Link className={styles.link} href="/brew-ratio">Brew Ratio</Link>
          <Link className={styles.link} href="https://www.getminimalist.com/">Minimalist</Link>
        </div>
      </main>
    </div>
  )
}
