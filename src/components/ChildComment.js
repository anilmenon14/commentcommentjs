import React from "react";

const ChildComment = props => {
  return (
    <div className="child-comment">
      <img
        className="pic-avatar"
        src="https://picsum.photos/40"
        alt="avatar"
      />
      <p> {props.text}</p>
    </div>
  );
};
export default ChildComment;
