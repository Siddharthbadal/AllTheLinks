"use client"

import Link from "next/link"
import techpdflinks from "@/data/techpdflinks.js"
import { useState } from "react"
import TechNav from "@/app/components/TechNav"


export default function BlogLinks() {
    const [search, setSearch] = useState('')

  return (

      <div className="flex flex-col justify-center items-center gap-2 w-full bg-zinc-100 mx-auto border">
                  
               <form action="">
                  <input 
                    onChange={(e) =>{
                      
                      setSearch(e.target.value)
                    }}
                    placeholder="search"
                    className="w-full outline-none font-semibold text-gray-600 first:h-6 mt-1 rounded"
                    >
                  </input>
                </form>

                <div>
                    <TechNav  />
                </div>                                 
  

    <div className=" flex flex-col mb-16 border-gray-800 bg-zinc-100 p-8">
    
        { 
            techpdflinks.filter((item)=>{                              
              return search.toLowerCase() === '' ?
              item: item.title.toLowerCase().includes(search) || 
              item.type.toLowerCase().includes(search)
            }).map((pl)=>(
                pl.type === "Blog" || pl.type === "Book" ?
                <Link key={pl.link} href={pl.link} target="_blank" className=" text-gray-600 font-medium mb-2 tracking-wider hover:text-gray-800 hover:font-semibold  delay-400"> 
                <div className="capitalize flex flex-row gap-4">
                   <span>
                        {pl.title} 
                   </span>
                    
                     

                </div>
            </Link>
            :""
            )                
            )
        }
            
    </div>



    </div>
  )
}
