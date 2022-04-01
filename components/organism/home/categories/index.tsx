import React from 'react';

import { ArticleType, TopicType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import { CategoryCard } from '@components/molecule/card';

export const Categories = () => {
  let redux = useSelector((state: any) => state);

  let articlesList: ArticleType[] = redux.article.data
    ? redux.article.data
    : [];
  let topicList: TopicType[] = redux.topics.data ? redux.topics.data : [];

  return (
    <>
      <div className="site-bottom pt-50 pb-50">
        <div className="container w-[95vw] md:w-[65vw]">
          <div className="row">
            {topicList.slice(0, 3).map(topic => {
              return (
                <div className="col-lg-4 col-md-6" key={topic.id}>
                  <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated">
                    <div className="widget-header-2 position-relative mb-30">
                      <h5 className="mt-5 mb-30">{topic.title}</h5>
                    </div>
                    <div className="post-block-list post-module-1">
                      <ul className="list-post">
                        {articlesList
                          .filter(art =>
                            art.health_topics.includes(topic.id.toString())
                          )
                          .slice(0, 3)
                          .map(article => {
                            return (
                              <CategoryCard key={article.id} {...article} />
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
