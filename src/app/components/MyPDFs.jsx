"use client"

import Link from "next/link"
import pdflinks from "../../data/links.js"
import { useState } from "react"
import { Pagination } from "../components/Pagination"


export default function MyPDFs({alllinks, linkType='Youtube'}) {
        const [search, setSearch] = useState('')
        const [ links, setLinks ] = useState(alllinks)
        const [currentPage, setCurrentPage] = useState(1);
        const [linksPerPage, setLinksPerPage] = useState(15)
    
        const lastLinkIndex = currentPage * linksPerPage;
        const firstLinkIndex = lastLinkIndex - linksPerPage;
        const currentLinks = alllinks.slice(firstLinkIndex, lastLinkIndex)

  return (

      <div className="flex flex-col justify-center items-center gap-4  mx-auto">
                    
          <div className=" ">
                <form action="">
                  <input 
                    onChange={(e) =>{
                      setSearch(e.target.value)
                    }}
                    placeholder="search "
                    className="w-full outline font-semibold text-gray-600 first:h-8 border mt-1 rounded"
                    >
                  </input>
                </form>                                
          </div>
  

    <div className=" flex flex-col mb-16 border-gray-800  p-8">                     
        { 
            currentLinks.filter((item)=>{
              return search.toLowerCase() === '' ?
              item: item.title.toLowerCase().includes(search) ||
              item.type.toLowerCase().includes(search)
            }).map((pl)=>(
              pl.type === linkType ?
              <Link key={pl.link} href={pl.link} target="_blank" className=" text-gray-600 font-medium mb-2 tracking-wider hover:text-gray-800  delay-300"> 
              <div className="capitalize flex flex-row gap-4 text-xl">
              <span className="capitalize">
                  {pl.title} 
              </span>
              <span>
                    {
                          pl.type == "Youtube" 
                          ?
                          <h2 className="text-red-800 font-semibold ">
                            {pl.type}
                          </h2>
                          : ''
                          // (pl.type == "Book" ?
                          //   <h2 className="text-green-800 font-semibold">
                          //     {pl.type}
                          //   </h2>
                          //   :
                          //   <h2 className="text-gray-800 font-semibold">
                          //     {pl.type}
                          //   </h2>
                          // )
            
                    }
                   </span>
                   </div>
          </Link>
            :
            <Link key={pl.link} href={pl.link} target="_blank" className=" text-gray-600 font-medium mb-2 tracking-wider hover:text-gray-800  delay-300"> 
              <div className="capitalize flex flex-row gap-4 text-xl">
              <span className="capitalize">
                  {pl.title} 
              </span>
              <span>
                    {
                          pl.type == "Youtube" 
                          ?
                          <h2 className="text-red-800 font-semibold ">
                            {pl.type}
                          </h2>
                          : ''
                          // (pl.type == "Book" ?
                          //   <h2 className="text-green-800 font-semibold">
                          //     {pl.type}
                          //   </h2>
                          //   :
                          //   <h2 className="text-gray-800 font-semibold">
                          //     {pl.type}
                          //   </h2>
                          // )
            
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
