import React from "react";
import QualificationElement from "./QualificationElement";


const QualificationRow = ({qualifData,index})=>{
    if(index % 2 != 0){
        return (
            <div className="md:grid md:grid-cols-[1fr_max-content_1fr] md:gap-6 flex flex-col justify-between mb-5 md:mb-0 ">
                <div className="hidden md:block"></div>
                <div className="md:flex flex-col items-center hidden">
                    <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
                    <span className="block w-[1px] bg-[#ADB7BE] h-full"></span>
                </div>
                <QualificationElement 
                    title={qualifData.title} 
                    subtitle={qualifData.subtitle} 
                    type={qualifData.type}
                    periode={qualifData.periode}
                />
            </div>
        )
    }else{
        return (
            <div className="md:grid md:grid-cols-[1fr_max-content_1fr] md:gap-6 f mb-5 md:mb-0">
                <QualificationElement 
                    title={qualifData.title} 
                    subtitle={qualifData.subtitle} 
                    type={qualifData.type}
                    periode={qualifData.periode}
                />
                <div className="md:flex flex-col items-center hidden">
                    <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
                    <span className="block w-[1px] bg-[#ADB7BE] h-full"></span>
                </div>
                <div className="hidden md:block"></div>
            </div>
        )
    }
}

export default QualificationRow;