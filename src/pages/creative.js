import * as React from "react";
import CreativeGrid from "../components/creativeGrid";
import Layout from "../components/layout";
import PageIntro from "../components/pageIntro";

const CreativePage = () => {
  const introContent = {
    title: "Creative"
  };

  return (
    <main>
      <Layout>
        <PageIntro content={introContent} />
        <CreativeGrid />
      </Layout>
    </main>
  );
};

export default CreativePage;

export const Head = () => (
  <>
    <title>Duco | Creative</title>
    <meta name="description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Duco | Creative" />
    <meta property="og:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta property="og:image" content="../../static/share-image.jpg" />
    <meta property="og:url" content="https://www.theduco.com/" />
    <meta property="og:site_name" content="Duco" />

    <meta name="twitter:title" content="Duco | Business for good" />
    <meta name="twitter:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="twitter:image" content="../../static/share-image.jpg" />
  </>
);
