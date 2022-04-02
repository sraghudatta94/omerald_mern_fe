import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import { articleImagePath } from '@public/static/api';
import { SearchedArticlesType } from '@public/types';

const SearchedArticle: React.FC<SearchedArticlesType> = ({
  openSearch,
}: any) => {
  let redux = useSelector((state: any) => state);
  let articlesList: ArticleType[] = redux.article.data
    ? redux.article.data.slice(0, 4)
    : [];

  return (
    <div className="row mt-80">
      {articlesList
        .slice(0, 3)
        .map(({ id, title, image, short_description }) => {
          return (
            <div className="col-lg-4 col-md-6 " key={id}>
              <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <Image
                    src={articleImagePath + image}
                    width="80"
                    height="80"
                    alt="articleImage"
                  />
                </div>
                <div className="post-content media-body">
                  <h6 className="max-h-[20px] overflow-hidden">
                    <Link href={`/article/${title}`}>
                      <a onClick={openSearch}>{title}</a>
                    </Link>
                  </h6>
                  <p className="text-muted font-small my-2 max-h-[50px] h-[50px] overflow-hidden">
                    {short_description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchedArticle;
