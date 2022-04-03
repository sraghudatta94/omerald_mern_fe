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
  let [filteredList, setFilteredList] = useState(articleList);

  const onChange = e => {
    setFilteredList(
      articleList.filter(article =>
        article.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const debouncedChangeHandler = useCallback(debounce(onChange, 300), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <ArticleMetaTag />
      <main>
        <div className="w-[95vw] m-auto">
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
            <div className="row">
              {filteredList.map((article, index) => (
                <ArticleCard {...article} key={article.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ArticleTemplate;
