import './storyDetails.css'
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch";


import React from 'react'

const StoryDetails = () => {
    const {id} = useParams();
    const {data: story, error, isPending} = useFetch("http://localhost:4000/stories/" + id);
    const history = useHistory();

    const handleClick= () => {
      fetch("http://localhost:4000/stories/" + story.id, {
         method: "DELETE"
    }).then(() => {
        history.push("/");
     })
    }

    return (
        <div className="story__details">
           { isPending && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {story && (
            <article>
              <h2>{story.title}</h2>
              <p>Written by {story.author}</p>
              <div>{story.body}</div>
              <button onClick={handleClick}>delete</button>
            </article>
           )}
        </div>
     );
  
}

export default StoryDetails


