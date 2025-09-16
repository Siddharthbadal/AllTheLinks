import Image from "next/image";

import React from 'react'

const page = () => {
  return (
    <div className="  h-screen mt-auto flex flex-col items-center gap-8 mb-2 ">                   
            <div className="mt-8">
              <h3 className="text-center text-lg text-gray-600 ">
                Collection of videos, books, and technical content                     
            </h3>
            </div>

            <Image  
                src={"/images/home-page.jpg"}
                alt="banner"
                width={480}
                height={480}

                className="h-auto max-w-sm rounded-lg "
            />

       </div>
  )
}

export default page