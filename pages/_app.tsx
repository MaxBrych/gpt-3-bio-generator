import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { Nunito } from "@next/font/google";
import { Merriweather } from "@next/font/google";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;
