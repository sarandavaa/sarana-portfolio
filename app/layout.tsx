import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./theme.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Sarana Davaa — Portfolio",
  description:
    "Sarana Davaa, a product designer based in San Francisco — selected UX/product design case studies.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="site-body">
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EPKV9R64ZT"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('set', 'developer_id.dZGVlNj', true);
            gtag('js', new Date());
            gtag('config', 'G-EPKV9R64ZT');
          `}
        </Script>
      </body>
    </html>
  );
}
