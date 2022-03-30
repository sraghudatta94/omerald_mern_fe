import { ArticleCard } from '@components/molecule/card';
import { ArticleType } from '@public/static/types/topics';
import React from 'react';
import { PostCarousel } from '../carousel';
import { Tags } from '../tags';

type Props = {
  articles?: ArticleType[];
};

export const FeaturedPost: React.FC<Props> = ({ articles }: any) => {
  let articlesList: ArticleType[] = articles ? articles : [];

  return (
    <div className="container w-[90vw] max-w-[90vw] lg:w-[65vw] ">
      <Tags />
      <div className="loop-grid mb-30">
        <div className="row">
          <section className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-10">
            <section className="h-[40vh] md:col-span-2">
              <PostCarousel articles={articles} />
            </section>
            {articlesList.slice(0, 4).map((article: ArticleType) => {
              return <ArticleCard key={article.id} {...article} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
};
