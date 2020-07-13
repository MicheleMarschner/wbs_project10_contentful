//!!To DO: try to erive these songle posts from the Posts jsx to reduce code

import React from "react";
import { Link, useParams } from "react-router-dom";
import MD from "react-markdown";
//transforms description or body from markdown to normal text as we know
import { useSinglePost } from "../../custom-hooks";

import "./SinglePost.css";

export default function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);

  const readableDate = dateString => new Date(dateString).toDateString();

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <div>
        <div className="post__intro">
          <h2 className="post__intro__title">{post.title}</h2>
          <small className="post__intro__date">
            {readableDate(post.publishDate)}
          </small>
          <p className="post__intro__desc">{post.description}</p>
        </div>
        {post.heroImage && (
          <img
            className="post__intro__img"
            src={post.heroImage.fields.file.url}
            alt={post.title}
          />
        )}
        <div className="post__body">
          <MD source={post.body} />
        </div>
      </div>
    );
  };

  return (
    <div className="post">
      <Link className="post__back" to="/">
        {"< Back"}
      </Link>

      {renderPost()}
    </div>
  );
}
