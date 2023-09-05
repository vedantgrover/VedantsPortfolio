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
            width={250}
            height={250}
            className="rounded-full"
            quality={100}
            unoptimized
          />
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pt-3">
          Swimmer, Biker, Engineer
        </h1>
        <p className="mt-6 text-[18px] text-zinc-600 dark:text-zinc-400 w-2/3">
          Hey there, I&apos;m Vedant, a Seattle-based {birthday} year old with a
          knack for software development. When I&apos;m not coding, I&apos;m
          either swimming or biking. My curiosity drives me to explore new tech
          ideas and engage in discussions. I&apos;m on a mission to use
          technology to make a positive difference and achieve success.
        </p>

        <Link
          className="transition ease-in-out duration-300 flex max-w-fit mt-4 rounded-full bg-cyan-600 hover:bg-cyan-700 hover:scale-110 active:bg-cyan-800 active:scale-90"
          href="/contact"
        >
          <div className="flex justify-between items-center p-6 text-xl">
            Let&apos;s Chat
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
