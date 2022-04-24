import { useSelector } from 'react-redux';
import { SearchFilter } from '@components/molecule/search';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import debounce from 'lodash.debounce';
import ArticleMetaTag from '@public/static/metaData/articleMeta';
import InfiniteScroll from 'react-infinite-scroll-component';
import Filter from '@components/molecule/filter';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = dynamic(() => import('@components/common'));

const ArticleCard = dynamic(
  () => import('@components/molecule/card/articleCard')
);

const ArticleTemplate = () => {
  let redux = useSelector((state: any) => state);
  let articleList = useMemo(
    () => (redux.article.data ? redux.article.data : []),
    [redux.article.data]
  );
  let topicList = useMemo(
    () => (redux.topics.data ? redux.topics.data : []),
    [redux.topics.data]
  );
  let [filteredList, setFilteredList] = useState(articleList.slice(0, 4));
  let [hasMore, setHasMore] = useState(true);
  let router = useRouter().query.data;
  let [preselect, setPreselect] = useState([]);
  const perPage = 3;

  useEffect(() => {
    let topicId = [];
    if (router) {
      topicList.forEach(topic => {
        if (topic.title === router) {
          topicId.push(topic.id);
          setPreselect([{ name: topic.title, id: topic.id }]);
        }
      });

      setFilteredList(
        articleList.filter(article => {
          return topicId.some(value =>
            article.health_topics.split(',').includes(value)
          );
        })
      );
    }
  }, [router, topicList, articleList]);

  const onChange = e => {
    setFilteredList(
      articleList.filter(article =>
        article.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const moreData = () => {
    if (!router) {
      let newList = articleList.slice(
        filteredList.length,
        filteredList.length + perPage
      );

      setFilteredList(prev => [...prev, ...newList]);
      if (filteredList.length === articleList.length) {
        setHasMore(false);
      }
    }
  };

  const debouncedChangeHandler = useCallback(debounce(onChange, 300), []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    let values = selectedList.map(select => {
      return select.id;
    });

    setFilteredList(
      articleList.filter(article => {
        return values.some(value =>
          article.health_topics.split(',').includes(value)
        );
      })
    );

    if (selectedList.length < 1) {
      setFilteredList(articleList);
    }
  };

  return (
    <Layout>
      <ArticleMetaTag />
      <main className="body">
        <div className="w-[95vw] m-auto">
          <div className="archive-header my-[10vh] ">
            <div className="container">
              <div className="breadcrumb flex justify-between  mb-30">
                <section>
                  <h2 className="font-weight-900">Article</h2>
                  <Link href="/">
                    <a>Articles</a>
                  </Link>
                  <span></span> All
                </section>
                <div className="px-4 flex">
                  {preselect ? (
                    <Filter
                      preselect={preselect}
                      filterList={topicList}
                      onSelect={onSelect}
                      onRemove={onSelect}
                    />
                  ) : (
                    <></>
                  )}
                  <SearchFilter
                    onSubmit={() => {}}
                    onChange={debouncedChangeHandler}
                    className="ml-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container gap-2 px-4">
            <div>
              <InfiniteScroll
                dataLength={filteredList.length}
                next={moreData}
                hasMore={hasMore}
                className={'overflow-x'}
                loader={<h4>Loading...</h4>}
              >
                <div className="row ">
                  <article
                    className="grid grid-cols-4 gap-5 mb-30 wow fadeInUp animated"
                    data-wow-delay="0.1s"
                  >
                    {filteredList.map((article, index) => (
                      <ArticleCard {...article} key={article.id} />
                    ))}
                  </article>
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ArticleTemplate;
