// layout.js (No "use client", server component)
import localFont from "next/font/local";
import "./globals.css";
import Providers from "../../providers/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers> {/* Move providers here */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
