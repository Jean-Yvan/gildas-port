import React from "react";



const CustomButton = ({ styles, title,handleClick }) =>{
    return (
        <button type="button" className={` ${styles} px-1 py-1 w-fit mr-5 mb-5 md:mb-0 bg-gradient-to-br from-primaryLight-500 to-secondaryLight-950 dark:from-primaryDark-500 dark:to-secondaryDark-500 transition-transform duration-300 transform hover:scale-110 text-textLightActive dark:text-textDarkActive  mt-3`} onClick={handleClick}>
            <span className="block bg-bgLightPrimary dark:bg-bgDarkPrimary px-5 py-2">{title}</span>
        </button>
    )
}

export default CustomButton;