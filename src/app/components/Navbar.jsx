"use client"

import Link from "next/link"
import { useState } from "react"
import { navlinks } from "@/data/navlinks"
import clsx from "clsx";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('read')
  return (
    

<nav className="">    
    <div className="w-full lg:w-auto" id="navbar-default border">
    <h1 className="text-5xl font-bold mx-auto text-center mt-4 lg:mt-2">
      <Link href="/">📝</Link>
    </h1>
      <ul className="font-medium flex flex-row justify-center items-stretch gap-8 lg:p-4 md:p-0 mt-2 rounded-lg  lg:flex-row">
        {navlinks.map((link)=>(      
            <li key={link.hash}>
              <Link href={link.name} 
                className={clsx("text-xl underline block py-2 px-2 text-gray-200 rounded  hover:bg-zinc-500 lg:hover:bg-zinc-500 tracking-widest capitalize",{" text-gray-300 font-semibold bg-zinc-500 mb-2": activeSection === link.name})} 
                aria-current="page"
                onClick={()=>setActiveSection(link.name)}>
                  {link.name}

                  {
                         link.name === activeSection && (
                              <span className="bg-gray-800" 
                              ></span>
                            )
                    }
              </Link>
            </li>
      ))}
        
        
      </ul>
    </div>

</nav>

  )
}
