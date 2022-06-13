import Layout from "../components/Layout";
import {Typography} from "@mui/material";

export default function Home() {
  return (
    <Layout home>
        <Typography variant="h6">Welcome to my portal</Typography>
        <Typography variant="subtitle1">
          This is where you can follow the development of my projects, easily access all my applications, and why not, in the future read some of my threads!<br/>
          Every feedback and/or request is greatly appreciated, prefer twitter for a faster answer if it doesn't concern a specific project, otherwise you can use github.<br/>
          I wish you a very good tour and hope you will find these resources useful! <br/>
        </Typography>

      <a href="http://localhost:3001/mnlth">MNLTH</a>
    </Layout>
  )
}
