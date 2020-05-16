import React from "react";
import ChildComment from './ChildComment';

const Comments = () => {
  return (
    <div className="comments-area">
      <div className="comments-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36"
          viewBox="0 0 24 24"
          width="36"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
        </svg>
        <h3>Comments:</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36"
          viewBox="0 0 24 24"
          width="36"
          className="testing123"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z" />
        </svg>
      </div>
      <ChildComment text="hiiiiii" />
      <ChildComment text="what is going on here" />
      <ChildComment text="just another comment to test" />
    </div>
  );
};

export default Comments;
