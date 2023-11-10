import React from "react";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";


const Banner = ({imgUrl, title,description})=>{
    return (
      <header
        className="relative h-0 pt-[30%] mb-[20px]"
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain", backgroundPosition: "center center", backgroundRepeat: "no-repeat"}}>
          <div className="absolute top-0 left-0">
            <Link href="/" className="block bg-transparent p-5">
              <ArrowLongLeftIcon className="h-6 w-6 text-black-500" />
            </Link>
            <div className="text-white ml-10 pt-20">
                <h1 className="text-4xl mb-2">{title}</h1>
                <p className="leading-relaxed w-1/3 text-[.9rem]">{description}</p>
                <button className="py-1 px-3 rounded-t-xl bg-[#121212] bg-opacity-50 mb-5">Play</button>
            </div>

          </div>
                        
      </header>  
    )
}

export default Banner; 