import React from 'react';
import Link from 'next/link';
import { ArticleType } from '@public/static/types/topics';
import { StarIcon } from '@components/atoms/icons';
import { articleImagePath } from '@public/static/api';

export const CarouselImage: React.FC<ArticleType> = ({
  image,
  id,
  title,
  short_description,
  author,
}: ArticleType) => {
  return (
    <div key={id} className="position-relative post-thumb">
      <div
        className="thumb-overlay img-hover-slide position-relative"
        style={{
          backgroundImage: `url("${articleImagePath + image}")`,
        }}
      >
        <Link href="/">
          <a className="img-link"></a>
        </Link>
        <StarIcon />
        <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
          <h3 className="post-title font-weight-900 mb-20">
            <Link href="/single">
              <a className="text-white">{title}</a>
            </Link>
          </h3>
          <p>{short_description}</p>
          <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
            <span className="post-on">{author ? author : 'Omerald'} </span>
            <span className="hit-count has-dot">23k views</span>
          </div>
        </div>
      </div>
    </div>
  );
};
