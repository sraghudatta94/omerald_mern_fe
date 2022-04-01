import React from 'react';
import Link from 'next/link';
import { SocialLinks } from '../social';
import { ArticleType, TopicType } from '@public/static/types/topics';
import { articleImagePath, topicImagePath } from '@public/static/api';
import Image from 'next/image';
import { create } from 'domain';

export const ArticleCard: React.FC<ArticleType> = ({
  image,
  title,
  created_at,
}) => {
  return (
    <article
      className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
      data-wow-delay="0.2s"
    >
      <div className="post-card-1 border-radius-10 hover-up">
        <div
          className="post-thumb thumb-overlay img-hover-slide position-relative"
          style={{
            backgroundImage: `url(${articleImagePath + image})`,
          }}
        >
          <Link href="/single">
            <a className="img-link"></a>
          </Link>
          <span className="top-right-icon bg-success">
            <i className="elegant-icon icon_camera_alt"></i>
          </span>
          <ul className="social-share">
            <li>
              <Link href="/#">
                <a>
                  <i className="elegant-icon social_share"></i>
                </a>
              </Link>
            </li>
            <li>
              <SocialLinks />
            </li>
          </ul>
        </div>
        <div className="post-content p-30">
          <div className="entry-meta meta-0 font-small mb-10">
            <Link href="/topics">
              <a>
                <span className="post-cat text-info">Health</span>
              </a>
            </Link>
          </div>
          <div className="d-flex post-card-content">
            <h5 className="post-title mb-20 text-2xl font-weight-900">
              <Link href={`article/${title}`}>
                <a>{title}</a>
              </Link>
            </h5>
            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
              <span className="post-on">
                {created_at.toString().substring(0, 10)}
              </span>
              <span className="time-reading has-dot">12 mins read</span>
              <span className="post-by has-dot">23k views</span>
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
            <Link href={`article/${title}`}>
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

export const TrendingCard: React.FC<ArticleType> = ({
  image,
  title,
  short_description,
  created_at,
}: any) => {
  return (
    <>
      <article className="col-md-6 mb-40 wow fadeInUp  animated">
        <div className="post-card-1 border-radius-10 hover-up">
          <div
            className="post-thumb thumb-overlay img-hover-slide position-relative"
            style={{
              backgroundImage: `url(${articleImagePath + image})`,
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
              <Link href="/topics">
                <a>
                  <span className="post-cat text-info">Health</span>
                </a>
              </Link>
            </div>
            <div className="d-flex post-card-content">
              <h5 className="post-title mb-20 font-weight-900">
                <Link href="/single">
                  <a>{title}</a>
                </Link>
              </h5>
              <div className="post-excerpt mb-25 font-small text-muted">
                <p className="max-h-[40px] overflow-hidden">
                  {short_description}
                </p>
              </div>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <span className="post-on">
                  {created_at.toString().substring(0, 10)}
                </span>
                <span className="time-reading has-dot">12 mins read</span>
                <span className="post-by has-dot">23k views</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export const LatestCard: React.FC<ArticleType> = ({
  image,
  title,
  created_at,
}: any) => {
  return (
    <>
      <article className="hover-up-2 transition-normal wow fadeInUp animated">
        <div className="row mb-40 list-style-2">
          <div className="col-md-4">
            <div className="post-thumb position-relative border-radius-5">
              <div
                className="img-hover-slide border-radius-5 position-relative"
                style={{
                  backgroundImage: `url(${articleImagePath + image})`,
                }}
              >
                <Link href={`article/${title}`}>
                  <a className="img-link"></a>
                </Link>
              </div>
              <ul className="social-share">
                <li>
                  <Link href="/#">
                    <a>
                      <i className="elegant-icon social_share"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <SocialLinks />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 align-self-center">
            <div className="post-content">
              <div className="entry-meta meta-0 font-small mb-10">
                <Link href="/topics">
                  <a>
                    <span className="post-cat text-primary">Health</span>
                  </a>
                </Link>
              </div>
              <h5 className="post-title font-weight-900 mb-20">
                <Link href={`article/${title}`}>
                  <a>{title}</a>
                </Link>
                <span className="post-format-icon">
                  <i className="elegant-icon icon_star_alt"></i>
                </span>
              </h5>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <span className="post-on">
                  {created_at.toString().substring(0, 10)}
                </span>
                <span className="time-reading has-dot">11 mins read</span>
                <span className="post-by has-dot">3k views</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
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
