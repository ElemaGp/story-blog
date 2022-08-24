import React from 'react'
import "./readstories.css";
import {GiChicken} from 'react-icons/gi'
import { Link } from 'react-router-dom';

const ReadStories = ({ stories, title }) => {
  
  return (
    <div className='read__stories'>
      <div className="read__heading">
          <h2 id='read__stories'>{title}</h2>
          <a href="#">top</a>
      </div>
          
          {stories.map((story)=> (
                <div className="story__preview" key={story.id} >
                  <div className="story__peek">
                    <Link to= {`/stories/${story.id}`}>
                    <h2>{story.title}</h2>
                    <p>Written by {story.author} </p>
                    </Link>
                  </div>
                <div className="story__icon">
                  <GiChicken />
                </div>
                </div>
          ))}
      
    </div>
    
  )
}

export default ReadStories
              
              
             

             


      