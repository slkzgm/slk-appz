import {Box, Button, Divider, SvgIcon, Typography} from "@mui/material";
import Link from "next/link";
import Layout from "../components/Layout";
import {styled} from "@mui/material/styles";

function DiscordIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </SvgIcon>
  );
}

const LinkButton = styled(Button)({
  margin: '.25rem'
});

const AppBox = styled(Box)({
  margin: '.5rem',
  textAlign: 'center'
});

export default function Home() {
  return (
    <Layout home>
      <section>
        <Typography variant={'h5'} color={'primary'}>Welcome to my portal</Typography>
        <Typography variant={'body2'} paragraph={true}>
          This is where you can follow the development of my projects, easily access all my applications, and why not, in the future read some of my threads!<br/>
          Every feedback and/or request is greatly appreciated, prefer twitter for a faster answer if it doesn't concern a specific project, otherwise you can use github.<br/>
          I wish you a very good tour and hope you will find these resources useful! <br/>
        </Typography>
      </section>
      <Divider variant={"middle"}>MINTVIAL LIVE</Divider>
      <AppBox>
        <LinkButton variant={'contained'}>
          <Link href={'/mintvial'}>
            <Typography variant={'button'} fontWeight={'bold'}>
              Browse mintvial live data
            </Typography>
          </Link>
        </LinkButton>
        <Button variant={'contained'}>
          <Link href={"/api/mintvial/all"}>
            <Typography variant={'button'} fontWeight={'bold'}>
              Retrieve data from API
            </Typography>
          </Link>
        </Button>
      </AppBox>
      <Divider variant={"middle"}>MNLTH LIVE</Divider>
      <AppBox>
        <LinkButton variant={'contained'}>
          <Link href={'/mnlth'}>
            <Typography variant={'button'} fontWeight={'bold'}>
              Browse mnlth live data
            </Typography>
          </Link>
        </LinkButton>
        <Button variant={'contained'}>
          <Link href={"/api/mnlth/all"}>
            <Typography variant={'button'} fontWeight={'bold'}>
              Retrieve data from API
            </Typography>
          </Link>
        </Button>
        <LinkButton variant={'contained'} color={'secondary'} startIcon={<DiscordIcon/>}>
          <a href={"https://t.co/I9w1OgT6d5"} target={'_blank'} rel="noopener noreferrer">
            <Typography variant={'button'} fontWeight={'bold'}>
              Add the bot to your discord server
            </Typography>
          </a>
        </LinkButton>
        <LinkButton variant={'contained'} color={'error'}>
          <a href={"https://docs.google.com/spreadsheets/d/1MfLZU3EKSBlbNm1v_eSMvd1kCjMugu9wAXI4Fdvq-kE/edit?usp=sharing"} target={'_blank'} rel="noopener noreferrer">
            <Typography variant={'button'} fontWeight={'bold'}>
              GSheet MNLTH live data
            </Typography>
          </a>
        </LinkButton>
      </AppBox>
      {/*<Divider variant={"middle"}>My Threads</Divider>*/}
    </Layout>
  )
}
