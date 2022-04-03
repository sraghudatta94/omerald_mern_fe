import Head from 'next/head';
import React from 'react';
import { articleImagePath } from '../api';

const SingleArticleMetaTag = ({ title, short_description, image }) => {
  return (
    <Head>
      <title>Omerald | {title}</title>
      <meta name="title" content={`Omerald | ${title}`} />
      <meta name="description" content={short_description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://webUrl/" />
      <meta property="og:title" content={`Omerald | ${title}`} />
      <meta property="og:description" content={short_description} />
      <meta property="og:image" content={articleImagePath + image} />
    </Head>
  );
};

export default SingleArticleMetaTag