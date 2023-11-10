"use client";

import React from 'react';
import Image from 'next/image';



 const AboutSection = (props)=>{
  
  const about = props.data;
  return (
      <section className='text-white mb-5'>
          <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
            <div className="hidden md:block">
              <Image src={about.proposImage} width={400} height={400} alt=""/>
            </div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold text-textLightActive dark:text-white mb-4 text-center md:text-left"><span className="text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-primaryLight-500 to-secondaryLight-500 dark:from-primaryDark-500 dark:to-secondaryDark-500 text-6xl">A</span> propos</h2>
              <p className="text-xl lg:text-lg leading-6 text-textLightActive dark:text-white">
                {
                  about.proposText
                }
              </p>
                
            </div>
            
          </div>
      </section>
  )

 };

 export default AboutSection;