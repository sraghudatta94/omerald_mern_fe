import { Links } from '@components/atoms/link';
import {
  getAllArticleTopics,
  getArticleTopics,
} from '@public/functions/readTime';
import { TopicType, UserType } from '@public/static/types/topics';
import React from 'react';
import { useSelector } from 'react-redux';

const SimilarTopics = ({ health_topics }) => {
  let redux = useSelector((state: any) => state);
  let topicList: TopicType[] = redux.topics ? redux.topics.data : [];

  return (
    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
      <div className="post-block-list post-module-1">
        <div
          className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
          data-wow-delay="0.2s"
        >
          <div className="widget-header-2 position-relative mb-30">
            <h5 className="mt-5 mb-30">Health Topics()</h5>
          </div>
          <div className="tagcloud mt-50">
            {health_topics.split(',').map((topic, index) => {
              return (
                <Links href="/topics" key={index}>
                  <a className="tag-cloud-link ">
                    {getArticleTopics(topic, topicList)}
                  </a>
                </Links>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimilarTopics;
