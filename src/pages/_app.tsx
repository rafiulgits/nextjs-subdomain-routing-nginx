import { GetServerSideProps } from "next";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return <Component {...pageProps} />;
}

export default MyApp;
