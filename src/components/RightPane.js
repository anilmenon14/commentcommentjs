import React from "react";
import Post from "./Post.js";
import Comments from "./Comments.js";

const RightPane = () => {
  return (
    <main id="right" className="page-content">
      <div className="page-header">
        <div>
          Comment<br></br>
          <span className="tab" />
          <span className="tab" />
          <img className="img1" src="/src/img/reply-icon.png" alt=""/>
          <span className="tab" />
          Comment<br></br>
          <span className="tab" />
          <span className="tab" />
          <span className="tab" />
          <span className="tab" />
          <span className="tab" />
          <span className="tab" />

          JS
        </div>
        <div>Information</div>
      </div>
      <div className="main-post-area">
        <Post />
        <Comments />
      </div>
    </main>
  );
};

export default RightPane;
