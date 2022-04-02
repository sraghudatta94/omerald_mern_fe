import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { ArticleType } from '@public/static/types/topics';

const HomeMetaTags = dynamic(() => import('@public/static/metaData'));
const Layout = dynamic(() => import('@components/common'));
const HomeBanner = dynamic(() => import('@components/organism/banner'));
const Trending = dynamic(() => import('@components/organism/home/trending'));
const FeaturedPost = dynamic(
  () => import('@components/organism/home/featured')
);

export const HomeTemplate: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let article: Array<ArticleType> = redux.article.data;

  return (
    <Layout>
      <Head>
        <title>Omerald Home</title>
        <HomeMetaTags />
      </Head>
      <main>
        <HomeBanner />
        <FeaturedPost articles={article} />
        {/* <Trending />  */}
      </main>
    </Layout>
  );
};
