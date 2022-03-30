import React from 'react';
import Link from 'next/link';
import { SocialLinks } from '../social';
import { Links } from '@components/atoms/link';
import { ArticleType } from '@public/static/types/topics';
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
            <h5 className="post-title mb-20 font-weight-900">
              <Links href="/">
                <a className="text-xl">{title}</a>
              </Links>
            </h5>
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
