import Head from 'next/head';
import '../styles/all.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{process.env.BRAND} - {process.env.SLOGAN}</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp