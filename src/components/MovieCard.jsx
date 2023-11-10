import React from "react";


const MovieCard = ({imgUrl,previewUrl}) => {
    return (
        <div
            className="h-52 w-60 mr-10 md:h-60 rounded-t-xl  cursor-pointer transition-transform duration-300 transform hover:scale-110" 
            style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}>

        </div>
    );
};


export default MovieCard;