import React from "react";
import { format } from "fecha";
import { PostData } from "../../loader";

export const Author: React.FC<{ post: PostData }> = (props) => {
  return (
    <div className="author-container">
      <div className="author">
        {props.post.authorPhoto && (
          <img
            src={props.post.authorPhoto}
            alt="Author picture"
            className="author-image"
            width="80"
            height="80"
          />
        )}
        <AuthorLines post={props.post} />
      </div>
    </div>
  );
};

export const AuthorLines: React.FC<{ post: PostData }> = (props) => {
  return (
    <div>
      <p className="author-line">
        {props.post.author && <span>{props.post.author}</span>}
      </p>
      <p className="author-line subtle">
        {props.post.datePublished
          ? format(new Date(props.post.datePublished), "MMMM Do, YYYY")
          : ""}
      </p>
    </div>
  );
};
