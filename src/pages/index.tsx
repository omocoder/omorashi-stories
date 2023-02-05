import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { generateSitemap } from "../sitemap";
import Markdown from "react-markdown";
import { PostData, loadStories, loadMarkdownFile } from "../../loader";
import { PostCard } from "../components/PostCard";

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  stories: PostData[];
}) => {
  return (
    <div className="content">
      <Head>
        <title>Wet greetings from omorashi-stories!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Omostories | Omorashi stories | Stories about wetting pants and diapers"
        />
        <meta name="author" content="omocoder" />
        <meta name="keywords" content="omocoder, omorashi, pants wetting" />
        <meta name="copyright" content="omocoder" />
      </Head>

      <div className="introduction">
        <h1>Wet greetings from omorashi-stories!</h1>
        <Markdown>{props.introduction}</Markdown>
      </div>

      <div className="section">
        <h2>Stories</h2>
        <div className="post-card-container">
          {props.stories.map((story, j) => {
            return <PostCard post={story} key={j} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile("introduction.md");
  const stories = await loadStories();

  await generateRSS(stories);
  await generateSitemap();

  const props = {
    introduction: introduction.contents,
    stories,
  };

  return { props };
};
