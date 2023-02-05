import React from "react";
import { Author } from "./Author";
import { PostData } from "../../loader";
import { PostMeta } from "./PostMeta";
import { Tag } from "./Tag";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  const keywords = post.tags?.join(",");
  return (
    <div>
      <Head>
        {post.tags && <meta name="keywords" content={keywords} />}
        {post.description && (
          <meta name="description" content={post.description} />
        )}
      </Head>
      <div className="blog-post">
        <PostMeta post={post} />
        {post.bannerPhoto && (
          <img
            className="blog-post-image"
            src={post.bannerPhoto}
            alt="Post banner photo"
          />
        )}

        <div className="blog-post-title">
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
          <br />
          <Author post={post} />
          {
            <div className="tag-container">
              {post.tags &&
                (post.tags || []).map((tag) => <Tag tag={tag} key={tag} />)}
            </div>
          }
        </div>

        <div className="blog-post-content">
          <ReactMarkdown remarkPlugins={[gfm]} components={{ code: CodeBlock }}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
