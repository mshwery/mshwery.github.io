import * as React from 'react'
import Head from 'next/head'
import { Coffee } from 'react-feather'
import BrewRatioCalculator from '../components/BrewRatioCalculator'
import Link from '../components/Link'
import styles from '../styles/BrewRatio.module.css'

function BrewRatio() {
  return (
    <>
      <Head>
        <title>Brew Ratio</title>
        <link rel="icon" href="/brew-ratio/favicon.ico" key="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/brew-ratio/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/brew-ratio/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/brew-ratio/favicon-16x16.png" />
        <link rel="manifest" href="/brew-ratio/site.webmanifest" />
        <link rel="mask-icon" href="/brew-ratio/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mshwery" />
        <meta name="twitter:creator" content="@mshwery" />
        <meta name="twitter:image" content="https://www.mattshwery.com/brew-ratio/brew-ratio-preview.png" />
        <meta property="og:url" content="https://www.mattshwery.com/brew-ratio/" />
        <meta property="og:title" content="Brew Ratio" />
        <meta property="og:description" content="A simple coffee calculator to help you make the best cup of coffee with the tools you have." />
        <meta property="og:image" content="https://www.mattshwery.com/brew-ratio/brew-ratio-preview.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.page}>
          <div className={styles.pageIntro}>
            <header className={styles.pageHeader}>
              <Coffee size={38} />
              <h1 className={styles.pageTitle}>
                Brew Ratio
              </h1>
            </header>
            <p className={styles.description}>
              Calculate the beans or water you need to make a good cup of coffee.
            </p>
            <p>
              A tiny utility made by{' '}
              <Link className={styles.link} href="/">Matt Shwery</Link>
            </p>
          </div>
          <BrewRatioCalculator />
        </div>
      </main>
    </>
  )
}

export default BrewRatio