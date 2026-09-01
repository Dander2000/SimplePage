import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple Page",
  description: "Simple Page made by Dander to show example pages of his work.",
  // referrer: 'origin-when-cross-origin',
  keywords: ['SimplePage', 'Dander', 'Next', 'Website'],
  authors: [{ name: 'Dander' }, { name: 'Dander', url: 'https://github.com/Dander2000' }],
  creator: 'Dander',
  publisher: 'Dander',
  // metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    //   'es-ES': '/es-ES',
    // },
  },
  // openGraph: {
  //   title: 'Simple Page',
  //   description: 'A simple page to start your buissnes journey with Dander\'s work.',
  //   url: 'https://nextjs.org',
  //   siteName: 'Next.js',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/og.png', // Must be an absolute URL
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
  //       width: 1800,
  //       height: 1600,
  //       alt: 'My custom alt',
  //     },
  //   ],
  //   videos: [
  //     {
  //       url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   audio: [
  //     {
  //       url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
          {children}
        <Footer socialLinks={true} footerNavi={true} socialLinksPosition={"center"} copyright={"© 2026 DANDER. All rights reserved."} />
      </body>
    </html>
  );
}
