import {
  checkReadTime,
  formatDate,
  getArticleTopics,
} from '@public/functions/readTime';
import { articleImagePath } from '@public/static/api';
import { ArticleType, TopicType, UserType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import SocialLinks from '../social';
import Image from 'next/image';
import Link from 'next/link';

const LatestCard: React.FC<ArticleType> = ({
  image,
  title,
  created_at,
  health_topics,
  description,
}: any) => {
  let redux = useSelector((state: any) => state);
  let topicsList: TopicType[] = redux.topics ? redux.topics.data : [];
  return (
    <>
      <article className="hover-up-2 transition-normal wow fadeInUp animated">
        <div className="row mb-40 list-style-2">
          <div className="col-md-4">
            <div className="post-thumb position-relative border-radius-5">
              <div className="img-hover-slide border-radius-5 position-relative">
                <Link href={`article/post/${title}`}>
                  <a className="img-link">
                    <Image
                      alt="articleImage"
                      src={articleImagePath + image}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
                    />
                  </a>
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

                <SocialLinks />
              </ul>
            </div>
          </div>
          <div className="col-md-8 align-self-center">
            <div className="post-content">
              <div className="entry-meta meta-0 font-small mb-10">
                <Link href="/topics">
                  <a>
                    <span className="post-cat text-primary">
                      {getArticleTopics(health_topics, topicsList)}
                    </span>
                  </a>
                </Link>
              </div>
              <h5 className="post-title font-weight-900 mb-20">
                <Link href={`article/post/${title}`}>
                  <a>{title}</a>
                </Link>
                <span className="post-format-icon">
                  <i className="elegant-icon icon_star_alt"></i>
                </span>
              </h5>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <span className="post-on">{formatDate(created_at)}</span>
                <span className="time-reading has-dot">
                  {checkReadTime(description)}
                </span>
                <span className="post-by has-dot">3k views</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default LatestCard;
