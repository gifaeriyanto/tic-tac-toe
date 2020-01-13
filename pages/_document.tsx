// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = flush();
    return { ...initialProps, styles };
  }

  render() {
    return (
      <Html lang="id">
        <Head>
          <meta title="Tic Tac Toe" />
          <meta name="description" content="Tic Tac Toe game" />
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
