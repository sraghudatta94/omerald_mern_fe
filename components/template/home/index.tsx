import { Layout } from '@components/common';
import { HomeBanner } from '@components/organism/banner';
import { FeaturedPost } from '@components/organism/home/featured';
import Head from 'next/head';
import React from 'react';

export const HomeTemplate = () => {
  return (
    <Layout>
      <Head>
        <title>Omerald | Home</title>
      </Head>
      <main>
        <HomeBanner />
        <FeaturedPost />
      </main>
    </Layout>
  );
};
