import { ArticleCard } from '@components/molecule/card';
import { articleList } from '@public/static/data/topics';
import React from 'react';
import { PostCarousel } from '../carousel';
import { Tags } from '../tags';

export const FeaturedPost: React.FC = () => {
  return (
    <div className="container w-[90vw] max-w-[90vw] lg:w-[65vw] ">
      <Tags />
      <div className="loop-grid mb-30">
        <div className="row">
          <section className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-10">
            <section className="h-[40vh] md:col-span-2">
              <PostCarousel />
            </section>
            {articleList.map(article => {
              return <ArticleCard key={article.id} {...article} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
};
