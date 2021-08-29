import Document, { Head, Html, NextScript, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Godwin - Portofolio</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <meta
            name="Godwin Ebikwo | Front end developer"
            content="Godwin Ebikwo"
          ></meta>
          <meta property="og:locale" content="en_GB" />
          <meta
            name="keywords"
            content="Godwin Ebikwo, Front-end deceloper, JavaScript, JAMStack, Nextjs Framer motion, React "
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
