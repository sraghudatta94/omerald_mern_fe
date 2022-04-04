import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { ArticleType, TopicType } from '@public/static/types/topics';
import { articleImagePath, topicImagePath } from '@public/static/api';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';

const TrendingCard = dynamic(
  () => import('@components/molecule/card/trendingCard')
);
const LatestArticlesCard = dynamic(
  () => import('@components/molecule/card/latestArticleCard')
);
const PopularCard = dynamic(
  () => import('@components/molecule/card/popularCard')
);
const TopicsCard = dynamic(
  () => import('@components/molecule/card/topicsCard')
);

const Pagination = dynamic(() => import('@components/molecule/pagination'));

const Trending: React.FC = (): ReactElement => {
  let redux = useSelector((state: any) => state);
  let articlesList: ArticleType[] = redux.article.data
    ? redux.article.data
    : [];
  let topicList: TopicType[] = redux.topics.data ? redux.topics.data : [];

  return (
    <div className="bg-grey pt-50 pb-50">
      <div className="container w-[95vw] lg:w-[65vw]">
        <div className="row">
          <div className="col-lg-8">
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                <h5 className="mt-5 mb-30">Trending Blogs</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <div className="row">
                  {articlesList.slice(14, 18).map(article => {
                    return <TrendingCard key={article.id} {...article} />;
                  })}
                </div>
              </div>
            </div>
            <div className="post-module-3">
              <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">Latest Blogs</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                {articlesList.slice(34, 38).map(article => {
                  return <LatestArticlesCard key={article.id} {...article} />;
                })}
              </div>
            </div>
            <Link href="/article">
              <a>
                <button className="btn bg-blue-600 text-white">See More</button>
              </a>
            </Link>
          </div>
          <div className="col-lg-4">
            <div className="widget-area">
              <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Most popular</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    {articlesList.slice(31, 37).map(article => {
                      return <PopularCard key={article.id} {...article} />;
                    })}
                  </ul>
                </div>
              </div>
              <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Topics</h5>
                </div>
                <div className="post-block-list post-module-2">
                  <ul className="list-post">
                    {topicList.slice(1, 4).map(topic => {
                      return <TopicsCard key={topic.id} {...topic} />;
                    })}
                  </ul>
                </div>
              </div>
              <div className="sidebar-widget widget_instagram wow fadeInUp animated">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Pinterest</h5>
                </div>
                <div className="instagram-gellay">
                  <ul className="insta-feed">
                    {articlesList.slice(25, 29).map(article => {
                      return (
                        <li key={article.id}>
                          <a href="/https://in.pinterest.com/mednologies/_created/">
                            <Image
                              className="border-radius-5"
                              src={articleImagePath + article.image}
                              alt="images"
                              width="80"
                              height="80"
                              placeholder="blur"
                              blurDataURL="https://res.cloudinary.com/raghu369/image/upload/v1648933960/Omerald/assets/doctor_xidsp3.webp"
                            />
                          </a>  
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
