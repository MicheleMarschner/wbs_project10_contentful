import React from "react";

import "./Header.css";

//scrollEffect --> certain heigth = change

export default function Header() {
  return (
    <div className="container-fluid">
      <figure>
        <div
          className="media"
          style={{
            backgroundImage:
              "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_15.png)"
          }}
        />
        <figcaption>
          <svg
            viewBox="0 0 200 200"
            version="1.1"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                <text className="title" dx="50%" dy="2.5em">
                  BLOG
                </text>
                <text className="title" dx="50%" dy="3.5em">
                  EXAMPLE
                </text>
                <text className="title" dx="50%" dy="4.5em">
                  GROUP 1
                </text>
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%" />
          </svg>
          <div className="body">
            <p>
              This Blog can be updated via contentful. Users can also add blog posts in the app itselfs.
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
