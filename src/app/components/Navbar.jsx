import Link from "next/link"

export default function Navbar() {
  return (
    

<nav className="">
  <div className=" flex flex-wrap items-stretch justify-between mx-auto p-4">
    
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <h1 className="text-2xl font-bold mx-auto text-center mt-12">All The PDFs</h1>
      <ul className="font-medium flex flex-col items-stretch justify-between p-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row text-gray-600">
        <li>
          <Link href="/" className="block py-2 px-3text-gray-600 rounded md:bg-transparent" aria-current="page">All</Link>
        </li>
        <li>
          <Link href="/techs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:border-0 ">Tech</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}
