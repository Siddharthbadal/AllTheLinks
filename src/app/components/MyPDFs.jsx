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

      <div className=" flex flex-col justify-center items-center mb-4  mx-auto ">
                    
        <div className="w-full md:w-1/2 bg-white/50 shadow-md rounded-md p-8">                     
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
                > 
              
              <div className="flex justify-between text-md text-neutral-600 font-semibold mb-2 tracking-wider capitalize hover:text-neutral-700 delay-100 ">
                <span>
                  {pl.title}   
                </span>
                <span className=" text-neutral-400 hover:text-yellow-800">
                  { pl.type }
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
