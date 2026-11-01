import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Raihanul Islam | Frontend Developer & UI/UX Enthusiast",
  description: "Portfolio of Raihanul Islam, a Frontend Developer specializing in React and Next.js, building fast, responsive and polished web experiences.",
  openGraph: {
    title: "Raihanul Islam | Frontend Developer",
    description: "React and Next.js projects, skills and contact details.",
    type: "website",
    images: ["/profile_raihanul.png"],
  },
  twitter: {
    card: "summary",
    title: "Raihanul Islam | Frontend Developer",
    description: "React and Next.js projects, skills and contact details.",
    images: ["/profile_raihanul.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
