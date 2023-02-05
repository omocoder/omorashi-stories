import React from "react";
import { format } from "fecha";
import { PostData } from "../../loader";
import { Tag } from "./Tag";

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <div className="post-card">
      <div className="post-card-inner">
        {post.thumbnailPhoto && (
          <a
            className="post-card-thumbnail"
            style={{ backgroundImage: `url(${post.thumbnailPhoto})` }}
            href={`/omorashi-stories/${post.path}/`}
            aria-label={`${post.title} - Post`}
          />
        )}
        <div className="post-card-title">
          {post.title && <h3>{post.title}</h3>}
          {false && post.subtitle && <p>{post.subtitle}</p>}
          <p>
            {props.post.datePublished
              ? format(new Date(props.post.datePublished), "MMMM Do, YYYY")
              : ""}
          </p>
          <div className="flex-spacer"> </div>
          {
            <div className="tag-container">
              {post.tags &&
                (post.tags || []).map((tag) => <Tag tag={tag} key={tag} />)}
            </div>
          }
        </div>
      </div>
    </div>
  );
};
