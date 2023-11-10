"use client";
import React from "react";

import QualificationRow from "./QualicationRow";
import Loader from "./Loader";





const QualificationSection = ( { parcours } ) =>{
    

    return (
        <section className="mb-5" id="parcours">
            <h2 className="text-center text-4xl font-bold text-textLightActive dark:text-textDarkActive mt-4 mb-8 md:mb-12">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryLight-500 to-secondaryLight-500 dark:from-primaryDark-500 dark:to-secondaryDark-500 text-6xl">P</span> 
                arcours
            </h2>
            
                <div className="md:w-3/4 w-full p-4 md:mx-auto md:p-10 bg-bgLightSecondary dark:bg-bgDarkSecondary flex items-center justify-center">
                    {
                        parcours.length != 0 ? <div>
                        {
                            parcours.map((qualif,index)=> <QualificationRow key={index} qualifData={qualif} index={index} />)
                        }
                        </div> : <Loader />
                    }
            </div>
            
        </section>
    )
}

export default QualificationSection;