import React, { useEffect, useRef, useState } from "react";

function Timer(props)
{
    const videoRef=useRef();
    
    function handleCase(){
        videoRef.current.play();
    };


    let path="files/5Seconds.mp4"
    console.log(path);
    useEffect(()=>{
        handleCase();
    },[props.n])

    return(
        <>
            <video className="Video" height="150" width="300" autoPlay muted alt="video" ref={videoRef}>
                <source src={path} />
            </video>
        </>
    )
}

export default Timer;   