import { Links } from '@components/atoms/link';
import { TopicType } from '@public/static/types/topics';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

export const TopicsList = () => {
  let redux = useSelector((state: any) => state);
  let topics: Array<TopicType> = redux.topics.data;
  let topicsList: TopicType[] = topics ? topics.slice(0, 5) : [];

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
                <Links href="/">{topic.title}</Links>
                <span className="post-count mx-2">{30}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
