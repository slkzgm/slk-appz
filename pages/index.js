import {Divider, Typography} from "@mui/material";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout home>
      <section>
        <Typography variant="h6">Welcome to my portal</Typography>
        <Typography variant="subtitle1">
          This is where you can follow the development of my projects, easily access all my applications, and why not, in the future read some of my threads!<br/>
          Every feedback and/or request is greatly appreciated, prefer twitter for a faster answer if it doesn't concern a specific project, otherwise you can use github.<br/>
          I wish you a very good tour and hope you will find these resources useful! <br/>
        </Typography>
      </section>
      <Divider variant={"middle"}>MNLTH LIVE</Divider>
      <section className={styles.section}>
        <Link href={"/mnlth"}>
          <a>
            <Typography variant={"h6"} textAlign={"center"} className={styles.typoLink}>
              Browse mnlth live data from this app
            </Typography>
          </a>
        </Link>
        <Link href={"/api/mnlth/floor"}>
          <a>
            <Typography variant={"h6"} textAlign={"center"} className={styles.typoLink}>
              Retrieve mnlth live data from the API
            </Typography>
          </a>
        </Link>
        <Link href={"https://t.co/I9w1OgT6d5"}>
          <a target={"_blank"}>
            <Typography variant={"h6"} textAlign={"center"} className={styles.typoLink}>
              Add the bot to your discord server!
            </Typography>
          </a>
        </Link>
      </section>
      {/*<Divider variant={"middle"}>My Threads</Divider>*/}
    </Layout>
  )
}
