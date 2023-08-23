import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Main({ children }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="py-4 px-20 bg-white dark:bg-darkModeGray min-h-screen">
        <Navbar />

        <div>{children}</div>

        <Footer />
      </div>
    </>
  );
}
