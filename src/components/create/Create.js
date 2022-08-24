import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './create.css';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Godspower Elema");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const story = {title, body, author};

    setIsPending(true);

    fetch("http://localhost:4000/stories", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(story)
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });

  }

  return (
    <div className="create">
      <h2>Add a New Story</h2>

    <form className="create__form" onSubmit={handleSubmit}>
      
      <label>Story Title:</label>
      <input 
        type="text"
        required
        placeholder='Story Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

      <label>Write Your Story</label>
      <textarea
        required
        placeholder='Write Your Story'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <label>Story Author</label>
      <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >

        <option value="Godspower Elema">Godspower Elema</option>
        <option value="John Grisham">John Grisham</option>
      </select>
      
      {!isPending && <button className='btn'>Add Story</button>}
      {isPending && <button disabled className='btn'>Adding Story...</button>}
    </form>

    </div>
  )
}

export default Create