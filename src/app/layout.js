import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MyPDFs from "./components/MyPDFs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "All The Links",
  description: "Collection of my favourite videos, links, books aand tutorials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="lg:max-w-[900px] lg:px-16 lg:bg-zinc-50 mx-auto py-8 shadow-xl min-h-screen flex flex-col px-8">
              <Navbar  />     
              <div className="flex-auto">
                  {children}
              </div>
              <Footer />

        </div>
            
      </body>
    </html>
  );
}
