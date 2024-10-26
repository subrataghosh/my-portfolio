import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subrata Ghosh",
  description: "Subrata Ghosh, a skilled Full Stack Developer specializing in building efficient and user-friendly web applications. Learn more about Subrata's projects, skills, and expertise in modern web development.",
  keywords: "Subrata Ghosh, Full Stack Developer, Software Engineer, Web Development, Front-end Development, Back-end Development, JavaScript, React, Node.js, MongoDB",
  openGraph: {
    title: "Subrata Ghosh",
    description: "Subrata Ghosh, a skilled Full Stack Developer specializing in building efficient and user-friendly web applications. Learn more about Subrata's projects, skills, and expertise in modern web development.",
    url: "https://www.subrataghosh.in",
    siteName: "Subrata Ghosh",
    type: "website",
    images: [
      {
        url: "https://www.subrataghosh.in/imgs/subrata-ghosh.png", 
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

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Subrata Ghosh",
        "telephone": "+918420982123",
        "url": "https://www.subrataghosh.in",
        "image": "https://www.subrataghosh.in/imgs/subrata-ghosh.png",
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
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressLocality": "Kolkata",
          "addressRegion": "WB"
        }
    };

    const jsonLdData1 = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Subrata Ghosh",
        "url": "https://www.subrataghosh.in"
    };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData1) }}
        />
      </head>
       
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
