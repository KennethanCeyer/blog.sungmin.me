import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const AppContainer = styled.main();

const title = "Intro: - blog.sungmin.me";
const description = "Thoughts of a machine learning engineer - blog.sungmin.me";

export const metadata = {
  title,
  description,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppContainer className={plusJakartaSans.className}>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            name="viewport"
            content="width=1400, initial-scale=1.0, user-scalable=yes"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}
