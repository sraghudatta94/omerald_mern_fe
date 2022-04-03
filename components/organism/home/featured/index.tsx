import React from 'react';
import dynamic from 'next/dynamic';
import { FeaturedPostType } from '@public/types';
import { ArticleType } from '@public/static/types/topics';

const Tags = dynamic(() => import('../tags/index'));
const PostCarousel = dynamic(() => import('../carousel/index'));
const ArticleCard = dynamic(
  () => import('@components/molecule/card/articleCard')
);

const FeaturedPost: React.FC<FeaturedPostType> = ({
  articles,
}: FeaturedPostType) => {
  let articlesList: ArticleType[] = articles ? articles : [];

  return (
    <div className="container w-[95vw] lg:w-[65vw]  ">
      <Tags />
      <div className="loop-grid mb-30">
        <div className="row">
          <div className="col-lg-8 mb-30">
            <PostCarousel articles={articlesList} />
          </div>
          {articlesList.slice(33, 40).map(article => {
            return <ArticleCard key={article.id} {...article} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
