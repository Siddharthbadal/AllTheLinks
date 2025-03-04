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

      <div className="flex flex-col justify-center items-center gap-4  mx-auto">
                    
         
  

    <div className=" flex flex-col mb-16 border-gray-800  p-8">                     
        { 
            currentLinks.filter((item)=>{
              return search.toLowerCase() === '' ?
              item: item.title.toLowerCase().includes(search) ||
              item.type.toLowerCase().includes(search)
            }).map((pl)=>(
              
            <Link key={pl.link} href={pl.link} target="_blank" className=" text-gray-600 font-medium mb-2 tracking-wider hover:text-gray-700  delay-100 hover:font-semibold"> 
              <div className="flex flex-row gap-4 text-xl">
              <span className="capitalize">
                  {pl.title} 
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
