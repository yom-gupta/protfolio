import { Poppins, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Rishabh Gupta (@mr_yom_gupta) - Video Editor & Thumbnail Designer",
  description:
    "I help YouTube & Instagram creators grow through cinematic video editing, high-converting thumbnails, and scroll-stopping visuals. Trusted by creators from 30K to 20M+ subscribers. Based in Delhi, available worldwide.",
  keywords: [
    "video editor",
    "thumbnail designer",
    "YouTube video editor",
    "Instagram reels editor",
    "motion graphics",
    "Rishabh Gupta",
    "mr_yom_gupta",
    "Delhi video editor",
    "international creator editor",
  ],
  icons: {
    icon: "/icon.jpg",
  },
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MLEE9CG5YH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MLEE9CG5YH');
          `}
        </Script>
      </head>
      <body
        className="antialiased font-sans bg-black text-white min-h-screen overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
