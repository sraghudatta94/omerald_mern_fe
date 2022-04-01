import { Layout } from '@components/common';
import { articles, authors, topics } from 'prisma/db/getData';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import articleActionCreator from 'redux/actions/article';
import authorActionCreator from 'redux/actions/author';
import parse from 'html-react-parser';
import topicActionCreator from 'redux/actions/topics';
import Link from 'next/link';
import { topicImagePath } from '@public/static/api';
import { SocialLinks } from '@components/molecule/social';

const Topics = ({ article, author, topic }) => {
  const dispatch = useDispatch();

  let articleList = article ? article : [];
  let authorList = author ? author : [];
  let topicsList = topic ? topic : [];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    authorActionCreator.setAuthor(dispatch, authorList);
    topicActionCreator.setTopics(dispatch, topicsList);
  });

  return (
    <>
      <Layout>
        <main>
          <div className="archive-header mt-[10vh] text-center">
            <div className="container">
              <h2 className="font-weight-900">Article Topics</h2>
              <div className="breadcrumb">
                <Link href="/">
                  <a>Topics</a>
                </Link>
                <span></span> All
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
          </div>
          <div className="container w-[65vw]">
            <div className="loop-list loop-list-style-1">
              <div className="row">
                {topicsList.slice(0, 8).map(topic => {
                  return (
                    <article className="col-md-6 mb-40 wow fadeInUp  animated">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div
                          className="post-thumb thumb-overlay img-hover-slide position-relative"
                          style={{
                            backgroundImage: `url(${
                              topicImagePath + topic.image
                            })`,
                          }}
                        >
                          <Link href="/topics/single">
                            <a className="img-link"></a>
                          </Link>

                          <ul className="social-share">
                            <SocialLinks />
                          </ul>
                        </div>
                        <div className="post-content p-30">
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <Link href={`topics/${topic.title}`}>
                                <a id="titleContent">{topic.title}</a>
                              </Link>
                            </h5>
                            <div className="post-excerpt mb-25 font-small text-muted h-[8vh] overflow-hidden">
                              <p>{parse(topic.body)}</p>
                            </div>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">
                                {topic.created_at.toString().substring(0, 10)}
                              </span>
                              <span className="time-reading has-dot">
                                12 mins read
                              </span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-12">
                <div className="pagination-area mb-30 wow fadeInUp animated">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item">
                        <Link href="#" passHref={true}>
                          <a className="page-link">
                            <i className="elegant-icon arrow_left"></i>
                          </a>
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link href="#" passHref={true}>
                          <a className="page-link">01</a>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="#" passHref={true}>
                          <a className="page-link">02</a>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="#" passHref={true}>
                          <a className="page-link">03</a>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="#" passHref={true}>
                          <a className="page-link">04</a>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="#" passHref={true}>
                          <a className="page-link">
                            <i className="elegant-icon arrow_right"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Topics;

export async function getStaticProps() {
  const article = await articles();
  const author = await authors();
  const topic = await topics();

  return {
    props: {
      article,
      author,
      topic,
    },
  };
}
