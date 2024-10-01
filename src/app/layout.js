// layout.js (No "use client", server component)
import "./globals.css";
import Providers from "../../providers/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
