import React from 'react';
import dynamic from 'next/dynamic';
import { TopicType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';

const TopicListInline = dynamic(() => import('@components/molecule/link'));

const TrendingTopics: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let topicsList: TopicType[] = redux.topics.data
    ? redux.topics.data.slice(0, 4)
    : [];

  return (
    <div className="row mt-80 text-center">
      <div className="col-12 font-small suggested-area">
        <h5 className="suggested font-heading mb-20 text-muted">
          <strong>Suggested keywords:</strong>
        </h5>
        <ul className="list-inline d-inline-block">
          <TopicListInline topicsList={topicsList} />
        </ul>
      </div>
    </div>
  );
};

export default TrendingTopics;
