"use client"

import Link from "next/link"
import techpdflinks from "@/data/techpdflinks.js"
import { useState } from "react"
import Navbar from "../components/Navbar.jsx"



export default function TechPDFs() {
    const [search, setSearch] = useState('')

  return (

      <div className="flex flex-col justify-center items-center gap-8 bg-zinc-100 mx-auto border">
                   <Navbar  />
          <div className="">
                <form action="">
                  <input 
                    onChange={(e) =>{
                      setSearch(e.target.value)
                    }}
                    placeholder="search pdf"
                    className="w-1/2 outline-none font-semibold "
                    >
                  </input>
                </form>
                
                
          </div>
  

    <div className=" flex flex-col mb-16 border-gray-800 bg-zinc-100 p-8">
    
        { 
            techpdflinks.filter((item)=>{
              return search.toLowerCase() === '' ?
              item: item.title.toLowerCase().includes(search)
            }).map((pl)=>(
                <Link key={pl.link} href={pl.link} target="_blank" className=" text-gray-600 font-medium mb-2 tracking-wider hover:text-gray-800  delay-300"> 
                <span className="capitalize">
                    {pl.title}
                </span>
            </Link>
            )                
            )
        }
            
    </div>



    </div>
  )
}
