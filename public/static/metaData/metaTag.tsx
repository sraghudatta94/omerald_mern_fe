import React from 'react';
import Head from 'next/head';

const MetaData = ({ title, content }) => {
  return (
    <Head>
      <title>Omerald | {title}</title>
      <meta name="title" content={`Omerald | ${title}`} />
      <meta name="description" content={content} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content={`Omerald | ${title}`} />
      <meta property="og:description" content={content} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/raghu369/image/upload/v1647776361/Omerald/assets/happy_birthday__Banner__Landscape__-removebg-preview_q5l8st.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content={`Omerald | ${title}`} />
      <meta property="twitter:description" content={content} />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/raghu369/image/upload/v1647776361/Omerald/assets/happy_birthday__Banner__Landscape__-removebg-preview_q5l8st.png"
      />
    </Head>
  );
};

export default MetaData;
