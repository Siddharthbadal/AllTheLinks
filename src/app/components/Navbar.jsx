"use client"

import Link from "next/link"
import { useState } from "react"
import { navlinks } from "@/data/navlinks"
import clsx from "clsx";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('read')
  return (
    

<nav className="">    
    <div className="w-full">
    <h1 className="text-5xl text-center mt-12 md:mt-12">
      <Link href="/">📝</Link>
    </h1>
      <ul className="w-1/2 mx-auto flex flex-row justify-center gap-8 mt-8 mb-4 md:mt-8 md:mb-4">
        {navlinks.map((link)=>(      
            <li key={link.hash}>
              <Link href={link.name} 
                className={clsx("text-gray-700 text-lg font-semibold underline p-2 rounded-md hover:bg-yellow-200 tracking-widest capitalize",{" text-gray-700 font-semibold bg-yellow-200 mb-2": activeSection === link.name})} 
                aria-current="page"
                onClick={()=>setActiveSection(link.name)}>
                  {link.name}

                  {
                         link.name === activeSection && (
                              <></>
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
