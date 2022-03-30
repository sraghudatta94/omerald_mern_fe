import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import { imagePath } from '@public/static/api';

export const Article: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let article: Array<ArticleType> = redux.article.data;
  let articlesList: ArticleType[] = article ? article.slice(0, 4) : [];

  return (
    <div className="row mt-80">
      {articlesList.slice(0, 3).map(article => {
        return (
          <div className="col-lg-4 col-md-6 " key={article.id}>
            <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                <Image
                  src={imagePath + article.image}
                  width="80"
                  height="80"
                  alt=""
                />
              </div>
              <div className="post-content media-body">
                <h6 className="max-h-[20px] overflow-hidden">
                  <Link href="/category">
                    <a>{article.title}</a>
                  </Link>
                </h6>
                <p className="text-muted font-small my-2 max-h-[50px] h-[50px] overflow-hidden">
                  {article.short_description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
