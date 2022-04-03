import { articles, authors, topics } from 'prisma/db/getData';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import articleActionCreator from 'redux/actions/article';
import parse from 'html-react-parser';
import topicActionCreator from 'redux/actions/topics';
import Link from 'next/link';
import { topicImagePath } from '@public/static/api';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('components/common'));

const Topics = ({ article, author, topic }) => {
  const dispatch = useDispatch();

  let articleList = article ? article : [];
  let topicList = topic ? topic : [];
  let router = useRouter().query.slug;

  let topics = topicList.filter(art => art.title === router)[0];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    topicActionCreator.setTopics(dispatch, topicList);
  });

  useEffect(() => {
    if (document.getElementById('content-body'))
      document.getElementById('content-body').innerHTML = article.body;
  });

  return (
    <>
      <Layout>
        <main className="bg-grey pb-30">
          <div className="container single-contentw-[95vw] md:w-[65vw]">
            <div className="entry-header entry-header-style-1  mt-[10vh]  pt-50">
              <h1 className="entry-title mb-50  mt-[10vh]  font-weight-900">
                {topics.title}
              </h1>
              <div className="row">
                <div className="col-md-6">
                  <div className="entry-meta align-items-center meta-2 font-small color-muted">
                    <p className="mb-5">
                      By
                      <Link href="/author">
                        <a>
                          <span className="author-name font-weight-bold">
                            Barbara Cartland
                          </span>
                        </a>
                      </Link>
                    </p>
                    <span className="mr-10">
                      {topics.created_at.toString().substring(0, 10)}
                    </span>
                    <span className="has-dot"> 8 mins read</span>
                  </div>
                </div>
                <div className="col-md-6 text-right d-none d-md-inline">
                  <ul className="header-social-network d-inline-block list-inline mr-15">
                    <li className="list-inline-item text-muted">
                      <span>Share this: </span>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="social-icon fb text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i className="elegant-icon social_facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="social-icon tw text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i className="elegant-icon social_twitter "></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="social-icon pt text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i className="elegant-icon social_pinterest "></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <article className="entry-wraper mt-[5vh]">
              <div className="excerpt mb-30">
                <Image
                  src={topicImagePath + topics.image}
                  width="800"
                  height="400"
                  alt="topic"
                />
              </div>
              <div className="entry-main-content dropcap wow fadeIn animated content-body">
                {parse(topics.body)}
              </div>
              <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                <div className="tags">
                  <span>Tags: </span>
                  <Link href="/category">
                    <a>deer</a>
                  </Link>
                  <Link href="/category">
                    <a>nature</a>
                  </Link>
                  <Link href="/category">
                    <a>conserve</a>
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
                      <Image
                        src="/assets/imgs/authors/author-3.jpg"
                        alt="author"
                        className="avatar"
                        width="60"
                        height="60"
                      />
                    </a>
                  </Link>
                </div>
                <div className="author-info">
                  <h4 className="font-weight-bold mb-20">
                    <span className="vcard author">
                      <span className="fn">
                        <Link href="/author">
                          <a>Barbara Cartland</a>
                        </Link>
                      </span>
                    </span>
                  </h4>
                  <h5 className="text-muted">About author</h5>
                  <div className="author-description text-muted">
                    You should write because you love the shape of stories and
                    sentences and the creation of different words on a page.{' '}
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
            </article>
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

export async function getStaticPaths() {
  const topic = await topics();

  const paths = topic
    .filter(topic => topic.body !== null)
    .map(post => ({
      params: { slug: post.title },
    }));

  return {
    paths: paths,
    fallback: false,
  };
}
