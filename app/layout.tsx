import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, Inter, Instrument_Sans } from "next/font/google";
import "./styles/globals.css";
import "./styles/theme.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: "600",
  style: ["normal", "italic"],
  variable: "--font-instrument-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
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
      className={`${instrumentSans.variable} ${inter.variable} ${ibmPlexMono.variable}`}
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
