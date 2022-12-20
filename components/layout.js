import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="data:image/jpeg;base64,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"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="data:image/jpeg;base64,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"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
