import React from 'react';
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

const HomeTemplate: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let article: Array<ArticleType> = redux.article.data;

  return (
    <Layout>
      <HomeMetaTags />
      <main>
        <HomeBanner />
          <FeaturedPost articles={article} />
          <Trending />
      </main>
    </Layout>
  );
};

export default HomeTemplate;
