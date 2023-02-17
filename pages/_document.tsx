import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Nunito"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="KI Tools für den Nordkurier." />
          <meta property="og:site_name" content="nk-ki.com" />
          <meta
            property="og:description"
            content="Verschiedene KI Tools für den Nordkurier"
          />
          <meta property="og:title" content="NK KI Assistent" />
          <meta name="nordkurier:card" content="summary_large_image" />
          <meta name="nordkurier:title" content="NK KI Assistent" />
          <meta
            name="nordkurier:description"
            content="Generate your next Twitter bio in seconds."
          />
          <meta
            property="og:image"
            content="https://nordkurier.com/og-image.png"
          />
          <meta
            name="nordkurier:image"
            content="https://nordkurier.com/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
