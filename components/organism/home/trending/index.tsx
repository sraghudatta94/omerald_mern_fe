import React from 'react';
import {
  AuthorCard,
  PopularCard,
  TrendingCard,
} from '@components/molecule/card';
import { useSelector } from 'react-redux';
import { ArticleType, TopicType } from '@public/static/types/topics';
import Link from 'next/link';

export const Trending: React.FC = () => {
  let redux = useSelector((state: any) => state);
  let article: Array<ArticleType> = redux.article.data;
  let articlesList: ArticleType[] = article ? article : [];
  let topicList: TopicType[] = redux.topics.data ? redux.topics.data : [];

  return (
    <div className="bg-grey pt-50 pb-50">
      <div className="container w-[65vw]">
        <div className="row">
          <div className="col-lg-8">
            {/* Trending Blogs */}
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                <h5 className="mt-5 mb-30">Trending Blogs</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <div className="row gap-10">
                  {articlesList.slice(26, 30).map((article: ArticleType) => {
                    return <TrendingCard key={article.id} {...article} />;
                  })}
                </div>
              </div>
            </div>

            {/* Lates Blogs */}
            <div className="post-module-3 mt-50">
              <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">Latest posts</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <article className="hover-up-2 transition-normal wow fadeInUp animated">
                  <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                      <div className="post-thumb position-relative border-radius-5">
                        <div
                          className="img-hover-slide border-radius-5 position-relative"
                          style={{
                            backgroundImage:
                              'url(assets/imgs/news/news-13.jpg)',
                          }}
                        >
                          <Link href="/single">
                            <a className="img-link"></a>
                          </Link>
                        </div>
                        <ul className="social-share">
                          <li>
                            <Link href="/#">
                              <a>
                                <i className="elegant-icon social_share"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                className="fb"
                                title="Share on Facebook"
                                target="_blank"
                              >
                                <i className="elegant-icon social_facebook"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                className="tw"
                                target="_blank"
                                title="Tweet now"
                              >
                                <i className="elegant-icon social_twitter"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a className="pt" target="_blank" title="Pin it">
                                <i className="elegant-icon social_pinterest"></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                      <div className="post-content">
                        <div className="entry-meta meta-0 font-small mb-10">
                          <Link href="/category">
                            <a>
                              <span className="post-cat text-primary">
                                Food
                              </span>
                            </a>
                          </Link>
                        </div>
                        <h5 className="post-title font-weight-900 mb-20">
                          <Link href="/single">
                            <a>
                              Helpful Tips for Working from Home as a Freelancer
                            </a>
                          </Link>
                          <span className="post-format-icon">
                            <i className="elegant-icon icon_star_alt"></i>
                          </span>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">7 August</span>
                          <span className="time-reading has-dot">
                            11 mins read
                          </span>
                          <span className="post-by has-dot">3k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="hover-up-2 transition-normal wow fadeInUp animated">
                  <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                      <div className="post-thumb position-relative border-radius-5">
                        <div
                          className="img-hover-slide border-radius-5 position-relative"
                          style={{
                            backgroundImage: 'url(assets/imgs/news/news-4.jpg)',
                          }}
                        >
                          <Link href="/single">
                            <a className="img-link"></a>
                          </Link>
                        </div>
                        <ul className="social-share">
                          <li>
                            <Link href="/#">
                              <a>
                                <i className="elegant-icon social_share"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                className="fb"
                                title="Share on Facebook"
                                target="_blank"
                              >
                                <i className="elegant-icon social_facebook"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                className="tw"
                                target="_blank"
                                title="Tweet now"
                              >
                                <i className="elegant-icon social_twitter"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a className="pt" target="_blank" title="Pin it">
                                <i className="elegant-icon social_pinterest"></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                      <div className="post-content">
                        <div className="entry-meta meta-0 font-small mb-10">
                          <Link href="/category">
                            <a>
                              <span className="post-cat text-success">
                                Cooking
                              </span>
                            </a>
                          </Link>
                        </div>
                        <h5 className="post-title font-weight-900 mb-20">
                          <Link href="/single">
                            <a>
                              10 Easy Ways to Be Environmentally Conscious At
                              Home
                            </a>
                          </Link>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">27 Sep</span>
                          <span className="time-reading has-dot">
                            10 mins read
                          </span>
                          <span className="post-by has-dot">22k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="hover-up-2 transition-normal wow fadeInUp animated">
                  <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                      <div className="post-thumb position-relative border-radius-5">
                        <div
                          className="img-hover-slide border-radius-5 position-relative"
                          style={{
                            backgroundImage: 'url(assets/imgs/news/news-2.jpg)',
                          }}
                        >
                          <Link href="/single">
                            <a className="img-link"></a>
                          </Link>
                        </div>
                        <ul className="social-share">
                          <li>
                            <Link href="/#">
                              <a>
                                <i className="elegant-icon social_share"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                className="fb"
                                title="Share on Facebook"
                                target="_blank"
                              >
                                <i className="elegant-icon social_facebook"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                className="tw"
                                target="_blank"
                                title="Tweet now"
                              >
                                <i className="elegant-icon social_twitter"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a className="pt" target="_blank" title="Pin it">
                                <i className="elegant-icon social_pinterest"></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                      <div className="post-content">
                        <div className="entry-meta meta-0 font-small mb-10">
                          <Link href="/category">
                            <a>
                              <span className="post-cat text-warning">
                                Cooking
                              </span>
                            </a>
                          </Link>
                        </div>
                        <h5 className="post-title font-weight-900 mb-20">
                          <Link href="/single">
                            <a>My Favorite Comfies to Lounge in At Home</a>
                          </Link>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">7 August</span>
                          <span className="time-reading has-dot">
                            9 mins read
                          </span>
                          <span className="post-by has-dot">12k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="hover-up-2 transition-normal wow fadeInUp animated">
                  <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                      <div className="post-thumb position-relative border-radius-5">
                        <div
                          className="img-hover-slide border-radius-5 position-relative"
                          style={{
                            backgroundImage: 'url(assets/imgs/news/news-3.jpg)',
                          }}
                        >
                          <Link href="/single">
                            <a className="img-link"></a>
                          </Link>
                        </div>
                        <ul className="social-share">
                          <li>
                            <Link href="/#">
                              <a>
                                <i className="elegant-icon social_share"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                className="fb"
                                title="Share on Facebook"
                                target="_blank"
                              >
                                <i className="elegant-icon social_facebook"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                className="tw"
                                target="_blank"
                                title="Tweet now"
                              >
                                <i className="elegant-icon social_twitter"></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a className="pt" target="_blank" title="Pin it">
                                <i className="elegant-icon social_pinterest"></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                      <div className="post-content">
                        <div className="entry-meta meta-0 font-small mb-10">
                          <Link href="/category">
                            <a>
                              <span className="post-cat text-danger">
                                Travel
                              </span>
                            </a>
                          </Link>
                        </div>
                        <h5 className="post-title font-weight-900 mb-20">
                          <Link href="/single">
                            <a>
                              How to Give Your Space a Parisian-Inspired
                              Makeover
                            </a>
                          </Link>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">27 August</span>
                          <span className="time-reading has-dot">
                            12 mins read
                          </span>
                          <span className="post-by has-dot">23k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
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
              {/* Popular */}
              <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Most popular</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    {articlesList.slice(32, 35).map((article: ArticleType) => {
                      return <PopularCard key={article.id} {...article} />;
                    })}
                  </ul>
                </div>
              </div>

              {/* Authors */}
              <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                <div className="widget-header-1 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Trending topics</h5>
                </div>
                <div className="post-block-list post-module-2">
                  <ul className="list-post">
                    {topicList.slice(2, 5).map((topic: TopicType) => {
                      return <AuthorCard key={topic.id} {...topic} />;
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
