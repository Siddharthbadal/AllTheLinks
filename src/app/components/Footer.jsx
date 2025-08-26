import Link from "next/link"
import Navbar from "./Navbar"


export default function Footer() {
  return (
            <footer className="border-t-2 w-full mb-1">
                    <p className="text-center text-lg text-gray-300 font-semibold">
                      Created by &nbsp;
                        <Link className="hover:font-bold text-lg" href="https://x.com/sidhbad">Sidd</Link>
                    </p>
            </footer>
  )
}
