import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import AddPost from "./addPost/AddPost";
import Posts from "./posts/Posts";
import SinglePost from "./single-post/SinglePost";

import "./App.css";

export default function App() {
  return (
    <div className="img-container container-fluid">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/:id" component={SinglePost} />
          <Route path="/addPost" component={AddPost} />
          <Route path="/" exact component={Posts} />
        </Switch>
      </div>
    </div>
  );
}
