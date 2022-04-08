import { articles, authors, topics, users } from 'prisma/db/getData';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import articleActionCreator from 'redux/actions/article';
import authorActionCreator from 'redux/actions/author';
import parse from 'html-react-parser';
import topicActionCreator from 'redux/actions/topics';
import Link from 'next/link';
import { topicImagePath } from '@public/static/api';
import SocialLinks from '@components/molecule/social';
import Layout from '@components/common';
import userActionCreator from 'redux/actions/users';
import Filter from '@components/molecule/filter';
import debounce from 'lodash.debounce';
import { SearchFilter } from '@components/molecule/search';
import InfiniteScroll from 'react-infinite-scroll-component';

const Topics = ({ article, author, topic, user }) => {
  const dispatch = useDispatch();

  let articleList = article ? article : [];
  let authorList = author ? author : [];
  let topicsList = topic ? topic : [];
  let usersList = user ? user : [];
  let [filteredList, setFilteredList] = useState(topicsList.slice(0, 4));
  let [hasMore, setHasMore] = useState(true);
  const perPage = 4;

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    authorActionCreator.setAuthor(dispatch, authorList);
    topicActionCreator.setTopics(dispatch, topicsList);
    userActionCreator.setUsers(dispatch, usersList);
  });

  const onChange = e => {
    // setFilteredList(
    //   articleList.filter(article =>
    //     article.title.toLowerCase().includes(e.target.value.toLowerCase())
    //   )
    // );
  };

  const moreData = () => {
    let newList = topicsList.slice(
      filteredList.length,
      filteredList.length + perPage
    );
    setFilteredList(prev => [...prev, ...newList]);
    if (filteredList.length === topicsList.length) {
      setHasMore(false);
    }
  };

  const debouncedChangeHandler = useCallback(debounce(onChange, 300), []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSelect = (selectedList, selectedItem) => {
    let values = selectedList.map(select => {
      return select.id;
    });

    // setFilteredList(
    //   articleList.filter(article => {
    //     return values.some(value =>
    //       article.health_topics.split(',').includes(value)
    //     );
    //   })
    // );

    // if (selectedList.length < 1) {
    //   setFilteredList(articleList);
    // }
  };

  return (
    <>
      <Layout>
        <main>
          <div className="archive-header mt-[10vh] text-left">
            <div className="container">
              <div className="breadcrumb flex justify-between mb-50">
                <section>
                  <h2 className="font-weight-900">Article Topics</h2>
                  <Link href="/">
                    <a>Topics</a>
                  </Link>
                  <span></span> All
                </section>
                <section className="flex ">
                  <Filter
                    filterList={topicsList}
                    onSelect={onSelect}
                    onRemove={onSelect}
                  />
                  <SearchFilter
                    onSubmit={() => {}}
                    onChange={debouncedChangeHandler}
                    className="ml-4"
                  />
                </section>
              </div>
            </div>
          </div>
          <div className="container w-[65vw]">
            <InfiniteScroll
              dataLength={topicsList.length}
              next={moreData}
              hasMore={hasMore}
              className={'overflow-x'}
              loader={<h4>Loading...</h4>}
            >
              <div className="loop-list loop-list-style-1 grid grid-cols-2 gap-10">
                {filteredList.map(topic => {
                  return (
                    <div
                      key={topic.id}
                      className="post-card-1 border-radius-10 hover-up"
                    >
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
                            {/* <p>{parse(topic.body)}</p> */}
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
                  );
                })}
              </div>
            </InfiniteScroll>
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
  const user = await users();

  return {
    props: {
      article,
      author,
      topic,
      user,
    },
  };
}
