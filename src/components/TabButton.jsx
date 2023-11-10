import React from "react";

const TabButton = ({active, selectTab, children}) =>{

    const buttonClasses = active ? 'text-white bg-purple-500 pt-1 px-1 rounded' : 'text-[#ADB7BE]';

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            
        </button> 
    );
 
    
}
export default TabButton;