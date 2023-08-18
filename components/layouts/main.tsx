import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Main({ children }: any) {
  return (
    <div className="py-4 px-20 bg-cream dark:bg-darkModeGray min-h-screen">
      <Head>
        <meta name="description" content="Vedant's Portfolio" />
        <meta name="author" content="Vedant Grover" />
        <meta name="viewport" content="width=device-width, initial-scale=1;" />
      </Head>

      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
