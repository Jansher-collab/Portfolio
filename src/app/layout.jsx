import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Jan Sher Khan | Full Stack Developer & Software Engineer",
  description: "Cinematic, high-performance portfolio of Jan Sher Khan. Full Stack Developer specializing in React, Next.js, C#, ASP.NET, PHP & modern web architectures.",
  keywords: ["Jan Sher Khan", "Full Stack Developer", "Software Engineer", "Next.js", "React", "Karachi", "Web Developer"],
  authors: [{ name: "Jan Sher Khan" }],
  openGraph: {
    title: "Jan Sher Khan | Full Stack Developer",
    description: "Building responsive, database-driven web applications with modern technologies.",
    url: "https://jansherkhan.dev",
    siteName: "Jan Sher Khan Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="bg-pure text-white antialiased selection:bg-cyan selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

