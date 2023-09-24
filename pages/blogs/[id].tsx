import { getPostData, getAllPostIds } from "@/lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  const title = postData.title + " - Vedant Grover";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="sm:px-8 mt-16 lg:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                  <a
                    type="button"
                    href="/blogs"
                    aria-label="Go back to blog articles"
                    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mg-0 xl:-top-1.5 xl:left-0 xl:mt-0"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-400 rotate-180"
                    />
                  </a>
                  <article>
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {postData.title}
                      </h1>
                      <time
                        dateTime={postData.date}
                        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                        <span className="ml-3">
                          <Date dateString={postData.date} />
                        </span>
                      </time>
                    </header>
                    <div className="mt-8 prose dark:prose-invert prose-img:mx-auto prose-img:w-full prose-img:h-auto prose-img:rounded-[36px] prose-img:object-cover prose-img:aspect-auto prose-img:select-none prose-a:no-underline prose-cyan">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: postData.contentHtml,
                        }}
                      ></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
