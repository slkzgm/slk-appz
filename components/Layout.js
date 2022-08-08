import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import {
  createTheme,
  CssBaseline,
  Divider,
  ThemeProvider, Typography,
  useMediaQuery
} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";

export default function Layout({ children, home, metaTags }) {
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

  if (!metaTags || !metaTags.name)
    metaTags = {name: 'SlKzᵍᵐ'};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={metaTags?.description}/>
          <meta name="og:image" content={metaTags?.imgUrl} />
          <meta name="og:title" content={metaTags?.title} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={metaTags?.twitterSite} />
          <meta name="twitter:creator" content={metaTags?.twitterCreator} />
          <meta name="twitter:title" content={metaTags?.title} />
          <meta name="twitter:description" content={metaTags?.description} />
          <meta name="twitter:image" content={metaTags?.imgUrl} />

          <title>{metaTags?.title}</title>
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
                alt={metaTags?.name}
              />
              <h1 className={styles.heading2Xl}>{metaTags?.name}</h1>
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
                    alt={metaTags?.name}
                  />
                </a>
              </Link>
              <Typography
                variant={'h5'} color={'primary'} sx={{textAlign: 'center', margin: '.5rem'}}
              >
                {metaTags?.title}
              </Typography>
              {/*<h2 className={styles.headingLg}>*/}
              {/*  <Link href="/">*/}
              {/*    <a className={styles.colorInherit}>{metaTags?.name}</a>*/}
              {/*  </Link>*/}
              {/*</h2>*/}

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
          Built by {metaTags?.name}
        </a>
      </div>
    </ThemeProvider>
  );
}

