import { ArticleCard } from '@components/molecule/card';
import { ArticleType } from '@public/static/types/topics';
import React from 'react';
import { PostCarousel } from '../carousel';
import { Tags } from '../tags';
import Link from 'next/link';

type Props = {
  articles?: ArticleType[];
};

export const FeaturedPost: React.FC<Props> = ({ articles }: any) => {
  let articlesList: ArticleType[] = articles ? articles : [];

  return (
    <div className="container w-[95vw] lg:w-[65vw]  ">
      <Tags />
      <div className="loop-grid mb-30">
        <div className="row">
          <div className="col-lg-8 mb-30">
            <PostCarousel articles={articlesList} />
          </div>

          {articlesList.slice(36, 40).map(article => {
            return <ArticleCard key={article.id} {...article} />;
          })}
        </div>
      </div>
    </div>
  );
};
