// layout.js (No "use client", server component)
import "./globals.css";
import Providers from "../../providers/providers";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        
        <meta
          name="google-site-verification"
          content="TV97-a-OPQSLweIpMBr3MJF2Km6HcVNTSx9nWASQtHE"
        />
     </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
