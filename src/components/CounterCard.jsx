"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => {return import('react-animated-numbers')}, {ssr:false});
const CounterCard = ({ title, prefix, subtitle, children }) =>{
const index = 2;    
    return (
        <div className="w-[170px]  md:w-[220px] md:h-[100px] bg-bgLightPrimary pl-[55px] pr-2 dark:bg-bgDarkPrimary mr-2 md:mr-0 relative border border-solid border-bgLightSecondary md:py-[20px] py-[15px] dark:border-bgDarkSecondary shadow-md">
            <div className="rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px] absolute top-1/2 left-0 -translate-x-2/4 -translate-y-2/4 bg-bgLightSecondary dark:bg-bgDarkSecondary flex items-center justify-center">
                {
                    children
                }
            </div>
            <div>
                <h2 className="text-xl font-bold text-textLightActive dark:text-textDarkActive flex">
                    {prefix}
                    <AnimatedNumbers
                        includeComma 
                        animateToNumber={parseInt(title)}
                        configs={(_,index) =>{
                            return {
                                mass: 1,
                                friction: 100,
                                tensions: 140 * index
                            }
                        }}
                    
                    /> 
                </h2>
                <p className="text-[0.8rem] text-textDarkInactive">{subtitle}</p>
            </div>
        </div>
    )
}

export default CounterCard;