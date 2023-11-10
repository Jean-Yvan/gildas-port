import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({imgUrl, title, description,videoHandler}) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group" 
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>

                    <div className="overlay absolute top-0 left-0 w-full h-full bg-bgLightSecondary dark:bg-bgDarkSecondary  dark:bg-opacity-0 hidden group-hover:flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500">
                        <span onClick={videoHandler} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                            <EyeIcon className ="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white cursor-pointer"/>
                        </span>
                    </div>
            </div>
            <div className="text-textLightActive dark:text-textDarkInactive rounded-b-xl bg-bgLightSecondary dark:bg-bgDarkSecondary mt-2 py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-textDarkInactive">{description}</p>
            </div>
        </div>
    );
};


export default ProjectCard;