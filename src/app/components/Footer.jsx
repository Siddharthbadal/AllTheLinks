import Link from "next/link"
import Navbar from "./Navbar"


export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
            <footer className="border-t-2 w-full flex flex-col">
                    
                    <p className="text-center text-sm p-2 text-gray-500 font-semibold">
                      Created by &nbsp;
                        <Link className="hover:text-gray-800" href="https://x.com/sidhbad">Sidd</Link>
                    </p>
                    <span className="mx-auto text-gray-500 text-sm">@{currentYear}</span>
            </footer>
  )
}
