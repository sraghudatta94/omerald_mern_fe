import React, { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import debounce from 'lodash.debounce';
import Loader from '@components/common/loader';
import SearchedArticle from './articles/index';
import { SearchedArticlesType } from '@public/types';
import { getSearchedItems } from '@public/functions/readTime';
import { searchedItems } from '@public/static/api';

const TrendingTopics = dynamic(() => import('./trending/index'));

const Search: React.FC<SearchedArticlesType> = () => {
  const [searchedArticles, setSearchedItems] = useState([]);

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  useEffect(() => {
    (async () => {
      setSearchedItems(await postData(searchedItems, { searchText: 'Covid' }));
    })();
  }, []);

  const handleSearch = e => {
    if (!['', ' ', '  ', '  '].includes(e.target.value)) {
      (async () => {
        setSearchedItems(
          await postData(searchedItems, { searchText: e.target.value })
        );
      })();
    } else {
      (async () => {
        setSearchedItems(
          await postData(searchedItems, { searchText: 'Diabetes' })
        );
      })();
    }
  };

  const debouncedChangeHandler = useCallback(debounce(handleSearch, 600), []); // eslint-disable-line react-hooks/exhaustive-deps

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
