// layout.js (No "use client", server component)
import { Html, Head, Main, NextScript } from 'next/document';
import "./globals.css";
import Providers from "../../providers/providers";

export default function RootLayout({ children }) {
  return (
    <Html lang="en">
      <Head>
        {/* GTM - Container */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-S9CN7SC3T9');
            `,
          }}
        />
      </Head>
      <body>
        {/* GTM nos comentários para um fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=G-S9CN7SC3T9`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <Providers> {/* Move providers here */}
          {children}
        </Providers>
        <NextScript />
      </body>
    </Html>
  );
}
