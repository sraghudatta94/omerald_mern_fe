import { formatDate } from '@public/functions/readTime';
import { articleImagePath } from '@public/static/api';
import { ArticleType } from '@public/static/types/topics';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularCard: React.FC<ArticleType> = ({ image, title, created_at }) => {
  return (
    <li className="mb-30 wow fadeInUp animated">
      <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
        <div className="post-content media-body">
          <h6 className="post-title mb-15 text-limit-2-row font-medium">
            <Link href={`article/post/${title}`}>
              <a>{title}</a>
            </Link>
          </h6>
          <div className="entry-meta meta-1 float-left font-x-small text-[11px]  text-uppercase">
            <span className="post-on">{formatDate(created_at)}</span>
            <span className="post-by has-dot">150 views</span>
          </div>
        </div>
        <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
          <Link href="/single">
            <a className="color-white">
              <Image
                src={articleImagePath + image}
                alt=""
                width="80"
                height="80"
              />
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PopularCard;
