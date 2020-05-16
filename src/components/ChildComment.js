import React from "react";

const ChildComment = props => {
  return (
    <div className="child-comment">
      <img src={require('../img/sun-solid.svg')} alt="avatar" />
      <p> {props.text}</p>
    </div>
  );
};
export default ChildComment;
