import { Links } from '@components/atoms/link';
import { TopicType } from '@public/static/types/topics';
import React from 'react';
import { useSelector } from 'react-redux';

export const Trending: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let topics: Array<TopicType> = redux.topics.data;
  let topicsList: TopicType[] = topics ? topics.slice(0, 4) : [];

  return (
    <div className="row mt-80 text-center">
      <div className="col-12 font-small suggested-area">
        <h5 className="suggested font-heading mb-20 text-muted">
          <strong>Suggested keywords:</strong>
        </h5>
        <ul className="list-inline d-inline-block">
          {topicsList.map(topic => {
            return (
              <li key={topic.id} className="list-inline-item">
                <Links href={'/'}>
                  <a>{topic.title}</a>
                </Links>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
