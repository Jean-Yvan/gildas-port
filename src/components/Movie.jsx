"use client";
import React from "react";
import MovieRow from "./MovieRow";
import Banner from "./Banner";

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
    return (
        <div>
            <MovieHeader imgUrl={movies[1].image} title={movies[1].title} description="I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                        Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
    I am excited to work with others to create amazing applications."/> 
            {/*<Banner imgUrl={movies[1].image} title={movies[1].title} description="I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                        Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
    I am excited to work with others to create amazing applications." />*/}
            <MovieRow title="Long Metrage" movies={movies}/>
            <MovieRow title="Court Metrage" movies={movies}/>
            <MovieRow title="Spot Publicitaire" movies={movies}/>
        </div>
    )
}

export default Movie;