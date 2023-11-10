import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";

const QualificationElement = ({ title, subtitle, periode, type})=>{
    return (
        <div className="text-textLightActive dark:text-textDarkActive">
            <div className="flex items-center mb-2">
                <span className="mr-2">
                    {
                        type == "edu" ? <AcademicCapIcon className="h-4 w-4 md:h-6 md:w-6" /> : <BriefcaseIcon className="h-4 w-4 md:h-6 md:w-6"/> 
                    }
                </span>
                <span className="text-base md:text-xl ">{title}</span>
            </div>
            <div className="flex items-center mb-2">
            <span className="mr-2"><BuildingOffice2Icon className="h-4 w-4 md:h-6 md:w-6"/></span>
                <span className="text-sm md:text-md">{subtitle}</span>
            </div>
            
            <div className="flex items-center">
                <span className="mr-2"><CalendarIcon className="h-4 w-4 md:h-6 md:w-6"/></span>
                <span className="text-sm md:text-md">{periode}</span>
            </div>
        </div>
    )
}

export default QualificationElement;