import React from 'react';
import Link from 'next/link';
import { SocialLinks } from '../social';
import { Links } from '@components/atoms/link';
import { ArticleType } from '@public/static/types/topics';
export const ArticleCard: React.FC<ArticleType> = ({
  image,
  title,
  url,
  postingDate,
}) => {
  return (
    <article className=" wow fadeInUp animated">
      <div className="post-card-1 border-radius-10 w-[90vw] sm:w-[42vw] md:w-[25vw] lg:w-[20vw] hover-up">
        <div
          className="post-thumb thumb-overlay img-hover-slide position-relative"
          style={{
            backgroundImage: `url(${image})`,
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
          <div className="entry-meta meta-0 font-small mb-10">
            <Links href="/">Heart</Links>
          </div>
          <div className="d-flex post-card-content">
            <h5 className="post-title mb-20 font-weight-900">
              <Links href="/">
                <a className="text-xl">{title}</a>
              </Links>
            </h5>
            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
              <span className="post-on">{postingDate}</span>
              <span className="time-reading has-dot">8 mins read</span>
              <span className="post-by has-dot">12k views</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
