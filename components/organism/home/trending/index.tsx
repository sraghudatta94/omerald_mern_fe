import React from 'react';
import {
  ArticleCard,
  AuthorCard,
  LatestCard,
  PopularCard,
  TrendingCard,
} from '@components/molecule/card';
import { useSelector } from 'react-redux';
import { ArticleType, TopicType } from '@public/static/types/topics';
import Link from 'next/link';
import { articleImagePath, topicImagePath } from '@public/static/api';
import Image from 'next/image';

export const Trending: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let article: Array<ArticleType> = redux.article.data;
  let articlesList: ArticleType[] = article ? article : [];
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
                  return <LatestCard key={article.id} {...article} />;
                })}
              </div>
            </div>
            <div className="pagination-area mb-30 wow fadeInUp animated">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item">
                    <Link href="/#">
                      <a className="page-link">
                        <i className="elegant-icon arrow_left"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link href="/#">
                      <a className="page-link">01</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/#">
                      <a className="page-link">02</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/#">
                      <a className="page-link">03</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/#">
                      <a className="page-link">04</a>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link href="/#">
                      <a className="page-link">
                        <i className="elegant-icon arrow_right"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
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
                      return (
                        <li
                          className="mb-30 wow fadeInUp animated"
                          key={topic.id}
                        >
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                              <Link href="/single">
                                <a className="color-white">
                                  <Image
                                    src={topicImagePath + topic.image}
                                    alt=""
                                    width="80"
                                    height="80"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="post-content media-body">
                              <p className="mb-10">
                                <Link href="/author">
                                  <a>
                                    <strong>{topic.title}</strong>
                                  </a>
                                </Link>
                                <p className="font-small text-muted has-dot">
                                  16 Jan 2020
                                </p>
                                <a href="#" className="text-blue">
                                  Find Articles
                                </a>
                              </p>
                            </div>
                          </div>
                        </li>
                      );
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
                          <Link href="/#">
                            <a
                              href={articleImagePath + article.image}
                              className="play-video"
                              data-animate="zoomIn"
                              data-duration="1.5s"
                              data-delay="0.1s"
                            >
                              <Image
                                className="border-radius-5"
                                src={articleImagePath + article.image}
                                alt=""
                                width="80"
                                height="80"
                              />
                            </a>
                          </Link>
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
