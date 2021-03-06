import type { AppProps } from 'next/app';
import 'styles/sass/base/_base.scss';
import 'styles/sass/base/_typography.scss';

function MyApp ( { Component, pageProps }: AppProps ) {
    return <Component { ...pageProps } />
}

export default MyApp;
