//!!To DO: insert card expanding effect
// insert canvas that inserts white triangle
//overlay over image with header --> from bootstrap cookbook

import React from "react";
import { Link } from "react-router-dom";

import { usePosts } from "../../custom-hooks/";
//readableDate transforms the Date from original format "2017-05-12T00:00+02:00"
import "./Posts.css";

export default function Posts() {
  const [posts, isLoading] = usePosts(); // [response.items, false];
  posts.map(ele => console.log(ele.heroImage));

  const readableDate = dateString => new Date(dateString).toDateString();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;
    //<small> is just like <strong>
    return posts.map(post => (
      <div className="responsive-card-wrapper">
        <Link className="posts__post" key={post.slug} to={post.slug==="your-article"? "/addPost" : post.slug}>
          <div className="card responsive">
            {post.heroImage && (
              <div
                className="posts__post__img__container"
                style={{
                  background: `url(${
                    post.heroImage.fields.file.url
                  }) no-repeat`,
                  backgroundSize: "cover"
                }}
              >
                <h3 className="p-2">{post.title}</h3>
              </div>
            )}
            <div>
              <small
                style={{ color: "gray", display: "block", textAlign: "right" }}
              >
                <em>{readableDate(post.publishDate)}</em>
              </small>
              <p>{post.description}</p>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  //??needed to immediately invoke renderPosts ala ()
  return (
    <section className="posts__container">
      <h2>Articles</h2>

      <div className="posts">{renderPosts()}</div>
    </section>
  );
}

/*<img
                    className="post__intro__img"
                    src={post.heroImage.fields.file.url}
                    alt={post.title}
                  />*/

//to={post.slug === "your-article" ? "/addPost" : post.slug}
