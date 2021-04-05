import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Siempre en Casa - challenge</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Link href="/products">
                <a>Ir a Productos</a>
            </Link>

            <style jsx>{`
                a {
                    display: flex;
                    justify-content: center;
                    margin-top: 30vh;
                }
            `}</style>
        </>
    );
}
