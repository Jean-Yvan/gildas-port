import React from "react";

const ProjectTag = ({name, onClick, isSelected})=>{
    const buttonStyles = isSelected ?
        "text-textLightActive dark:text-textDarkActive border-purple-500"  :
        "text-textDarkInactive border-slate-600 hover:border-textLightActive dark:hover:border-textDarkActive"

    return (
        <button onClick={() => onClick(name)} className={`rounded-full border-2  px-6 py-2 text-xl cursor-pointer ${buttonStyles}`} >
            {name}
        </button> 
    ); 
} 

export default ProjectTag; 