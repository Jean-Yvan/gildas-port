import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({closeModal,children})=>{
    return  (
        <div className="absolute top-0 left-0  bg-bgLightPrimary dark:bg-bgDarkPrimary opacity-90 right-0 bottom-0 w-full h-full shadow-lg flex justify-center z-100 items-center">
            <div className="md:w-1/2 w-full  bg-bgLightSecondary dark:bg-bgDarkSecondary p-5 relative border-1">
                <div onClick={closeModal} className ="absolute top-0 left-0 cursor-pointer p-2 my-2">
                    <XMarkIcon className="h-6 w-6 text-textLightActive dark:text-textDarkActive" />
                </div>
                
                <div className="mt-4">
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default Modal;