import React,{ createContext } from "react";
import Image from "next/image";
import MovieCard from "./MovieCard";

export const HandlerContext = createContext();

const MovieRow = ({movies,title,handleClick}) =>{
    return (
        <div className="p-10">
            <h2 className="text-white ml-10 text-xl text-bold">{title}</h2>

            <div className="flex overflow-x-scroll overflow-y-hidden p-10">
                {
                    movies.map((project) =>(
                        <MovieCard
                        key={project.id}
                        imgUrl = {project.image}
                        previewUrl = {project.previewUrl}
                        />
                    
                    ))
                }
            </div>
        </div>

    );
};

export default MovieRow;