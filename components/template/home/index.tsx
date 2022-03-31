import { Layout } from '@components/common';
import { HomeBanner } from '@components/organism/banner';
import { FeaturedPost } from '@components/organism/home/featured';
import { ArticleType, TopicType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import { Trending } from '@components/organism/home/trending';
import Head from 'next/head';
import React from 'react';
import { Categories } from '@components/organism/home/categories';

export const HomeTemplate: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let article: Array<ArticleType> = redux.article.data;

  return (
    <Layout>
      <Head>
        <title>Omerald | Home</title>
      </Head>
      <main>
        <HomeBanner />
        <FeaturedPost articles={article} />
        <Trending />
        <Categories />
      </main>
    </Layout>
  );
};
