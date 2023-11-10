import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({videoUrl}) =>{

    if(videoUrl.includes("drive.google.com")){
        return <FramePlayer url={videoUrl} />
    }
    return (
        <ReactPlayer url={videoUrl} />
    );
}

const FramePlayer = ({url})=>{
    return <iframe width={400} height={400} src={url}></iframe>
}

export default VideoPlayer;