import '../styles/globals.css'
import {Analytics} from "@vercel/analytics/react";
import MaintenanceBanner from "../components/MaintenanceBanner";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // const shouldDisplayMaintenanceBanner = router.pathname === '/of';

  return <>
    {/*{shouldDisplayMaintenanceBanner && <MaintenanceBanner />}*/}
    <Component {...pageProps} />
    <Analytics />
    </>
}

export default MyApp
