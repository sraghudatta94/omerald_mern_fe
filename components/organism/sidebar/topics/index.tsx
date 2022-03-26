import { Links } from '@components/atoms/link';
import { topicsList } from '@public/static/data/topics';
import Link from 'next/link';
import React from 'react';

export const TopicsList = () => {
  return (
    <div className="sidebar-widget widget_categories mb-50 mt-30">
      <div className="widget-header-2 position-relative">
        <h5 className="mt-5 mb-15">Hot topics</h5>
      </div>
      <div className="widget_nav_menu">
        <ul>
          {topicsList.map(topic => {
            return (
              <li className="cat-item cat-item-2" key={topic.id}>
                    <Links href={topic.route}>{topic.name}</Links>
                <span className="post-count mx-2">{topic.viewCount}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
