import React from "react";
import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

SEO.defaultProps = {
  title: "Ernest B. Shongwe | Certified Software Engineeer",
  description: "Ernest B. Shongwe",
  keywords: "React, Next.js, SPA, SEO, Ai, DevSecOps",
};

export default SEO;
