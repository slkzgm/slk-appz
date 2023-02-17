import '../styles/globals.css'
import {Analytics} from "@vercel/analytics/dist/react";

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Analytics />
    </>
}

export default MyApp
