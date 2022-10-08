import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World</h1>
        <Link href="/about">
          <a>Go to platform about</a>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
