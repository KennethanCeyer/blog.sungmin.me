import GlobalStyles from "@/styles/GlobalStyles";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <GlobalStyles />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
