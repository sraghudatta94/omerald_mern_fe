import { ArticleType, TopicType, UserType } from '@public/static/types/topics';
import { articleImagePath } from '@public/static/api';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  checkReadTime,
  formatDate,
  getArticleTopics,
  getAuthorName,
} from '@public/functions/readTime';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const SocialLinks = dynamic(() => import('../social/index'));

const ArticleCard: React.FC<ArticleType> = ({
  image,
  title,
  created_at,
  description,
  writer_id,
  health_topics,
}) => {
  let redux = useSelector((state: any) => state);
  let userList: UserType[] = redux.users ? redux.users.data : [];
  let topicsList: TopicType[] = redux.topics ? redux.topics.data : [];

  return (
    <article
      className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
      data-wow-delay="0.1s"
    >
      <div className="post-card-1 border-radius-10 hover-up">
        <div className="post-thumb thumb-overlay img-hover-slide position-relative">
          <Link href={`/article/${title}`}>
            <a className="img-link">
              <Image
                src={articleImagePath + image}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL="public/assets/imgs/blur/doctorCard.wepg"
              />
            </a>
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
            <li className="d-inline">
              <SocialLinks />
            </li>
          </ul>
        </div>
        <div className="post-content  p-30">
          <div className="entry-meta meta-0 font-small mb-10">
            <Link href="/topics">
              <a>
                <span className="post-cat text-info">
                  {getArticleTopics(health_topics, topicsList)}
                </span>
              </a>
            </Link>
          </div>
          <div className="d-flex post-card-content">
            <h5 className="post-title mb-20 text-xl font-weight-900">
              <Link href={`article/${title}`}>
                <a>{title}</a>
              </Link>
            </h5>
            <p>
              By <Link href="/">{getAuthorName(writer_id, userList)}</Link>
            </p>
            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
              <span className="post-on">{formatDate(created_at)}</span>
              <span className="time-reading has-dot">
                {checkReadTime(description)}
              </span>
              <span className="post-by has-dot">23k views</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

ArticleCard.defaultProps = {
  image:
    'https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp',
};
