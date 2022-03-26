import { ArticleCard } from '@components/molecule/card';
import { articleList } from '@public/static/data/topics';
import React from 'react';
import { PostCarousel } from '../carousel';
import { Tags } from '../tags';

export const FeaturedPost: React.FC = () => {
  return (
    <div className="container w-[65vw]">
      <Tags />
      <div className="loop-grid mb-30">
        <div className="row">
          <section className="h-auto w-100 grid grid-cols-3 grid-rows-2 gap-5">
            <section className="h-[40vh] col-span-2">
              <PostCarousel />
            </section>
            {articleList.map(article => {
              return <ArticleCard {...article} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
};
