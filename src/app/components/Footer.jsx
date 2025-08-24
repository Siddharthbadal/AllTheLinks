import Link from "next/link"
import Navbar from "./Navbar"


export default function Footer() {
  return (
            <footer className="border-t-8 w-full mb-1">
                    <p className="text-center text-xs text-gray-600">Use it as you wish. </p>
                    <h5 className="text-sm text-center font-semibold mb-1  text-gray-600">
                        <Link className="hover:font-bold text-sm" href="https://x.com/sidhbad">Sidd</Link>
                    </h5>

                                                                     

            </footer>
  )
}
