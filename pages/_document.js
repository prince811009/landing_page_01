import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="uk-background-white dark:uk-background-gray-100 dark:uk-text-gray-20">
            <Head>
                <title>Nerko - NFT Portfolio Landing Template</title>
                <meta name="author" content="reacthemes" />
                <meta name="description" content="Nerko is an NFT Portfolio and Landing React NextJs template that can be used to build your own NFT Portfolio page. A best-designed NFT blockchain, crypto, crypto art, digital, and many more purpose React NextJs Template." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="uni-body">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
