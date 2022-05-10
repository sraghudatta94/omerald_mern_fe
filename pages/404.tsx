import React, { useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { articles, authors, topics } from 'prisma/db/getData';
import { useDispatch } from 'react-redux';
import articleActionCreator from 'redux/actions/article';
import topicActionCreator from 'redux/actions/topics';
import authorActionCreator from 'redux/actions/author';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@components/common/index'));
const Error = ({ article, author, topic }) => {
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
    <Layout>
      <main className="bg-grey pt-80 pb-50">
        <div className="container">
          <div className="row pt-80">
            <div className="col-lg-6 col-md-12 d-lg-block d-none pr-50">
              <Image
                src="https://res.cloudinary.com/raghu369/image/upload/v1647676000/page-not-found_hu4vrq.png"
                width="500"
                height="400"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12 pl-50 text-md-center text-lg-left">
              <h1 className="mb-30 font-weight-900 page-404">404</h1>
              <form
                action="#"
                method="get"
                className="search-form d-lg-flex open-search mb-30"
              >
                <i className="icon-search"></i>
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Search..."
                />
              </form>
              <p className="">
                The link you clicked may be broken or the page may have been
                removed.
                <br /> visit the
                <Link href="/">
                  <a> Homepage </a>
                </Link>
                or
                <Link href="/page-contact">
                  <a> Contact us </a>
                </Link>
                about the problem
              </p>
              <div className="form-group">
                <button
                  type="submit"
                  className="button button-contactForm mt-30 bg-blue-800"
                >
                  <Link href="/index">
                    <a className="text-white ">Home page</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Error;

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
