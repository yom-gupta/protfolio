import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Rishabh Gupta - Video Editor & Thumbnail Designer",
  description: "Professional video editor and thumbnail designer with over 2 years of experience",
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="antialiased font-sans bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
