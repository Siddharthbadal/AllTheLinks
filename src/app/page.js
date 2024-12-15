
import Link from "next/link"

export default function Home() {
  return (
        <div className="flex flex-col justify-center items-center gap-2 bg-zinc-100 mx-auto border lg:h-[480px]">
                   

                     <h3 className="text-center text-xl text-gray-600 -mt-24">
                          Wanted to have all tech and non-tech books, <br />
                           courses and videos links at one place.   <br />                                                     
                      Feel free to use. <br />
                      Always work in Progress. 🚧.</h3>

                      <ul className="font-medium flex flex-col justify-center items-stretch gap-8 p-8 md:p-0 mt-2 rounded-lg  md:flex-row text-gray-600">
        <li>
          <Link href="/books" className=" underline block py-2 px-3 text-gray-600 rounded  hover:bg-gray-100 tracking-widest" aria-current="page">Books</Link>
        </li>
        <li>
          <Link href="/techs" className="underline tracking-widest block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  md:border-0 ">Tech</Link>
        </li>
        
      </ul>

                      
                  
                 
                  

       </div>
  );
}
