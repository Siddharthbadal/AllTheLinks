"use client"

import Link from "next/link"
import techpdflinks from "@/data/techpdflinks.js"
import { useState } from "react"
import TechNav from "../components/TechNav"
import { Pagination } from "../components/Pagination"


export default function TechPDFs() {
    const [search, setSearch] = useState('')
    const [ links, setLinks ] = useState(techpdflinks)
    const [currentPage, setCurrentPage] = useState(1);
    const [linksPerPage, setLinksPerPage] = useState(15)

    const lastLinkIndex = currentPage * linksPerPage;
    const firstLinkIndex = lastLinkIndex - linksPerPage;
    const currentLinks = techpdflinks.slice(firstLinkIndex, lastLinkIndex)


  return (

      <div className="flex flex-col justify-center items-center gap-2 bg-zinc-100 w-full mx-auto border">                            
                <form action="">
                  <input 
                    onChange={(e) =>{
                      
                      setSearch(e.target.value)
                    }}
                    placeholder="search "
                    className="w-full outline-none font-semibold text-gray-600 first:h-6 mt-1 rounded"
                    >
                  </input>
                </form>                                
                  
                  <div>
                      <TechNav  />
                  </div>

    <div className=" flex flex-col justify-center mb-16 border-gray-800 bg-zinc-100 p-8">
    
        { 
            currentLinks.filter((item)=>{
              return search.toLowerCase() === '' ?
              item: item.title.toLowerCase().includes(search) || 
              item.type.toLowerCase().includes(search)
            }).map((pl)=>(
                <Link key={pl.link} href={pl.link} target="_blank" 
                className=" text-gray-600 font-medium mb-2 tracking-wider
                           hover:text-gray-800 hover:font-semibold  delay-400"> 
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
            
          <div className="text-center mt-4 border-t-8">
                <Pagination totalLinks={links.length} linksPerPage={linksPerPage} setCurrentPage={setCurrentPage} currentPage={{currentPage}} />
          </div>
    </div>


    </div>
  )
}
