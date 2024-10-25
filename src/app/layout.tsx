import type { Metadata } from "next";
import  Script  from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subrata Ghosh",
  description: "'Developer | Senior Software Engineer | Technology Enthusiast'",
  openGraph: {
    title: "Subrata Ghosh",
    description: "'Developer | Senior Software Engineer | Technology Enthusiast'",
    url: "https://www.subrataghosh.in",
    siteName: "Subrata Ghosh",
    type: "website",
    images: [
      {
        url: "https://www.subrataghosh.in/subrata-ghosh.png", 
        width: 800,
        height: 600,
        alt: "Subrata Ghosh"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
       </Head>
       <Script
          type="application/ld+json"
          id="json-ld"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Subrata Ghosh",
                "url": "https://www.subrataghosh.in",
                "image": "https://www.subrataghosh.in/subrata-ghosh.png",
                "jobTitle": "Full Stack Web Application Developer",
                "description": "Subrata Ghosh is a Full Stack Developer with expertise in building efficient and user-friendly web applications.",
                "worksFor": {
                  "@type": "Organization",
                  "name": "TwoPiRadian Infotech Pvt Ltd"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/subrata-ghosh-90465695",
                  "https://github.com/subrataghosh",
                  "https://www.facebook.com/share/127C5VyWhNH"
                ],
                "knowsAbout": [
                  "Web Development",
                  "Front-end Development",
                  "Back-end Development",
                  "Full Stack Developer",
                  "Java",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "MongoDB",
                  "SQL"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "mailto:subrata.ghosh.ece@gmail.com",
                  "contactType": "Customer Support",
                  "areaServed": "Worldwide",
                  "availableLanguage": ["English"]
                }
              })
          }}
        />
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
