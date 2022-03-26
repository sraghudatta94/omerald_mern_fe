import { topicsList } from '@public/static/data/topics';
import React from 'react';

export const Tags = () => {
  return (
    <div className="hot-tags pt-30 pb-30 font-small align-self-center">
      <div className="widget-header-3">
        <div className="row align-self-center">
          <div className="col-md-4 align-self-center">
            <h5 className="widget-title">Featured posts</h5>
          </div>
          <div className="col-md-8 text-md-right font-small align-self-center">
            <p className="d-inline-block mr-5 mb-0">
              <i className="elegant-icon  icon_tag_alt mr-5 text-muted"></i>
              Hot tags:
            </p>
            <ul className="list-inline d-inline-block tags">
              {topicsList.slice(0, 4).map(topic => {
                return (
                  <li className="list-inline-item" key={topic.id}>
                    <a href="#"># {topic.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
