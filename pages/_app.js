import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{process.env.BRAND} - {process.env.SLOGAN}</title>
            </Head>
            <h1>Layout</h1>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp