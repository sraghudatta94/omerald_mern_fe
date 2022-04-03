import { TopicType } from '@public/static/types/topics';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Tags = () => {
  let redux = useSelector((state: any) => state);

  let topicList: TopicType[] = redux.topics.data ? redux.topics.data : [];

  return (
    <div className="hot-tags pt-30 pb-30 font-small align-self-center">
      <div className="widget-header-3">
        <div className="row align-self-center">
          <div className="col-md-4 px-0 md:px-2 align-self-center">
            <h5 className="widget-title">Featured posts</h5>
          </div>
          <div className="col-md-8 px-0 md:px-2 text-md-right font-small align-self-center">
            <p className="d-inline-block  my-2 md:mr-5 md:mb-0">
              <i className="elegant-icon  icon_tag_alt mr-5 text-muted"></i>
              Hot tags:
            </p>
            <ul className="list-inline d-inline-block tags my-1 md:m-0">
              {topicList.slice(0, 3).map((topic: TopicType) => {
                return (
                  <li className="list-inline-item" key={topic.id}>
                    <Link href={`/topics/${topic.title}`}>
                      <a>#{topic.title}</a>
                    </Link>
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

export default Tags;
