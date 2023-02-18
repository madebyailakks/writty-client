import {Html, Head, Main, NextScript} from 'next/document'
import Home from "@/pages/index";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href={"https://site-assets.fontawesome.com/releases/v6.0.0/css/all.css"}/>
            </Head>
            <Home/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
