import { useSelector } from 'react-redux';
import { SearchFilter } from '@components/molecule/search';
import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import debounce from 'lodash.debounce';
import ArticleMetaTag from '@public/static/metaData/articleMeta';
import InfiniteScroll from 'react-infinite-scroll-component';

const Layout = dynamic(() => import('@components/common'));

const ArticleCard = dynamic(
  () => import('@components/molecule/card/articleCard')
);

const ArticleTemplate = () => {
  let redux = useSelector((state: any) => state);
  let articleList = redux.article.data ? redux.article.data : [];
  let [filteredList, setFilteredList] = useState(articleList.slice(0, 3));
  let [lastPosition, setLastPosition] = useState(0);
  let [hasMore, setHasMore] = useState(true);
  const perPage = 3;

  const onChange = e => {
    setFilteredList(
      articleList.filter(article =>
        article.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const moreData = () => {
    let newList = articleList.slice(
      filteredList.length,
      filteredList.length + perPage
    );
    setFilteredList(prev => [...prev, ...newList]);
    if (filteredList.length === articleList.length) {
      setHasMore(false);
    }
  };

  const debouncedChangeHandler = useCallback(debounce(onChange, 300), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <ArticleMetaTag />
      <main className="body">
        <div className="w-[95vw] md:w-[65vw] m-auto">
          <div className="archive-header my-[10vh] ">
            <div className="container flex justify-between">
              <h2 className="font-weight-900 ">Article</h2>
              <SearchFilter
                onSubmit={() => {}}
                onChange={debouncedChangeHandler}
              />
            </div>
          </div>
          <div className="container">
            <InfiniteScroll
              dataLength={filteredList.length} //This is important field to render the next data
              next={moreData}
              hasMore={hasMore}
              className={'overflow-x'}
              loader={<h4>Loading...</h4>}
              endMessage={<p>All Articles displayed</p>}
            >
              <div className="row">
                {filteredList.map((article, index) => (
                  <ArticleCard {...article} key={article.id} />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ArticleTemplate;
