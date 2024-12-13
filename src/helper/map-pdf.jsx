import Link from "next/link"
import { useState } from "react"

export default function MapPdf({links}) {
    const [search, setSearch] = useState('')

  return (
    
    links.filter((item)=>{
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
  )
}
