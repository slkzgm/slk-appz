import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import {
  createTheme,
  CssBaseline,
  Divider,
  ThemeProvider,
  useMediaQuery
} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const name = 'SlKzᵍᵐ';
export const siteTitle = 'SlKAppz';

export default function Layout({ children, home, meta }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#b9cc0f',
      },
      error: {
        main: '#cc220f',
      },
    },
    typography: {
      fontSize: 15,
      h5: {
        lineHeight: 1.25,
        letterSpacing: '-0.05em',
        fontWeight: 600,
        fontFamily: 'monospace',
        textTransform: 'uppercase',
        color: '#3f51b5',
      },
      h6: {
        lineHeight: 1.2,
        fontWeight: 600,
        letterSpacing: '0em',
      },
    },
  });
  console.log(meta);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Enter the SlKz space!"/>
          <meta name="og:image" content={meta?.url} />
          <meta name="og:title" content={'prout'} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@nytimes" />
          <meta name="twitter:creator" content="@SarahMaslinNir" />
          <meta name="twitter:title" content={meta?.title} />
          <meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here." />
          <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg" />
          <title>{meta?.title}</title>
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.png"
                className={styles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={styles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.png"
                    className={styles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={styles.headingLg}>
                <Link href="/">
                  <a className={styles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Beta to home</a>
            </Link>
          </div>
        )}
        <Divider>
          <Link href={"https://www.twitter.com/lstehaye"}>
            <a target={"_blank"}>
              <TwitterIcon/>
            </a>
          </Link>
          <Link href={"https://github.com/slkzgm"}>
            <a target={"_blank"}>
              <GitHubIcon/>
            </a>
          </Link>
        </Divider>
        <a className={styles.footer}
           href="https://www.twitter.com/lstehaye"
           target="_blank"
           rel="noopener noreferrer"
        >
          Built by SlKzᵍᵐ
        </a>
      </div>
    </ThemeProvider>
  );
}

export const getServerSideProps = async () => {
  let meta = null;
  await fetch('https://www.slkzgm.com/slkzappz')
    .then(response => response.json())
    .then(json => meta = json)

  return {
    props: {
      meta
    }
  }
}
