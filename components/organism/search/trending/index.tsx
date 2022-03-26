import { Links } from '@components/atoms/link';
import { topicsList } from '@public/static/data/topics';
import React from 'react';

export const Trending: React.FC = () => {
  return (
    <div className="row mt-80 text-center">
      <div className="col-12 font-small suggested-area">
        <h5 className="suggested font-heading mb-20 text-muted">
          <strong>Suggested keywords:</strong>
        </h5>
        <ul className="list-inline d-inline-block">
          {topicsList.map(topic => {
            return (
              <li className="list-inline-item">
                <Links href={topic.route}>
                  <a>{topic.name}</a>
                </Links>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
