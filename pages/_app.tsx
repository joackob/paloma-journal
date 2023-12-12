import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Theme from "@/src/theme/Theme";
import Layout from "@/src/layout/Layout";
import { Fragment } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Paloma Studio</title>

        <link rel="site.webmanifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3f50b5" />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="site.webmanifest" href="/site.webmanifest"></link>
      </Head>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Fragment>
  );
}
