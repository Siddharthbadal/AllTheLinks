"use client"

import Link from "next/link"
import { useState } from "react"
import { Pagination } from "../components/Pagination"


export default function MyPDFs({alllinks, linkType='Youtube'}) {
        const [search, setSearch] = useState('')
        const [ links, setLinks ] = useState(alllinks)
        const [currentPage, setCurrentPage] = useState(1);
        const [linksPerPage, setLinksPerPage] = useState(20)
    
        const lastLinkIndex = currentPage * linksPerPage;
        const firstLinkIndex = lastLinkIndex - linksPerPage;
        const currentLinks = alllinks.slice(firstLinkIndex, lastLinkIndex)

  return (

      <div className=" h-full flex flex-col justify-center items-center mb-4  mx-auto">
                    
    <div className="w-full md:w-1/2 shadow-2xl rounded-md p-8 bg-zinc-100/20">                     
        { 
            currentLinks.filter((item)=>{
              return search.toLowerCase() === '' ?
              item: item.title.toLowerCase()||
              item.type.toLowerCase()
            }).map((pl)=>(
              
            <Link 
                key={pl.link} 
                href={pl.link} 
                target="_blank" 
                className="  
                               
                            "> 
              <div className="flex flex-row gap-4 text-lg">
              <span className="text-gray-500 mb-2 tracking-wider capitalize hover:text-gray-600  delay-100 ">
                  {pl.title}  
              </span>
                   </div>
          </Link>
            )                
            )
        }

        <div className="text-center mt-4 border-t-2 border-gray-400 text-gray-500">
                <Pagination totalLinks={links.length} linksPerPage={linksPerPage} setCurrentPage={setCurrentPage} currentPage={{currentPage}} />
        </div>
            
    </div>



    </div>
  )
}
