import React from "react";
import glob from "glob";
import { BlogPost } from "../../components/BlogPost";
import { loadPost } from "../../../loader";

function Post(props: any) {
  const { post } = props;
  return <BlogPost post={post} />;
}

export const getStaticPaths = () => {
  const stories = glob.sync("./md/stories/*.md");
  const slugs = stories.map((file: string) => {
    const popped = file.split("/").pop();
    if (!popped) {
      throw new Error(`Invalid story path: ${file}`);
    }
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map((slug) => `/stories/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await loadPost(`stories/${params.story}.md`);
  return { props: { post } };
};

export default Post;
