"use client"

import Link from "next/link"
import techpdflinks from "@/data/techpdflinks.js"
import { useState } from "react"




export default function TechPDFs() {
    const [search, setSearch] = useState('')

  return (

      <div className="flex flex-col justify-center items-center gap-8 bg-zinc-100 mx-auto border">
                  
          <div className="">
                <form action="">
                  <input 
                    onChange={(e) =>{
                      
                      setSearch(e.target.value)
                    }}
                    placeholder="search pdf"
                    className="w-full outline-none font-semibold text-gray-600 first:h-6 mt-1 rounded"
                    >
                  </input>
                </form>
                
                
          </div>
  

    <div className=" flex flex-col items-center mb-16 border-gray-800 bg-zinc-100 p-8">
    
        { 
            techpdflinks.filter((item)=>{
              return search.toLowerCase() === '' ?
              item: item.title.toLowerCase().includes(search) || 
              item.type.toLowerCase().includes(search)
            }).map((pl)=>(
                <Link key={pl.link} href={pl.link} target="_blank" className=" text-gray-600 font-medium mb-2 tracking-wider hover:text-gray-800 hover:font-semibold  delay-400"> 
                <div className="capitalize flex flex-row gap-4">
                   <span>
                        {pl.title} 
                   </span>
                    
                     <span>
                            {
                                  pl.type == "Youtube" 
                                  ?
                                  <h2 className="text-red-800 font-semibold">{pl.type}</h2>
                                  :
                                  (pl.type == "Text" ?
                                    <h2 className="text-green-800 font-semibold">{pl.type}</h2>
                                    :
                                    <h2 className="text-gray-800 font-semibold">{pl.type}</h2>
                                  )
                    
                            }
                     </span>

                </div>
            </Link>
            )                
            )
        }
            
    </div>



    </div>
  )
}
