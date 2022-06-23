import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import {createTheme, Divider, ThemeProvider} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const name = 'SlKzᵍᵐ';
export const siteTitle = 'SlKAppz';

const theme = createTheme({
  palette: {
    type: 'light',
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

export default function Layout({ children, home }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Enter the SlKz space!"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{siteTitle}</title>
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
              <a>← Back to home</a>
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
