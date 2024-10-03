// layout.js (No "use client", server component)
import "./globals.css";
import Providers from "../../providers/providers";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        
        <meta
          name="google-site-verification"
          content="TV97-a-OPQSLweIpMBr3MJF2Km6HcVNTSx9nWASQtHE"
        />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
