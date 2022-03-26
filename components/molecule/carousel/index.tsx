import React from 'react';
import Link from 'next/link';
import { ArticleType } from '@public/static/types/topics';
import { StarIcon } from '@components/atoms/icons';

export const CarouselImage: React.FC<ArticleType> = ({
  image,
  url,
  title,
  author,
  description,
}: ArticleType) => {
  return (
    <div className="position-relative post-thumb">
      <div
        className="thumb-overlay img-hover-slide position-relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Link href={url}>
          <a className="img-link"></a>
        </Link>
        <StarIcon />
        <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
          <h3 className="post-title font-weight-900 mb-20">
            <Link href="/single">
              <a className="text-white">{title}</a>
            </Link>
          </h3>
          <p>{description}</p>
          <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
            <span className="post-on">{author}</span>
            <span className="hit-count has-dot">23k</span>
          </div>
        </div>
      </div>
    </div>
  );
};
