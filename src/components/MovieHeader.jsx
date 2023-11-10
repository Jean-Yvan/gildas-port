import React from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";
const MovieHeader = ({imgUrl, title,description}) =>{

    return (
        <div className="flex flex-col md:flex-row px-20 pt-5">
            <div className="">
                <Image src={imgUrl} width={800} height={800} alt={title} />
            </div>
            <div className="text-white ml-10 md:flex md:flex-col">
                <h1 className="text-4xl mb-2">{title}</h1>
                <p className="leading-relaxed w-3/4 text-[.9rem] md:grow-[1]">{description}</p>
                <CustomButton title="Voir" handleClick={()=>{}} styles="justify-self-end"/>
            </div>
        </div>
    )

}

export default MovieHeader;