import Head from "next/head";
import Markdown from "react-markdown";
import { loadMarkdownFile } from "../../loader";

const Home = (props: { imprint: string }) => {
  return (
    <div className="content">
      <Head>
        <title>Imprint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="introduction">
        <Markdown>{props.imprint}</Markdown>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const imprint = await loadMarkdownFile("imprint.md");

  const props = {
    imprint: imprint.contents,
  };

  return { props };
};
