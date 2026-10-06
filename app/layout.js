import { Inter, Space_Grotesk } from "next/font/google";
import AIAssistant from "./components/AIAssistant";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "MARJENE Software Development",
  description:
    "MARJENE Software Development — Engineering Intelligent Digital Solutions. Building intelligent systems, modern applications, websites, mobile platforms, AI solutions, and enterprise software.",
  icons: {
    icon: "/images/marjene-robot.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
