import React, { useEffect } from 'react';
import { Layout } from '@components/common';
import Link from 'next/link';
import { SocialLinks } from '@components/molecule/social';
import Image from 'next/image';
import { articleImagePath } from '@public/static/api';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { PopularCard } from '@components/molecule/card';
import { TopicType } from '@public/static/types/topics';

export const SinglePostTemplate = () => {
  let redux = useSelector((state: any) => state);
  let articlesList = redux.article.data ? redux.article.data : [];

  let router = useRouter().query.slug;
  let article = articlesList.filter(art => art.title === router)[0];
  let articleList = articlesList
    .filter(art => article.health_topics.includes(art.health_topics))
    .slice(0, 5);

  let topicList: TopicType[] = redux.topics.data ? redux.topics.data : [];


  return (
    <>
      <Layout>
        <main className="bg-grey pt-50 pb-50">
          <div className="pb-50">
            <div className="container w-[60vw] mt-[10vh]">
              <div className="row">
                <div className="col-lg-8">
                  <div className="single-content2">
                    <div className="entry-header entry-header-style-1 mb-50">
                      <h1 className="entry-title mb-30 font-weight-900">
                        {article ? article.title : ''}
                      </h1>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="entry-meta align-items-center meta-2 font-small color-muted">
                            <p className="mb-5">
                              <Link href="/author">
                                <a className="author-avatar" href="#">
                                  <Image
                                    className="img-circle"
                                    src="https://res.cloudinary.com/raghu369/image/upload/v1648797906/Omerald/assets/icon-5404125_1280_wdlqq6.webp"
                                    alt="profile"
                                    width="50"
                                    height="50"
                                  />
                                </a>
                              </Link>
                              By
                              <Link href="/author">
                                <a>
                                  <span className="author-name font-weight-bold">
                                    {article
                                      ? article.updated_by
                                      : 'Omerald Author'}
                                  </span>
                                </a>
                              </Link>
                            </p>
                            <span className="mr-10">
                              {article
                                ? article.created_at.toString().substring(0, 10)
                                : ''}
                            </span>
                            <span className="has-dot"> 8 mins read</span>
                          </div>
                        </div>
                        <div className="col-md-6 text-right d-none d-md-inline">
                          <ul className="header-social-network d-inline-block list-inline mr-15">
                            <li className="list-inline-item text-muted">
                              <span>Share this: </span>
                            </li>
                            <SocialLinks />
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!--end single header--> */}
                    <figure className="image mb-30 m-auto text-center border-radius-10">
                      <Image
                        className="w-[100%] h-[40vh]"
                        src={article ? articleImagePath + article.image : '/'}
                        alt="profile"
                        layout="responsive"
                        width="500"
                        height="300"
                      />
                    </figure>
                    {/* <!--figure--> */}
                    <article className="entry-wraper mb-50">
                      <div className="excerpt mb-30">
                        {article ? article.short_description : ''}
                      </div>
                      <div
                        className="entry-main-content dropcap wow fadeIn animated"
                        id="article-content"
                      ></div>
                      <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                        <div className="tags">
                          <span>Tags: </span>
                          <Link href="/topics">
                            <a>{article ? article.health_topics : ''}</a>
                          </Link>
                        </div>
                      </div>
                      <div className="single-social-share clearfix wow fadeIn animated">
                        <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
                          <span className="hit-count mr-15">
                            <i className="elegant-icon icon_comment_alt mr-5"></i>
                            182 comments
                          </span>
                          <span className="hit-count mr-15">
                            <i className="elegant-icon icon_like mr-5"></i>
                            268 likes
                          </span>
                          <span className="hit-count">
                            <i className="elegant-icon icon_star-half_alt mr-5"></i>
                            Rate: 9/10
                          </span>
                        </div>
                        <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
                          <li className="list-inline-item text-muted">
                            <span>Share this: </span>
                          </li>
                          <li className="list-inline-item">
                            <Link href="/#">
                              <a
                                className="social-icon fb text-xs-center"
                                target="_blank"
                              >
                                <i className="elegant-icon social_facebook"></i>
                              </a>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="/#">
                              <a
                                className="social-icon tw text-xs-center"
                                target="_blank"
                              >
                                <i className="elegant-icon social_twitter "></i>
                              </a>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="/#">
                              <a
                                className="social-icon pt text-xs-center"
                                target="_blank"
                              >
                                <i className="elegant-icon social_pinterest "></i>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!--author box--> */}
                      <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
                        <div className="author-image mb-30">
                          <Link href="/author">
                            <a>
                              <img
                                src="assets/imgs/authors/author-3.jpg"
                                alt=""
                                className="avatar"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="author-info">
                          <h4 className="font-weight-bold mb-20">
                            <span className="vcard author">
                              <span className="fn">
                                <Link href="/author">
                                  <a>
                                    {article ? article.updated_by : 'Author'}
                                  </a>
                                </Link>
                              </span>
                            </span>
                          </h4>
                          <h5 className="text-muted">About author</h5>
                          <div className="author-description text-muted">
                            You should write because you love the shape of
                            stories and sentences and the creation of different
                            words on a page.{' '}
                          </div>
                          <Link href="/author">
                            <a className="author-bio-link mb-md-0 mb-3">
                              View all posts (125)
                            </a>
                          </Link>
                          <div className="author-social">
                            <ul className="author-social-icons">
                              <li className="author-social-link-facebook">
                                <Link href="/#">
                                  <a target="_blank">
                                    <i className="ti-facebook"></i>
                                  </a>
                                </Link>
                              </li>
                              <li className="author-social-link-twitter">
                                <Link href="/#">
                                  <a target="_blank">
                                    <i className="ti-twitter-alt"></i>
                                  </a>
                                </Link>
                              </li>
                              <li className="author-social-link-pinterest">
                                <Link href="/#">
                                  <a target="_blank">
                                    <i className="ti-pinterest"></i>
                                  </a>
                                </Link>
                              </li>
                              <li className="author-social-link-instagram">
                                <Link href="/#">
                                  <a target="_blank">
                                    <i className="ti-instagram"></i>
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* <!--Comments--> */}
                      <div className="comments-area">
                        <div className="widget-header-2 position-relative mb-30">
                          <h5 className="mt-5 mb-30">Comments</h5>
                        </div>
                        <div className="comment-list wow fadeIn animated">
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb">
                                <img
                                  src="assets/imgs/authors/author-4.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="desc">
                                <p className="comment">
                                  Vestibulum euismod, leo eget varius gravida,
                                  eros enim interdum urna, non rutrum enim ante
                                  quis metus. Duis porta ornare nulla ut
                                  bibendum
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <h5>
                                      <Link href="/#">
                                        <a>Rosie</a>
                                      </Link>
                                    </h5>
                                    <p className="date">6 minutes ago </p>
                                  </div>
                                  <div className="reply-btn">
                                    <Link href="/#">
                                      <a className="btn-reply">Reply</a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--comment form--> */}
                      <div className="comment-form wow fadeIn animated">
                        <div className="widget-header-2 position-relative mb-30">
                          <h5 className="mt-5 mb-30">Leave a Reply</h5>
                        </div>
                        <form
                          className="form-contact comment_form"
                          action="#"
                          id="commentForm"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control w-100"
                                  name="comment"
                                  id="comment"
                                  placeholder="Write Comment"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  type="text"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="website"
                                  id="website"
                                  type="text"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn button button-contactForm"
                            >
                              Post Comment
                            </button>
                          </div>
                        </form>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-lg-4 primary-sidebar sticky-sidebar">
                  <div className="widget-area">
                    <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                      <Image
                        className="about-author-img mb-5"
                        src="https://res.cloudinary.com/raghu369/image/upload/v1648797906/Omerald/assets/icon-5404125_1280_wdlqq6.webp"
                        alt=""
                        width="100"
                        height="100"
                      />
                      <h5 className="mb-20">
                        Hello, {article ? article.updated_by : ''}
                      </h5>
                      <p className="font-medium text-muted mb-10">
                        Hi, I’m Stenven, a Florida native, who left my career in
                        my life forever.
                      </p>
                      <strong>Follow me: </strong>
                      <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                        <li className="list-inline-item">
                          <Link href="/#">
                            <a className="fb" target="_blank" title="Facebook">
                              <i className="elegant-icon social_facebook"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/#">
                            <a className="tw" target="_blank" title="Tweet now">
                              <i className="elegant-icon social_twitter"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="/#">
                            <a className="pt" target="_blank" title="Pin it">
                              <i className="elegant-icon social_pinterest"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="post-block-list post-module-1">
                        <div
                          className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                          data-wow-delay="0.2s"
                        >
                          <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Health Topics(1)</h5>
                          </div>
                          <div className="tagcloud mt-50">
                            {topicList.slice(0, 1).map((topic: TopicType) => {
                              return (
                                <Link href="/topics" key={topic.id}>
                                  <a className="tag-cloud-link ">
                                    {topic.title}
                                  </a>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Similar Articles</h5>
                      </div>
                      <div className="post-block-list post-module-1">
                        <ul className="list-post">
                          {articleList.map(article => {
                            return (
                              <PopularCard key={article.id} {...article} />
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Recent Articles</h5>
                      </div>
                      <div className="post-block-list post-module-1">
                        <ul className="list-post">
                          {articlesList.slice(10, 20).map(article => {
                            return (
                              <PopularCard key={article.id} {...article} />
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
        </main>
      </Layout>
    </>
  );
};
