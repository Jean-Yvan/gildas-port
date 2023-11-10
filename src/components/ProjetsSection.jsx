"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Loader from "./Loader";
import VideoPlayer from "./VideoPlayer";
import Modal from "./Modal";
import CustomButton from "./CustomButton";

const ProjectsSection = ({projects}) =>{
    const [tag,setTag] = useState("Tout");
    const [showVideo, setShowVideo] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const router = useRouter();

    const handleTagChange = (newTag) =>{
      setTag(newTag);
    }

    const filteredProjects = projects.filter((project) =>
      project.tag.includes(tag)
    );

    const showVideoPlayer = (videoUrl) =>{
      setShowVideo(!showVideo);
      setCurrentVideoUrl(videoUrl);
    }

    
    return (
      <section id="projects" className="mb-5 relative w-full h-full">
        <h2 className="text-center text-4xl font-bold text-textLightActive dark:text-textDarkActive mt-4 mb-8 md:mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryLight-500 to-secondaryLight-500 dark:from-primaryDark-500 dark:to-secondaryDark-500 text-6xl">P</span>
          rojects
        </h2>
        { projects.length != 0 && <div className="text-textLightActive dark:text-textDarkActive flex flex-row justify-center items-center gap-2 py-6">
         
          <ProjectTag 
            onClick={handleTagChange} 
            name="Tout" 
            isSelected={tag=="Tout"} />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Film" 
            isSelected={tag=="Film"} /> 
          <ProjectTag 
            onClick={handleTagChange} 
            name="Reportage" 
            isSelected={tag=="Reportage"} /> 
        </div> }
        { 
          projects.length != 0 ? <div className="text-textLightActive dark:text-textDarkActive grid md:grid-cols-3 gap-8 md:gap-12 py-6">
            {
                filteredProjects.map((project) => <ProjectCard 
                    key={project.id} 
                    title={project.title}
                    description={project.description} 
                    imgUrl = {project.image}
                    videoHandler = {()=>showVideoPlayer(project.previewUrl)}
                    /> 
                )
            }
          </div> : <div className="w-full flex items-center justify-center"><Loader/></div>
        }
        {
          /*projects.length > 6 && <CustomButton title="Voir plus" handleClick={()=>{router.push("/movies")}} />*/
        }
        {
          showVideo && <Modal closeModal={()=>showVideoPlayer('')}>
            
            <VideoPlayer videoUrl = {currentVideoUrl} />
          </Modal> 
        }
      </section>
    );
};

export default ProjectsSection;