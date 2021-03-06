import Docunent, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocunent extends Docunent {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.svg" type="image/svg" />

                    {/* Fonte do Google  */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}