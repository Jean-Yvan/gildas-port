"use client";
import React, {useState} from "react";

const Award = ({name,price,description,year})=>{
    const [isOpen,setOpen] = useState(false);

    function handleClick(){
        setOpen(!isOpen);
    }

    let descClassName = isOpen ? "block" : "hidden";

    return (
        <article className="gap-[1.4rem] h-fit cursor-pointer p-8 bg-bgLightSecondary dark:bg-bgDarkSecondary">
            <div className="cursor-pointer">
                <span  onClick={handleClick} className="font-lg text-textDarkInactive hover:text-textLightActive dark:hover:text-textDarkActive">
                    {
                        isOpen ? "-" : "+" 
                    }
                </span>
            </div>
            <div className="font-[bold] text-textLightActive dark:text-textDarkActive">
                <div className="flex justify-between">
                    <h4>{name.toLowerCase()}</h4>
                    <h5 className="text-base font-medium">{year}</h5>
                </div>
                <h6 className="font-[normal] text-[0.8rem]">{price}</h6>
                <p className={`text-[rgba(255,255,255,0.8)] text-[0.9rem] transition-[0.5s] ${descClassName}`}>
                    {description}                     
                </p>
            </div>
        </article>
        
    );
}

export default Award;