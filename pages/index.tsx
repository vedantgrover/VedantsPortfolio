import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImageChain from "@/components/image-chain";

export default function Home() {
  const calculateTimeFromBirthday = () => {
    const birthday: Date = new Date(2006, 5, 23);
    const currentDate: Date = new Date();

    const timeDifference = currentDate.getTime() - birthday.getTime();

    const milliSecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const yearDifference = timeDifference / milliSecondsPerYear;

    const roundedYears = Math.floor(yearDifference);

    return roundedYears;
  };

  let birthday = calculateTimeFromBirthday();

  return (
    <>
      <Head>
        <title>Home - Vedant Grover</title>
      </Head>

      <div className="text-black dark:text-white pt-20 px-7">
        <Link href="/">
          <Image
            src="/images/vedant.png"
            alt="Vedant's Profile Picture"
            width={200}
            height={200}
            className="transform transition-transform ease-in-out duration-500 hover:scale-110 rounded-full"
            quality={100}
            unoptimized
          />
        </Link>

        <h1 className="pt-4 text-4xl font-bold">Swimmer, Biker, Coder</h1>
        <p className="pt-4 text-sm text-black dark:text-slate-300 font-light w-2/3">
          Hey there, I&apos;m Vedant, a Seattle-based {birthday} year old with a
          knack for software development. When I&apos;m not coding, I&apos;m
          either swimming or biking. My curiosity drives me to explore new tech
          ideas and engage in discussions. I&apos;m on a mission to use
          technology to make a positive difference and achieve success.
        </p>

        <Link
          className="flex max-w-fit mt-4 rounded-full bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800"
          href="/contact"
        >
          <div className="flex justify-between items-center p-4">
            Let&apos;s Chat{" "}
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </div>
        </Link>

        <div className="flex justify-center">
          <ImageChain />
        </div>
      </div>
    </>
  );
}
