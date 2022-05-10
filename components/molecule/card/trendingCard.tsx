import {
  formatDate,
  getArticleTopics,
  getAuthorName,
} from '@public/functions/readTime';
import { articleImagePath } from '@public/static/api';
import { ArticleType, TopicType, UserType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import SocialLinks from '../social';
import Image from 'next/image';
import Link from 'next/link';

const TrendingCard: React.FC<ArticleType> = ({
  image,
  title,
  short_description,
  created_at,
  health_topics,
  writer_id,
  slug
}: any) => {
  let redux = useSelector((state: any) => state);
  let userList: UserType[] = redux.users ? redux.users.data : [];
  let topicsList: TopicType[] = redux.topics ? redux.topics.data : [];
  return (
    <>
      <article className="col-md-6 mb-40 wow fadeInUp  animated">
        <div className="post-card-1 border-radius-10 hover-up">
          <div className="post-thumb thumb-overlay img-hover-slide position-relative">
            <Link href="/single">
              <a className="img-link">
                <Image
                  alt="articleImage"
                  src={articleImagePath + image}
                  width="400"
                  height="400"
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
                />
              </a>
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
                  <span className="post-cat text-info">
                    {getArticleTopics(health_topics, topicsList)}
                  </span>
                </a>
              </Link>
            </div>
            <div className="d-flex post-card-content">
              <h5 className="post-title mb-20 font-weight-900">
                <Link href={`article/post/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h5>

              <div className="post-excerpt mb-25 font-small text-muted">
                <p className="max-h-[40px] overflow-hidden">
                  {short_description}
                </p>
              </div>
              <p className="mb-2">
                By <Link href="/">{getAuthorName(writer_id, userList)}</Link>
              </p>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <span className="post-on">{formatDate(created_at)}</span>
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

export default TrendingCard;
