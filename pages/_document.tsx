import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" key="favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
          
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

          {/* Google Analytics */}
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID && (
            <>
              <script dangerouslySetInnerHTML={{ __html: `
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;              
                ga('create', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID}', 'auto');
                ga('send', 'pageview');
              ` }}>
              </script>
              <script async src='https://www.google-analytics.com/analytics.js'></script>
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument