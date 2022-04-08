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
          <article
            className="grid grid-cols-3 gap-5 mb-30 wow fadeInUp animated"
            data-wow-delay="0.1s"
          >
            <div className="col-span-2 mb-30">
              <PostCarousel articles={articlesList} />
            </div>

            {articlesList.slice(33, 40).map(article => {
              return <ArticleCard key={article.id} {...article} />;
            })}
          </article>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
