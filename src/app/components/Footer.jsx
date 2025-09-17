import Link from "next/link"
import Navbar from "./Navbar"


export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
        <footer className="border-t-4 w-full flex flex-col">
                
            <p className="text-center text-sm p-2 text-neutral-600 font-semibold">
              Created by &nbsp;
                <Link href={"https://x.com/sidhbad"}
                    className="hover:text-neutral-800 hover:underline"
                    target="_blank"
                >   
                    Sidd
                </Link>
            </p>
            <span className="mx-auto text-neutral-600 text-sm font-semibold hover:text-neutral-800 mb-2 hover:underline">
              <Link href={"https://github.com/Siddharthbadal/Books-and-PDFs"} target="_blank">
                  More Here
              </Link>
            </span>

        </footer>
  )
}
