import React from 'react';
import { Layout } from '@components/common';
import Link from 'next/link';
import { PostCarousel } from '@components/organism/home/carousel';
import { useSelector } from 'react-redux';
import { ArticleCard } from '@components/molecule/card';

export const ArticleTemplate = () => {
  let redux = useSelector((state: any) => state);
  let articleList = redux.article.data ? redux.article.data : [];

  return (
    <>
      <Layout>
        <main>
          <div className="archive-header mt-[10vh] text-center">
            <div className="container">
              <h2 className="font-weight-900">Article</h2>
              <div className="breadcrumb">
                <Link href="/">
                  <a rel="nofollow">Article</a>
                </Link>
                <span></span> All
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
          </div>
          <div className="container">
            <div className="loop-grid mb-30">
              <div className="row">
                <div className="col-lg-8 mb-30">
                  <PostCarousel articles={articleList} />
                </div>
                {articleList.slice(33, 40).map(article => {
                  return <ArticleCard key={article.id} {...article} />;
                })}
              </div>

              <div className="row mt-50">
                <div className="col-12">
                  <div className="pagination-area mb-30 wow fadeInUp animated">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-start">
                        <li className="page-item">
                          <Link href="#">
                            <a className="page-link">
                              <i className="elegant-icon arrow_left"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link href="#">
                            <a className="page-link">01</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="#">
                            <a className="page-link">02</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="#">
                            <a className="page-link">03</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="#">
                            <a className="page-link">04</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="#">
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
          </div>
        </main>
      </Layout>
    </>
  );
};
