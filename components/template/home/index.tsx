import { Layout } from '@components/common';
import { HomeBanner } from '@components/organism/banner';
import { FeaturedPost } from '@components/organism/home/featured';
import { ArticleType, TopicType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import { Trending } from '@components/organism/home/trending';
import Head from 'next/head';
import React from 'react';

export const HomeTemplate: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let article: Array<ArticleType> = redux.article.data;
  let topic: Array<TopicType> = redux.topics.data;

  return (
    <Layout topic={topic}>
      <Head>
        <title>Omerald | Home</title>
      </Head>
      <main>
        <HomeBanner />
        <FeaturedPost articles={article} />
        <Trending />
      </main>
    </Layout>
  );
};
