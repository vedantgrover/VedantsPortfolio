import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="h-full antialiased w-full overflow-x-hidden"
      style={{ backgroundSize: "cover" }}
    >
      <Head>
        <meta name="description" content="Vedant's Portfolio" />
        <meta name="author" content="Vedant Grover" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="overflow-x-hidden no-scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
