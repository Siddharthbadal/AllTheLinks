import Link from "next/link"

export default function Navbar() {
  return (
    

<nav className="">
  <div className="border-b-8 w-full ">
    
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <h1 className="text-2xl font-bold mx-auto text-center mt-4">All The PDFs</h1>
      <ul className="font-medium flex flex-col justify-center items-stretch gap-8 p-8 md:p-0 mt-2 rounded-lg  md:flex-row text-gray-600">
        <li>
          <Link href="/books" className=" underline block py-2 px-3 text-gray-600 rounded  hover:bg-gray-100 tracking-widest" aria-current="page">All</Link>
        </li>
        <li>
          <Link href="/techs" className="underline tracking-widest block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:border-0 ">Tech</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}
