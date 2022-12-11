import { Analytics } from '@vercel/analytics/react';
import { Roboto } from "@next/font/google";
import "normalize.css/normalize.css";
import "../styles/global.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["spanish"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
