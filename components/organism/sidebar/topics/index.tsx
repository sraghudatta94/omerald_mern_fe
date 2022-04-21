import { Links } from '@components/atoms/link';
import { TopicType } from '@public/static/types/topics';
import React, { FC } from 'react';
import { getTopics } from '@public/static/api';
import { useFetch } from 'hooks/useFetch';

const TopicsList: FC = () => {
  let { apiData } = useFetch(getTopics);
  let topicsList: TopicType[] = apiData ? apiData.slice(0, 5) : [];

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
