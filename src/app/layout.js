 import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const inter = Inter({
  subsets: ['latin']
})


export const metadata = {
  title: "Books | Videos",
  description: "Collection of my favourite videos, links, books aand tutorials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased bg-zinc-400/20` }
      >
        <div className="">
                    <Navbar  />     
                    
                        {children}
                    
                    <Footer />
        </div>            
      </body>
    </html>
  );
}
