import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full antialiased w-full overflow-x-hidden">
      <Head />
      <body className="overflow-x-hidden no-scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
