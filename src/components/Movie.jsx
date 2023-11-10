"use client";
import React, {useState} from "react";
import MovieRow from "./MovieRow";


import MovieHeader from "./MovieHeader";

const movies = [
  {
    title: "Au fil du temps",
    description: "",
    image: "/images/projects/affiche1.jpg",
    tag: ["Tout", "Film"],
    previewUrl: "",
  },
  {
    title: "ELEGBARA La butte sacrée",
    description: "",
    image: "/images/projects/affiche2.jpg",
    tag: ["Tout", "Film"],
    previewUrl: "",
  },
  {
    title: "TUMEUR",
    description: "",
    image: "/images/projects/affiche3.jpg",
    tag: ["Tout", "Film"],
    previewUrl: "",
  },
  {
    title: "ASUKA DE L'INNOVATION",
    description: "",
    image: "/images/projects/affiche4.jpg",
    tag: ["Tout", "Reportage"],
    previewUrl: "",
  },
  {
    title: "XWLAKO trésor d'un sol",
    description: "",
    image: "/images/projects/affiche5.jpg",
    tag: ["Tout", "Film"],
    previewUrl: "",
  },
  {
    title: "Ni lui ni moi",
    description: "",
    image: "",
    tag: ["Tout", "Film"],
    previewUrl:"/images/projects/affiche5.jpg",
  },
  
];


const Movie = () =>{

    const [currentMovie, setCurrentMovie] = useState(movies[0]);

    return (
        <div>
            <MovieHeader imgUrl={currentMovie.image} title={currentMovie.title} description={currentMovie.description}/> 
            
            <MovieRow title="Long Metrage" movies={movies}/>
            <MovieRow title="Court Metrage" movies={movies}/>
            <MovieRow title="Spot Publicitaire" movies={movies}/>
        </div>
    )
}

export default Movie;