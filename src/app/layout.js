// layout.js (No "use client", server component)
import "./globals.css";
import Providers from "../../providers/providers";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        
      <meta name="google-site-verification" content="mZXGS6IKtJTMZcz3R0dUkj0xOGx_yuvXsX1WiLBV1GA" />
     </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
