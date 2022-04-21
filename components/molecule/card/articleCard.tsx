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
import { useRouter } from 'next/router';

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

  let Router = useRouter();
  return (
    <div className="post-card-1 border-radius-10 hover-up">
      <div className="post-thumb thumb-overlay img-hover-slide position-relative">
        <Link href={`/article/post/${title}`}>
          <a className="img-link">
            <Image
              alt="articleImage"
              src={articleImagePath + image}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
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
          <SocialLinks />
        </ul>
      </div>
      <div className="post-content  p-30">
        <div className="entry-meta meta-0 font-small mb-10">
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              Router.push({
                pathname: '/article/filter',
                query: { data: getArticleTopics(health_topics, topicsList) },
              });
            }}
          >
            <span className="post-cat text-info">
              {getArticleTopics(health_topics, topicsList)}
            </span>
          </a>
        </div>
        <div className="d-flex post-card-content">
          <h5 className="post-title mb-20 text-xl font-weight-900">
            <Link href={`article/post/${title}`}>
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
  );
};

export default ArticleCard;

ArticleCard.defaultProps = {
  image:
    'https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp',
};
