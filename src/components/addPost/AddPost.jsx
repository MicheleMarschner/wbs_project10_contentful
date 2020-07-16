import React, { useState } from "react";
import { Link } from "react-router-dom";

import {savePost} from "../../contentful-mgmt";
import "./AddPost.css";



export default function AddPost() {
  const [userInput, setUserInput] = useState({});

  const handleChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let post = userInput;
    savePost({ post });
    setUserInput({});
  };

  return (
    <section className="post">
      <Link className="post__back" to="/">
        {"< Back"}
      </Link>

      <div>
        <div className="post__intro">
          <h2 className="post__intro__title">Enter New Blog Post</h2>
          <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Title</label>
          <input
            name="title"
            value={userInput.title || ""}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Short-description</label>
          <textarea
            name="description"
            value={userInput.description || ""}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Text</label>
          <textarea
            name="body"
            value={userInput.body || ""}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Image</label>
          <input 
            name="heroImage" 
            value={userInput.heroImage || ""}
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            size="30"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Author</label>
          <input
            name="author"
            value={userInput.author || ""}
            required
            onChange={handleChange}
          />
        </div>

        <button className="submit" type="submit">send</button>
      </form>
        </div>       
      </div>
    </section>
  );
}