import React from 'react';
import Link from 'next/link';
import { SocialLinks } from '../social';
import { Links } from '@components/atoms/link';
import { ArticleType, TopicType } from '@public/static/types/topics';
import { imagePath } from '@public/static/api';
import Image from 'next/image';

export const ArticleCard: React.FC<ArticleType> = ({
  image,
  title,
  topic,
  created_at,
}) => {
  return (
    <article className=" wow fadeInUp animated">
      <div className="post-card-1 border-radius-10 w-[90vw] sm:w-[42vw] md:w-[25vw] lg:w-[20vw] hover-up">
        <div
          className="post-thumb thumb-overlay img-hover-slide position-relative"
          style={{
            backgroundImage: `url("http://omerald.com/public/uploads/articleimages/${image}")`,
          }}
        >
          <Link href="/single">
            <a className="img-link"></a>
          </Link>
          <ul className="social-share">
            <li>
              <Link href="/#">
                <a>
                  <i className="elegant-icon social_share"></i>
                </a>
              </Link>
            </li>
            <SocialLinks />
          </ul>
        </div>
        <div className="post-content p-30">
          <div className="entry-meta meta-0 font-lg text-green-700 font-semibold mb-10">
            <Links href="/">{topic ? topic[0] : 'Health'}</Links>
          </div>

          <div className="d-flex post-card-content">
            <h6 className="post-title mb-20 font-weight-900">
              <Links href="/">
                <a className="text-lg">{title}</a>
              </Links>
            </h6>

            <div className="entry-meta meta-1 float-left text-uppercase">
              <span className="post-on text-xs">
                {created_at.toString().substring(0, 10)}
              </span>
              <span className="time-reading has-dot text-xs">8 mins read</span>
              <span className="post-by has-dot text-xs">12k views</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const TrendingCard: React.FC<ArticleType> = ({
  image,
  title,
  topic,
  created_at,
  short_description,
}) => {
  return (
    <article className=" wow fadeInUp animated">
      <div className="post-card-1 border-radius-10 w-[90vw] sm:w-[42vw] md:w-[25vw] lg:w-[20vw] hover-up">
        <div
          className="post-thumb thumb-overlay img-hover-slide position-relative"
          style={{
            backgroundImage: `url("http://omerald.com/public/uploads/articleimages/${image}")`,
          }}
        >
          <Link href="/single">
            <a className="img-link"></a>
          </Link>
          <ul className="social-share">
            <li>
              <Link href="/#">
                <a>
                  <i className="elegant-icon social_share"></i>
                </a>
              </Link>
            </li>
            <SocialLinks />
          </ul>
        </div>
        <div className="post-content p-30">
          <div className="entry-meta meta-0 font-lg text-green-700 font-semibold mb-10">
            <Links href="/">{topic ? topic[0] : 'Health'}</Links>
          </div>

          <div className="d-flex post-card-content">
            <h6 className="post-title mb-20 font-weight-900">
              <Links href="/">
                <a className="text-lg">{title}</a>
              </Links>
            </h6>

            <p className="mb-[15px] max-h-[60px] overflow-hidden">
              {short_description}
            </p>

            <div className="entry-meta meta-1 mt-30 float-left text-uppercase">
              <span className="post-on text-xs">
                {created_at.toString().substring(0, 10)}
              </span>
              <span className="time-reading has-dot text-xs">8 mins read</span>
              <span className="post-by has-dot text-xs">12k views</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const PopularCard: React.FC<ArticleType> = ({
  image,
  title,
  created_at,
}) => {
  return (
    <li className="mb-30 wow fadeInUp animated">
      <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
        <div className="post-content media-body">
          <h6 className="post-title mb-15 text-limit-2-row font-medium">
            <Link href="/single">
              <a>{title}</a>
            </Link>
          </h6>
          <div className="entry-meta meta-1 float-left font-x-small text-[11px]  text-uppercase">
            <span className="post-on">
              {created_at.toString().substring(0, 10)}
            </span>
            <span className="post-by has-dot">150 views</span>
          </div>
        </div>
        <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
          <Link href="/single">
            <a className="color-white">
              <Image src={imagePath + image} alt="" width="80" height="80" />
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
};

export const AuthorCard: React.FC<TopicType> = ({
  title,
  image,
  created_at,
}) => {
  return (
    <li className="mb-30 wow fadeInUp animated">
      <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
        <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
          <Link href="/single">
            <a className="color-white">
              <Image src={imagePath + image} alt="" width="80" height="80" />
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
