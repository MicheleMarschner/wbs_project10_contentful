import React from "react";

import "./Header.css";

//scrollEffect --> certain heigth = change
//background Image opacity 0 || overlay opacity 1
//transition effect
// body container = transparent

export default function Header() {
  return (
    <div class="container-fluid">
      <figure>
        <div
          class="media"
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
                <text class="title" dx="50%" dy="2.5em">
                  ENJOY
                </text>
                <text class="title" dx="50%" dy="3.5em">
                  EVERY
                </text>
                <text class="title" dx="50%" dy="4.5em">
                  MOMENT
                </text>
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%" />
          </svg>
          <div class="body">
            <p>
              Enamel pin selvage health goth edison bulb, venmo glossier
              tattooed hella butcher cred iPhone.
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

/*
<div className="container-fluid mb-4">
      <div className="container">
        <img
          className="hero-img"
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2258469.jpg"
          alt="First slide"
        />
        <div className="overlay" />
        <div className="box">
          <div className="text-center">
            <h1>Cookbook 2020</h1>
            <p>Selection of the best recipes the market has to offer</p>
          </div>
        </div>
      </div>
    </div>
    */
