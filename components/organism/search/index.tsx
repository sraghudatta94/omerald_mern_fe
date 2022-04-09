import React, { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import debounce from 'lodash.debounce';
import Loader from '@components/common/loader';
import SearchedArticle from './articles/index';
import { SearchedArticlesType } from '@public/types';
import { searchByParam } from '@public/functions/readTime';
import InfiniteScroll from 'react-infinite-scroll-component';

const TrendingTopics = dynamic(() => import('./trending/index'));

const Search: React.FC<SearchedArticlesType> = () => {
  const [searchedArticles, setSearchedItems] = useState([]);

  useEffect(() => {
    (async () => {
      let x = await searchByParam('Covid');
      setSearchedItems(x);
    })();
  }, []);

  const handleSearch = e => {
    if (e.target.value === '') {
      (async () => {
        let x = await searchByParam('Covid');
        setSearchedItems(x);
      })();
    }
    (async () => {
      let x = await searchByParam(e.target.value);
      setSearchedItems(x);
    })();
  };

  const debouncedChangeHandler = useCallback(debounce(handleSearch, 500), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main-search-form z-9  overflow-auto !important">
      <div className="container ">
        <div className=" pt-50 pb-50 mb-[5vh]">
          <div className="row mb-20">
            <div className="col-12 align-self-center main-search-form-cover m-auto">
              <p className="text-center">
                <span className="search-text-bg">Search</span>
              </p>
              <form action="#" className="search-header">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search articles or topics"
                    onChange={e => {
                      debouncedChangeHandler(e);
                    }}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-search bg-white" type="submit">
                      <i className="elegant-icon icon_search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <TrendingTopics />
          {!searchedArticles ? (
            <Loader />
          ) : (
            <SearchedArticle articlesList={searchedArticles} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
