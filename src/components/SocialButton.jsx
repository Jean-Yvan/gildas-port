import React from "react";

import Image from "next/image";
import Link from "next/link";

const SocialButton = ({ imageSrc, link, title }) =>{

    return (
       
        <Link href={link} alt={`view my ${title} profile`} className="w-30 h-30 bg-bgLightSecondary dark:bg-bgDarkSecondary cursor-pointer rounded-sm p-5 mr-5 transition-transform duration-300 transform hover:scale-110">
            <Image src={imageSrc} width={18} height={18} alt={title} className="object-contains dark:filter-invert-1"/>
        </Link>
    
    )
}

export default SocialButton;