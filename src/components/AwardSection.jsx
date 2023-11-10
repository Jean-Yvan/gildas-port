import React, { useState } from "react";
import Award from "./Award";
import CustomButton from "./CustomButton";
import Loader from "./Loader";

const AwardSection = ({awards}) => {
    
    const [showAll, setShowAll] = useState(false);
    const numberOfItemsToShow = showAll ? awards.length : 4;
    const displayedData = awards.slice(0,numberOfItemsToShow);
    
    

    function toutVoir(){
        setShowAll(!showAll);    
    }

    return (
        <section className="shadow-[inset_0_0_3rem_rgba(0,0,0,0.5)] mb-5 p-5" id="award">
            <h2 className="text-center text-4xl font-bold text-textLightActive dark:text-textDarkActive mt-10 mb-8 md:mb-12">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-6xl">P</span>
                rix et <span className="text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-primaryLight-500 to-secondaryLight-500 dark:from-primaryDark-500 dark:to-secondaryDark-500 text-6xl">R</span>écompenses
            </h2>
            {
                awards.length != 0 ?
                <div className="grid  grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-4 p-4;">
                    {
                        displayedData.map(function (award){
                            return <Award 
                                key={award.id} 
                                name={award.event} 
                                description={award.award} 
                                price={award.location} 
                                year={award.date}
                            />
                        })  
                    }
                </div> : <div className="w-full flex items-center justify-center"><Loader/></div>
            }
            {
             awards.length > 6 && <CustomButton title={ showAll ? "Voir moins" : "Tout voir"} handleClick={toutVoir} styles="mt-5 rounded-sm"/> 
            }    
        </section>
    );
}

export default AwardSection;