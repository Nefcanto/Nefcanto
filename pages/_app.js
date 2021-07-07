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

/*

quran => 2 hours
coding => 4 hours
migration => 1 hour
science => 2 hours


last sections
transfer => sultanimmubin => path => quran and science
professor dave => calculus => 3 done

*/