import { Links } from '@components/atoms/link';
import { getArticleTopics } from '@public/functions/readTime';
import { TopicType } from '@public/static/types/topics';
import React from 'react';
import { useSelector } from 'react-redux';
import SocialLinks from '../social';

const PostBottom = ({ health_topics }) => {
  let redux = useSelector((state: any) => state);
  let topicsList: TopicType[] = redux.topics ? redux.topics.data : [];

  return (
    <div>
      <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
        <div className="tags">
          <span>Tags: </span>
          <Links href="/topics">
            <a>{getArticleTopics(health_topics, topicsList)}</a>
          </Links>
        </div>
      </div>
      <div className="single-social-share clearfix wow fadeIn animated">
        <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
          <span className="hit-count mr-15">
            <i className="elegant-icon icon_comment_alt mr-5"></i>
            182 comments
          </span>
          <span className="hit-count mr-15">
            <i className="elegant-icon icon_like mr-5"></i>
            268 likes
          </span>
          <span className="hit-count">
            <i className="elegant-icon icon_star-half_alt mr-5"></i>
            Rate: 9/10
          </span>
        </div>
        <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
          <li className="list-inline-item text-muted">
            <span>Share this: </span>
          </li>
          <SocialLinks />
        </ul>
      </div>
    </div>
  );
};
export default PostBottom;
