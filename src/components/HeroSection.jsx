
"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

import SocialButton from "./SocialButton";

const HeroSection = (props) => {
    const profile = props.data;

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-20" >
                <div className ="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-textLightActive dark:text-textDarkActive mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryLight-500 to-secondaryLight-500 dark:from-primaryDark-500 dark:to-secondaryDark-500">Salut Je suis</span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                profile.profession[0],
                                1000,
                                profile.profession[1],
                                1000,
                                profile.profession[2],,
                                1000
                            ]}
                            wrapper="span"
                            speed={70}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-textLightActive dark:text-textDarkInactive text-base sm:text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptatum.
                    </p>
                    <div className="flex flex-col md:flex-row items-center ">
                        <Link  href={profile.cvlink} className ="px-1 py-1 w-fit mr-5 mb-5 md:mb-0 rounded-full bg-gradient-to-br from-primaryLight-500 to-secondaryLight-950 dark:from-primaryDark-500 dark:to-secondaryDark-500 hover:bg-slate-800 text-white  mt-3">
                            <span className="block bg-bgLightSecondary dark:bg-bgDarkPrimary text-textLightActive dark:text-textDarkActive hover:bg-slate-800 rounded-full px-5 py-2">Télécharger CV</span>
                        </Link>
                        
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0 lg:ml-4">
                    <div className="rounded-full bg-bgLightSecondary dark:bg-bgDarkSecondary w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] flex flex-column justify-center items-center">
                        <Image
                            className="rounded-full object-contain"
                            src="/images/altidor.png"
                            alt="gildas dossou"
                            width = {250}
                            height ={250}

                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default HeroSection;