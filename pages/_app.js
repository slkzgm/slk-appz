import '../styles/globals.css'
import {Analytics} from "@vercel/analytics/react";
import MaintenanceBanner from "../components/MaintenanceBanner";

function MyApp({ Component, pageProps }) {
  return <>
    <MaintenanceBanner />
    <Component {...pageProps} />
    <Analytics />
    </>
}

export default MyApp
