import { useSelector } from 'react-redux';
import { Links } from '@components/atoms/link';
import React from 'react';
import dynamic from 'next/dynamic';
import ArticleMetaTag from '@public/static/metaData/articleMeta';

const Layout = dynamic(() => import('@components/common'));
const Pagination = dynamic(() => import('@components/molecule/pagination'));
const PostCarousel = dynamic(
  () => import('@components/organism/home/carousel')
);
const ArticleCard = dynamic(
  () => import('@components/molecule/card/articleCard')
);

const ArticleTemplate = () => {
  let redux = useSelector((state: any) => state);
  let articleList = redux.article.data ? redux.article.data : [];

  return (
    <Layout>
      <ArticleMetaTag />
      <main>
        <div className="w-[95vw] lg:w-[65vw] m-auto">
          <div className="archive-header mt-[10vh] text-center">
            <div className="container">
              <h2 className="font-weight-900">Article</h2>
              <div className="breadcrumb">
                <Links href="/">
                  <a rel="nofollow">Article</a>
                </Links>
                <span></span> All
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
          </div>
          <div className="container">
            <div className="loop-grid mb-30">
              <div className="row">
                <div className="col-lg-8 mb-30">
                  <PostCarousel articles={articleList} />
                </div>
                {articleList.slice(33, 40).map(article => {
                  return <ArticleCard key={article.id} {...article} />;
                })}
              </div>

              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ArticleTemplate;
