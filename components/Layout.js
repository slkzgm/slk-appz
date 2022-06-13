import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

const name = 'SlKzᵍᵐ';
export const siteTitle = 'SlKAppz';

export default function Layout({ children, home }) {
  return (
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

      <footer className={styles.footer}>
        <a
          href="http://localhost:3001/mnlth"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by SlKzᵍᵐ
        </a>
      </footer>
    </div>
  );
}
