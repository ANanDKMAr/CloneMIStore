import React from 'react'
import VideoCard from "./VideoCard.js"
import "../styles/video.css"

const Videos = ({videos}) => {
  return (
    <div className="video">
        {videos.map((item,index)=>(
            <VideoCard index = {item.index} image ={item.image} name={item.name} key={item.image}/>
        ))}
    </div>
  )
}

export default Videos