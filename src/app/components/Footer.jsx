import Link from "next/link"
import Navbar from "./Navbar"
import TechNav from "./TechNav"

export default function Footer() {
  return (
            <footer className="border-t-8 w-full mb-1">
                    <p className="text-center text-xs text-gray-600">All Links are subject to avilabilty. </p>
                    <h5 className="text-sm text-center font-semibold mb-1  text-gray-600">
                        <Link className="hover:font-bold text-sm" href="https://www.linkedin.com/in/siddharthbadal/">Sidd</Link>
                    </h5>

                                                                     

            </footer>
  )
}
