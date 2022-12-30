import React from 'react'
import "../styles/videocards.css"

const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z"/></svg>
const VideoCard = ({name,index,image}) => {
  return (
    <div className="videocards" style={{backgroundImage:`url(${image})`}}> 
        <a href="#/">{playButton}</a>
        <p>{name}</p>
    </div>


  )
}

export default VideoCard