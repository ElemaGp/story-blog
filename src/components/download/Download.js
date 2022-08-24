import "./download.css"
import Story from "../../assets/story.pdf"

import React from 'react'

const Download = () => {
  return (
    <div className="download__book">

    <div className="download__book-side">
        <a href= {Story} download  className="btn">Download Book</a>
    </div>
    
    </div>

  )
}

export default Download