import React from "react";
import Post from "./Post.js";
import Comments from "./Comments.js";

const RightPane = () => {
  return (
    <main id="right" className="page-content">
      <div className="page-header">
        <div>CommentCommentJS</div>
        <div>Right aligned icons</div>
      </div>
      <div className="main-post-area">
        <Post />
        <Comments />
      </div>
    </main>
  );
};

export default RightPane;
