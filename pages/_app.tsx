import * as React from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (path: string) => {
      if (typeof ga !== 'function') return
      ga('set', 'page', path)
      ga('send', 'pageview')
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
