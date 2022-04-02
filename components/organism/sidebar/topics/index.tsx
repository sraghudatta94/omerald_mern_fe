import { Links } from '@components/atoms/link';
import { TopicType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import { TopicsListType } from '@public/types';
import React, { FC } from 'react';

const TopicsList: FC = () => {
  let redux = useSelector((state: any) => state);

  let topicsList: TopicType[] = redux.topics.data
    ? redux.topics.data.slice(0, 5)
    : [];

  return (
    <div className="sidebar-widget widget_categories mb-50 mt-30">
      <div className="widget-header-2 position-relative">
        <h5 className="mt-5 mb-15">Hot topics</h5>
      </div>
      <div className="widget_nav_menu">
        <ul>
          {topicsList.map(({ title, id }) => {
            return (
              <li className="cat-item cat-item-2" key={id}>
                <Links href={`/topics/${title}`}>{title}</Links>
                <span className="post-count mx-2">{30}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TopicsList;
