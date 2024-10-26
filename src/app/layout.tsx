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
  description: "Subrata Ghosh, a skilled Full Stack Web Application Developer with expertise in crafting dynamic, responsive, and user-friendly web applications. With proficiency in both front-end and back-end technologies, including HTML, CSS, JavaScript, and popular frameworks, Subrata creates innovative digital solutions that bridge functionality with aesthetics. Discover more about Subrata’s journey, technical expertise, and passion for web development in the About Me section, view recent projects, and learn how Subrata can help bring your web application ideas to life. Connect directly through the Contact Me page to collaborate on your next digital project. Whether you’re a business looking to enhance your online presence or a team in need of development support, Subrata Ghosh’s experience in full stack development is here to help. Let’s create something amazing together!",
  keywords: ["Subrata Ghosh", 
    "Full Stack Developer", 
    "Software Engineer", 
    "Web Development", 
    "Front-end Development", 
    "Back-end Development", 
    "JavaScript", 
    "React", 
    "Node.js", 
    "MongoDB"
  ],
  openGraph: {
    title: "Subrata Ghosh",
    description: "Subrata Ghosh, a skilled Full Stack Web Application Developer with expertise in crafting dynamic, responsive, and user-friendly web applications. With proficiency in both front-end and back-end technologies, including HTML, CSS, JavaScript, and popular frameworks, Subrata creates innovative digital solutions that bridge functionality with aesthetics. Discover more about Subrata’s journey, technical expertise, and passion for web development in the About Me section, view recent projects, and learn how Subrata can help bring your web application ideas to life. Connect directly through the Contact Me page to collaborate on your next digital project. Whether you’re a business looking to enhance your online presence or a team in need of development support, Subrata Ghosh’s experience in full stack development is here to help. Let’s create something amazing together!",
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
        "@type": "Article",
        "headline": "Subrata Ghosh",
        "telephone": "+918420982123",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.subrataghosh.in/about/"
        },
        "url": "https://www.subrataghosh.in",
        "image": "https://www.subrataghosh.in/imgs/subrata-ghosh.png",
        "jobTitle": "Full Stack Web Application Developer",
        "description": "Subrata Ghosh, a skilled Full Stack Web Application Developer with expertise in crafting dynamic, responsive, and user-friendly web applications. With proficiency in both front-end and back-end technologies, including HTML, CSS, JavaScript, and popular frameworks, Subrata creates innovative digital solutions that bridge functionality with aesthetics. Discover more about Subrata’s journey, technical expertise, and passion for web development in the About Me section, view recent projects, and learn how Subrata can help bring your web application ideas to life. Connect directly through the Contact Me page to collaborate on your next digital project. Whether you’re a business looking to enhance your online presence or a team in need of development support, Subrata Ghosh’s experience in full stack development is here to help. Let’s create something amazing together!",
        "author": {
          "@type": "Person",
          "name": "Subrata Ghosh",
          "url": "https://www.subrataghosh.in"
        },
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
          "Full Stack Developer",
          "Web Development",
          "Front-end Development",
          "Back-end Development",
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
          "availableLanguage": [
            "English"
          ]
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
        <link rel="canonical" href="https://www.subrataghosh.in/" />
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
