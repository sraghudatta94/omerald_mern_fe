import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '../social';
import { ArticleType, TopicType } from '@public/static/types/topics';
import { articleImagePath, topicImagePath } from '@public/static/api';
import { formatDate } from '@public/functions/readTime';



export const AuthorCard: React.FC<TopicType> = ({
  title,
  image,
  created_at,
}) => {
  return (
    <li className="mb-30 wow fadeInUp animated">
      <div className="d-flex bg-white has-border p-15 hover-up transition-normal border-radius-5">
        <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
          <Link href="/single">
            <a className="color-white">
              <Image
                src={topicImagePath + image}
                alt="topicImage"
                width="80"
                height="80"
              />
            </a>
          </Link>
        </div>
        <div className="post-content media-body">
          <p className="mb-10">
            <Link href="/author">
              <a>
                <strong>{title}</strong>
              </a>
            </Link>
          </p>
          <p className="font-small text-muted has-dot">
            {created_at.toString().substring(0, 10)}
          </p>
        </div>
      </div>
    </li>
  );
};

export const CategoryCard: React.FC<ArticleType> = ({
  image,
  title,
  created_at,
}: any) => {
  return (
    <li className="mb-30">
      <div className="d-flex hover-up-2 transition-normal">
        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
          <Link href="/single">
            <a className="color-white">
              <Image
                src={articleImagePath + image}
                alt="articleImage"
                width="80"
                height="80"
              />
            </a>
          </Link>
        </div>
        <div className="post-content media-body">
          <h6 className="post-title mb-15 text-limit-2-row font-medium">
            <Link href="/single">
              <a>{title}</a>
            </Link>
          </h6>
          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
            <span className="post-on">
              {created_at.toString().substring(0, 10)}
            </span>
            <span className="post-by has-dot">13k views</span>
          </div>
        </div>
      </div>
    </li>
  );
};

