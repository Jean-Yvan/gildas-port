import React from "react";
import Image from "next/image";

const ServiceCard = ({imgUrl,title,setModal}) =>{

    return (
        
        <div onClick={setModal} className="shadow-md  bg-bgLightSecondary dark:bg-bgDarkSecondary border-1 border-white md:py-10 py-5 px-2 md:px-10 flex flex-col justify-center items-center transition-transform duration-300 transform hover:scale-110 cursor-pointer">
            <Image src={imgUrl} width={70} height={70} alt={title} className="dark:filter-invert-1"/>
            <h2 className="text-sm text-textLightActive dark:text-textDarkInactive text-center mt-10">{title}</h2>
        </div>
        
    );
}

export default ServiceCard;