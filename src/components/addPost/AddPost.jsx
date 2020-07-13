import React, { useState } from "react";
import * as contentfulMgmt from "contentful-management";

import "./AddPost.css";

const managementToken = "CFPAT-MmwiMN8jskUaXtik8XYd6eYNdUF9Axmp7nAnIf8jQtI";
const spaceId = "hpbqnf8cqvir";

export default function AddPosts() {
  const [userInput, setUserInput] = useState({
    title: "",
    description: ""
  });

  //TODO: gehört später als initial setup in contentful.js
  //I just added "new" to Promise but is this really right? Isn't like that in the original example
  async function savePost({ post }) {
    return new Promise(async (resolve, reject) => {
      const client = contentfulMgmt.createClient({
        accessToken: managementToken
      });

      const space = await client.getSpace(spaceId);
      const environment = await space.getEnvironment("master");
      environment
        .createEntry("blogPost", {
          fields: {
            title: { "en-US": `${post.title}` },
            slug: { "en-US": `${post.title}` },
            description: { "en-US": `${post.description}` },
            body: { "en-US": `${post.body}` },
            //author: { "en-US": `${post.author}` },
            publishDate: { "en-US": `${post.publishDate}` },
            tags: {}
          }
        })
        .then(entry => entry.publish())
        .then(asset => console.log(asset))
        .catch(console.error);
    });
  }

  const handleChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    console.log(userInput);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let date = new Date();
    setUserInput({ ...userInput, publishDate: date });

    let post = userInput;
    savePost({ post });
    setUserInput({});
  };

  return (
    <div className="post">
      <h2>Enter New Blog Post</h2>
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
          <input type="file" />
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

        <button type="submit">send</button>
      </form>
    </div>
  );
}
