import React from "react";
import Post from "./Post.js";
import Comments from "./Comments.js";
import replyIcon from '../img/reply-icon.png'

const RightPane = () => {
  return (
    <main id="right" className="page-content">
      <div className="page-header">
        <div className="icon-pg-header">
          Comment<br></br>
        <span className="big-tab" />
          <span className="small-tab" />
          <span className="small-tab" />
          <img className="reply-icon" src={replyIcon} alt="down right arrow" />
          Comment<br></br>
        <span className="big-tab" />
          <span className="big-tab" />
          <span className="big-tab" />
          <span className="small-tab" />
          <span className="small-tab" />
          <img className="reply-icon" src={replyIcon} alt="down right arrow" />
          JS
        </div>
        <div className="right-aligned-pg-header">Information</div>
      </div>
      <div className="main-post-area">
        <Post />
        <Comments />
      </div>
    </main>
  );
};

export default RightPane;
